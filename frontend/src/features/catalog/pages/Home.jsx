import {useCatalog} from "../CatalogContext.jsx";
import Icon from "../../../shared/components/Icon.jsx";
import { GAMES } from "../../games/data/games.js";
import { schoolPath } from "../../../app/router/routes.js";
import { Link, useLocation } from "react-router-dom";
import ExamLibrary from "./ExamLibrary.jsx";
import GameCards from "../../games/components/GameCards.jsx";
import { useLearning } from "../../gamification/context/LearningProvider.jsx";
import ProgressStrip from "../../gamification/components/ProgressStrip.jsx";
import { ITEMS, jeliEvolution, levelInfo } from "../../gamification/utils/progress.js";
import { getSchoolSets } from "../../schools/data/schools.js";
import { INTRO_VIDEO_URL } from "../../../shared/config/media.js";
import { asset } from "../../quiz/utils/quiz.js";
import jeli from "../../../assets/images/linhvatjler.gif";
export default function Home(props) {
  const {schools:SCHOOLS}=useCatalog();
  const { progress, storageError } = useLearning(),
    location = useLocation();
  const level = levelInfo(progress.xp);
  const evolution = jeliEvolution(level.level);
  const school =
    SCHOOLS.find((s) => s.id === (props.schoolId || props.preferredSchoolId || progress.school)) ||
    SCHOOLS.find(s=>s.id==="hubt") || SCHOOLS[0];
  if(!school)return <section className="panel"><h1>Chưa có trường học</h1><p>Quản trị viên cần thêm trường trong mục Quản trị.</p><Link to="/admin/schools">Quản lý trường học</Link></section>;
  const schoolSets = getSchoolSets(props.sets, school.id),
    equipped = ITEMS.find((i) => i.id === progress.equipped);
  const libraryOnly =
    !!props.schoolId ||
    !!props.selected ||
    !!props.keyword.trim() ||
    props.allSubjects ||
    new URLSearchParams(location.search).get("tab") === "exams";
  return (
    <div className="campus-home">
      {!libraryOnly && (
        <section className="home-full-banner">
          <div className="banner-inner">
            <div>
              <span className="home-hero-badge"><Icon name="book" width="16" /> GÓC ÔN TẬP CỦA BẠN · {school.shortName}</span>
              <h1>
                Ôn chắc hôm nay.
                <br />
                <em>Tự tin ngày thi.</em>
              </h1>
              <p>
                Chọn trường, tìm bộ đề và luyện trắc nghiệm theo nhịp của bạn.
                Khi cần nghỉ, Jeli có cả một phòng trò chơi chờ sẵn!
              </p>
              <div className="campus-hero-actions">
                <Link
                  className="campus-button primary"
                  to={`${schoolPath(school.id)}?tab=exams#exam-library`}
                >
                  Ôn thi trắc nghiệm →
                </Link>
                <Link className="campus-button" to="/tro-choi">
                  Chơi cùng Jeli 🎮
                </Link>
              </div>
              <div className="hero-library-stats" aria-label="Thư viện hiện tại">
                <div><b>{schoolSets.length}</b><span>Bộ đề ôn tập</span></div>
                <div><b>{schoolSets.reduce((n, set) => n + set.questions.length, 0).toLocaleString("vi-VN")}</b><span>Câu hỏi</span></div>
                <div><b>{GAMES.length}</b><span>Trò chơi xả stress</span></div>
              </div>
            </div>
            <div className={`campus-jeli fire-${evolution.color}`}>
              <div className="hero-jeli-orbit" aria-hidden="true" />
              <span className="jeli-speech">
                {equipped?.line ||
                  "Não căng quá? Ôn một câu, cười một chút. Jeli cũng đang cố đây! 🧋"}
              </span>
              <img src={jeli} alt="Jeli đồng hành ôn tập" />
              <span className="jeli-accessory" aria-label={equipped?.name || "Jeli đồng hành"}>{equipped?.emoji || "✨"}</span>
              <div className="hero-jeli-level">
                <div><span className="jeli-stage">{evolution.icon} {evolution.name}</span><b>Cấp {level.level}</b></div>
                <progress aria-label="Jeli tiến tới cấp tiếp theo" max="100" value={level.current} />
                <small>Còn {level.remaining} XP, cùng lên cấp nhé!</small>
              </div>
            </div>
          </div>
        </section>
      )}
      {!libraryOnly && <section className="home-daily-progress" aria-label="Nhận lửa và tiến trình hôm nay"><ProgressStrip /></section>}
      {storageError && <p role="alert">{storageError}</p>}
      <section id="exam-library" className="campus-exams">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ÔN TẬP THEO TRƯỜNG</span>
            <h2>Chọn bộ đề. Bắt đầu ôn tập.</h2>
          </div>
          {libraryOnly && <Link to="/">← Trang chủ</Link>}
        </div>
        {!libraryOnly&&<div className="campus-school-grid" aria-label="Chọn trường đại học">
          {SCHOOLS.map(s=><button type="button" key={s.id} className={`campus-school-tile ${s.id===school.id?"selected":""}`} onClick={()=>props.onSchoolChange(s.id)}>
            <img src={asset(s.image)} alt=""/><span><strong>{s.shortName}</strong><b>{s.name}</b><small>{s.subjectCount??getSchoolSets(props.sets,s.id).length} bộ đề · {s.questionCount??getSchoolSets(props.sets,s.id).reduce((n,e)=>n+e.questions.length,0)} câu hỏi</small></span>
          </button>)}
        </div>}
        <div className="school-selection">
          <img src={asset(school.image)} alt={school.shortName} />
          <div>
            <label htmlFor="school-select">Trường của bạn</label>
            <select
              id="school-select"
              value={school.id}
              onChange={(e) => props.onSchoolChange(e.target.value)}
            >
              {SCHOOLS.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {schoolSets.length ? (
          <ExamLibrary {...props} sets={schoolSets} />
        ) : (
          <div className="school-empty">
            <h3>{school.shortName}: đang chờ bộ đề đầu tiên</h3>
            <p>Chọn trường khác để ôn tập hoặc nghỉ một chút với Jeli.</p>
            <Link className="campus-button primary" to="/tro-choi">
              Khám phá trò chơi →
            </Link>
          </div>
        )}
      </section>
      {!libraryOnly && (
        <>
          <section className="home-games">
            <div className="section-heading">
              <div>
                <span className="eyebrow">ÔN XONG · XẢ STRESS</span>
                <h2>Đừng để não hết pin.</h2>
              </div>
              <Link to="/tro-choi">Tất cả trò chơi →</Link>
            </div>
            <GameCards />
          </section>
          <section className="campus-video">
            <div>
              <span className="eyebrow">LÀM QUEN VỚI JLer</span>
              <h2>Một người bạn ôn tập, nhiều niềm vui.</h2>
              <p>Khám phá thư viện đề, trò chơi và hành trình cùng Jeli.</p>
              <Link to="/gioi-thieu">Xem trang giới thiệu →</Link>
            </div>
            <iframe
              src={INTRO_VIDEO_URL}
              title="Video giới thiệu JLer"
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </section>
        </>
      )}
    </div>
  );
}
