import { useEffect, useState } from "react";
import { initBlogPage } from "../utils/blogPageRuntime.js";
import { filterLibrary } from "../utils/blogLibrary.js";

export default function useBlogPage(rootRef, keyword, onSearch) {
  const [slots, setSlots] = useState({ logos: [], search: null, schools: null, themes: [] });
  useEffect(() => {
    const documentRoot = document.documentElement;
    const previousPadding = documentRoot.style.scrollPaddingTop;
    const previousTitle = document.title;
    documentRoot.style.scrollPaddingTop =
      "calc(env(safe-area-inset-top, 0px) + 72px)";
    document.title = "JLer – Ôn thi trắc nghiệm cùng Jeli";
    const root = rootRef.current;
    const cleanup = initBlogPage(root, onSearch);
    setSlots({
      logos: [...root.querySelectorAll("[data-brand-logo]")],
      search: root.querySelector("[data-blog-search]"),
      themes: [...root.querySelectorAll("[data-blog-theme]")],
      schools: root.querySelector("[data-blog-schools]"),
    });
    return () => {
      cleanup();
      documentRoot.style.scrollPaddingTop = previousPadding;
      document.title = previousTitle;
    };
  }, [rootRef, onSearch]);
  useEffect(() => {
    if (slots.search) filterLibrary(rootRef.current, keyword);
  }, [rootRef, slots.search, keyword]);
  return slots;
}
