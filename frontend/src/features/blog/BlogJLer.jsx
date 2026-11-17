import {useCatalog} from "../catalog/CatalogContext.jsx";
import ThemeToggle from "../../shared/components/ThemeToggle.jsx";
import Rail from "./components/ContentRail.jsx";
import { Link } from "react-router-dom";
import { getSchoolSets } from "../schools/data/schools.js";

import { asset } from "../quiz/utils/quiz.js";
import { schoolPath } from "../../app/router/routes.js";
import { memo, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import BrandLogo from "../../shared/components/BrandLogo.jsx";
import SearchBar from "../../shared/components/SearchBar.jsx";
import BackToTop from "../../shared/components/BackToTop.jsx";
import SiteFooter from "../../app/components/SiteFooter.jsx";
import useBlogPage from "./hooks/useBlogPage.js";
import { getBlogMarkup } from "./templates/blogMarkup.js";
import "./styles/blog.css";

function BlogJLer() {
  const {schools:SCHOOLS,exams:quizSets,pages}=useCatalog();
  const introduction=pages?.find(p=>p.id==="gioi-thieu");
  const rootRef = useRef(null);
  const [keyword, setKeyword] = useState("");
  // Keep static markup stable while React updates portals and search state.
  const markup = useMemo(
    () => <div dangerouslySetInnerHTML={{ __html: getBlogMarkup(introduction) }} />,
    [introduction],
  );
  const slots = useBlogPage(rootRef, keyword, setKeyword);
  return (
    <>
      <div className="jler-root" ref={rootRef}>
        {markup}
        {slots.search &&
          createPortal(
            <SearchBar
              label="Tìm môn hoặc đề thi"
              value={keyword}
              onChange={setKeyword}
              hint="Bạn muốn ôn môn gì?"
              className="blog-search"
              inputProps={{ type: "search", autoComplete: "off" }}
            />,
            slots.search,
          )}
        {slots.schools && createPortal(
          <Rail label="Các trường chạy từ phải sang trái" items={SCHOOLS} render={(school, copy) => (
            <Link className="blog-school-card" key={school.id} to={schoolPath(school.id)} tabIndex={copy ? -1 : undefined}>
              <img src={asset(school.image)} alt={school.shortName} loading="lazy" />
              <div><small>{school.shortName}</small><h3>{school.name}</h3><p>{getSchoolSets(quizSets, school.id).length} bộ đề</p></div>
            </Link>
          )} />, slots.schools)}
        {slots.themes.map((slot, index) => createPortal(<ThemeToggle className="blog-theme-button" />, slot, `blog-theme-${index}`))}
        {slots.logos.map((slot, index) =>
          createPortal(<BrandLogo />, slot, `blog-logo-${index}`),
        )}
      </div>
      <SiteFooter />
      <BackToTop />
    </>
  );
}
export default memo(BlogJLer);
export { BlogJLer };
