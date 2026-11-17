import {useCatalog} from "../../features/catalog/CatalogContext.jsx";
import {useAuth} from "../../features/auth/AuthContext.jsx";
import {message} from "antd";
import { useLocalDay } from "../../features/gamification/utils/useLocalDay.js";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, Button, Dropdown } from "antd";
import BrandLogo from "../../shared/components/BrandLogo.jsx";
import Icon from "../../shared/components/Icon.jsx";
import { currentStreak } from "../../features/gamification/utils/progress.js";
import { schoolPath } from "../router/routes.js";

import { useLearning } from "../../features/gamification/context/LearningProvider.jsx";

export default function CampusHeader({
  screen,
  library,
  schoolId,
  theme,
  sound,
  unread,
  onTheme,
  onSound,
  onNotice,
}) {
  const {schools:SCHOOLS}=useCatalog();
  useLocalDay();
  const {user,logout}=useAuth();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { progress } = useLearning();
  useEffect(() => setOpen(false), [location.pathname, location.search]);
  const focused = screen === "quiz" || screen === "setup";
  const links = [
    { to: "/", label: "Trang chủ", active: screen === "home" && !library },
    {
      to: schoolPath(schoolId),
      label: "Ôn thi",
      active: library && ["home", "study", "result"].includes(screen),
    },
    { to: "/tro-choi", label: "Giải trí", active: screen === "games" },
    { to: "/hanh-trinh", label: "Hành trình", active: screen === "journey" },
    { to: "/gioi-thieu", label: "Giới thiệu", active: false },
  ];
  const items = [
    ...(user?[{key:"account",label:`${user.name} · ${user.role}`,disabled:true},
      {key:"profile",label:<Link to="/profile">Thông tin cá nhân</Link>,disabled:screen==="quiz"},
      ...(user.role==="ADMIN"?[{key:"admin",label:<Link to="/admin">Quản trị</Link>}]:[]),
      {key:"logout",label:"Đăng xuất",disabled:screen==="quiz",onClick:async()=>{try{await logout();message.success("Đã đăng xuất.");}catch(e){message.error("Chưa đăng xuất được: "+e.message);}}}]
      :[{key:"login",label:<Link to={`/login?next=${encodeURIComponent(location.pathname+location.search)}`}>Đăng nhập</Link>},
        {key:"register",label:<Link to="/register">Đăng ký</Link>}]),
    {
      key: "theme",
      label:
        theme === "dark" ? "☀ Chuyển giao diện sáng" : "☾ Chuyển giao diện tối",
      onClick: onTheme,
    },
    {
      key: "sound",
      label: sound === "on" ? "♪ Tắt âm thanh" : "♪ Bật âm thanh",
      onClick: onSound,
    },
    {
      key: "notice",
      label: `Thông báo${unread ? ` (${unread} mới)` : ""}`,
      onClick: onNotice,
    },
    {
      key: "history",
      label: <Link to="/history">Lịch sử làm bài</Link>,
      disabled: screen === "quiz",
    },
  ];
  return <header className="topbar modern-header campus-header jler-header">
    <div className="campus-header-inner">
      <Link to="/" className="campus-brand" aria-label="JLer — Trang chủ"><BrandLogo/></Link>
      {focused?<span className="campus-focus">{screen==="quiz"?"Đang làm bài · Tự tin nhé!":"Chuẩn bị bài thi"}</span>:<>
        <button className="campus-menu-toggle" aria-label={open?"Đóng menu":"Mở menu"} aria-expanded={open} aria-controls="campus-menu" onClick={()=>setOpen(!open)}>{open?"×":"☰"}</button>
        <nav id="campus-menu" className={`campus-header-nav${open?" is-open":""}`} aria-label="Điều hướng chính">
          {links.map(link=><Link key={link.to} to={link.to} onClick={()=>setOpen(false)} className={link.active?"selected":""} aria-current={link.active?"page":undefined}>{link.label}</Link>)}
        </nav>
      </>}
      <div className="campus-header-tools">
        {!focused&&<Link to={schoolPath(schoolId)} className="jler-campus-chip" title="Thư viện trường của bạn"><Icon name="book" width={16}/>{SCHOOLS.find(s=>s.id===schoolId)?.shortName||"Ôn thi"}</Link>}
        {!focused&&<Link to="/hanh-trinh" className="jler-streak" title={`Chuỗi học ${currentStreak(progress)} ngày · Cấp ${Math.floor(progress.xp/100)+1}`}><Icon name="fire" width={17}/>{currentStreak(progress)}</Link>}
        <Button type="text" className="jler-icon-button" onClick={onTheme} aria-label={theme==="dark"?"Chuyển giao diện sáng":"Chuyển giao diện tối"} icon={<Icon name={theme==="dark"?"sun":"moon"} width={20}/>}/>
        <Button type="text" className="jler-icon-button jler-notice" onClick={onNotice} aria-label={`Thông báo, ${unread} chưa đọc`} icon={<Icon name="bell" width={20}/>}>{unread>0&&<i className="jler-unread"/>}</Button>
        <Dropdown menu={{items}} trigger={["click"]} placement="bottomRight">
          <Button className={`jler-account${user?"":" is-guest"}`} aria-label="Mở menu tài khoản và tiện ích">
            {user?<><Avatar size={32}>{user.name?.slice(0,1).toUpperCase()}</Avatar><span className="jler-account-name">{user.name}</span><span className="jler-account-chevron" aria-hidden="true">⌄</span></>:<><Icon name="grid" width={17}/><span>Tài khoản</span></>}
          </Button>
        </Dropdown>
      </div>
    </div>
  </header>;
}
