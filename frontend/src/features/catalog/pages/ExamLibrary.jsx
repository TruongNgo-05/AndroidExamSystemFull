import {useCatalog} from "../CatalogContext.jsx";
import { Button, Select } from "antd";
import { useEffect, useState } from "react";
import { QUIZ_MAJORS, MAJOR_IMAGES, SUBJECT_IMAGE } from "../data/majors.js";
import { asset, catalog, filterSets, majorId } from "../../quiz/utils/quiz.js";
import Icon from "../../../shared/components/Icon.jsx";
import SearchBar from "../../../shared/components/SearchBar.jsx";
import PaginationBar from "../../../shared/components/PaginationBar.jsx";
export default function ExamLibrary({
  sets,
  selected,
  onSelect,
  keyword,
  onSearch,
  onOpen,
  allSubjects,
  onAllSubjects,
}) {
  const {majors:serverMajors,topics=[]}=useCatalog();
  const [topic,setTopic]=useState("");
  const majors = catalog(serverMajors, sets);
  const results = filterSets(sets, selected, keyword).filter(e=>!topic||e.topicId===topic);
  const showCategories = !selected && !keyword.trim() && !allSubjects && !topic;
  const current = majors.find((m) => m.id === selected);
  const questionCount = sets.reduce((n, s) => n + s.questions.length, 0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [selected, keyword, allSubjects, topic]);

  const pagedResults = results.slice((page - 1) * 10, page * 10);
  return (
    <>
      <section className="exam-library-search">
        {topics.length>0&&<Select aria-label="Lọc theo chủ đề" style={{minWidth:200,marginBottom:12}} value={topic} onChange={setTopic} options={[{value:"",label:"Tất cả chủ đề"},...topics.map(t=>({value:t.id,label:t.title}))]}/>}
        <div className="hero-search">
          <SearchBar
            label="Tìm môn hoặc đề thi"
            value={keyword}
            onChange={onSearch}
            hint={
              selected ? `Tìm trong ${current?.title}…` : "Bạn muốn ôn môn gì?"
            }
          />
          {selected ? (
            <Button
              className="link"
              onClick={() => {
                onSelect("");
                onAllSubjects(true);
              }}
            >
              Tìm trên tất cả các ngành <Icon name="arrow" width="17" />
            </Button>
          ) : (
            <div className="hero-stats">
              <span>
                <b>{majors.length}</b> chuyên ngành
              </span>
              <span>
                <b>{sets.length}</b> bộ đề
              </span>
              <span>
                <b>{questionCount.toLocaleString("vi-VN")}</b> câu hỏi
              </span>
            </div>
          )}
        </div>
      </section>
      <div className="section-heading catalog-heading">
        <div>
          <span className="eyebrow">KHÁM PHÁ THƯ VIỆN</span>
          <h2>
            {current?.title ||
              (showCategories ? "Bạn đang học ngành nào?" : "Môn học & đề thi")}
          </h2>
        </div>
        <div className="actions view-tabs">
          <Button
            className={showCategories ? "active" : ""}
            onClick={() => {
              onSelect("");
              onSearch("");
              onAllSubjects(false);
            }}
          >
            <Icon name="grid" width="16" /> Chuyên ngành{" "}
            <span>{majors.length}</span>
          </Button>
          <Button
            className={!showCategories && !selected ? "active" : ""}
            onClick={() => {
              onSelect("");
              onAllSubjects(true);
            }}
          >
            <Icon name="book" width="16" /> Tất cả đề <span>{sets.length}</span>
          </Button>
        </div>
      </div>
      {showCategories ? (
        <div className="catalog-grid">
          {majors.map((m, index) => {
            const exams = filterSets(sets, m.id);
            return (
              <button
                className={`catalog-card color-${index % 4}`}
                key={m.id}
                onClick={() => {
                  onSelect(m.id);
                  onSearch("");
                }}
              >
                <div className="catalog-cover">
                  {MAJOR_IMAGES[m.id] && (
                    <img
                      key={m.image || MAJOR_IMAGES[m.id]}
                      src={asset(m.image || MAJOR_IMAGES[m.id])}
                      alt=""
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.hidden = true;
                      }}
                    />
                  )}
                  <span className="cover-caption">Khám phá chuyên ngành</span>
                </div>
                <div className="card-body">
                  <span className="eyebrow">CHUYÊN NGÀNH</span>
                  <h3>{m.title}</h3>
                  <div className="card-stats">
                    <span>
                      <b>{exams.length}</b> bộ đề
                    </span>
                    <span>
                      {exams.length
                        ? `${exams.reduce((n, s) => n + s.questions.length, 0).toLocaleString("vi-VN")} câu hỏi`
                        : "Sắp cập nhật"}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <>
          <p className="muted results-count" role="status">
            {results.length} đề phù hợp
            {selected
              ? " · Bao gồm các môn dùng chung"
              : " trên tất cả các ngành"}
          </p>
          <div className="catalog-grid">
            {pagedResults.map((s, index) => (
              <button
                className={`catalog-card exam-card color-${index % 4}`}
                key={s.id}
                onClick={() => onOpen(s)}
              >
                <div className="catalog-cover">
                  <img
                    key={s.image || SUBJECT_IMAGE}
                    src={asset(s.image || SUBJECT_IMAGE)}
                    alt=""
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.hidden = true;
                    }}
                  />
                  <span className="cover-caption">Thư viện ôn tập JLer</span>
                </div>
                <div className="card-body">
                  <span className="eyebrow">
                    {majors.find((m) => m.id === majorId(s))?.title ||
                      "Môn dùng chung"}
                  </span>
                  <h3>{s.title}</h3>
                  <p className="card-description">{s.description}</p>
                  <div className="card-stats">
                    <span>{s.questions.length} câu hỏi</span>
                    <span className="start-link">
                      Bắt đầu <Icon name="arrow" width="16" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <PaginationBar
            current={page}
            total={results.length}
            pageSize={10}
            onChange={setPage}
            className="catalog-pagination"
          />
          {!results.length && (
            <div className="empty">
              <Icon name="search" width="36" height="36" />
              <h3>Chưa tìm thấy đề phù hợp</h3>
              <p>Thử từ khóa khác hoặc khám phá các ngành còn lại.</p>
              <Button
                onClick={() => {
                  onSearch("");
                  onSelect("");
                  onAllSubjects(true);
                }}
              >
                Xem tất cả đề
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
}
