import test from "node:test";
import assert from "node:assert/strict";
import {
  BLOG_DATA,
  buildBlogData,
} from "../src/features/blog/data/blogData.js";
import sets from "../src/features/quiz/data/quizSets.js";
import { SUBJECT_IMAGE } from "../src/features/catalog/data/majors.js";
const majors = [{ id: "cntt", title: "CNTT" }],
  q = { q: "?", o: ["A", "B", "C", "D"], a: 0 };
test("Blog statistics reflect actual current exam library", () => {
  assert.equal(BLOG_DATA.setCount, sets.length);
  assert.equal(
    BLOG_DATA.questionCount,
    sets.reduce((n, s) => n + s.questions.length, 0),
  );
  assert.equal(BLOG_DATA.cards.length, sets.length);
});
test("new school/exam metadata automatically updates Blog cards and routes", () => {
  const data = buildBlogData(
    [
      {
        id: "new",
        schoolId: "epu",
        majorId: "luat",
        title: "Đề mới",
        questions: [q],
      },
    ],
    majors,
  );
  assert.equal(data.setCount, 1);
  assert.equal(data.majorCount, 2);
  assert.equal(data.cards[0].path, "/epu/luat/new/setup");
  assert.equal(data.cards[0].count, 1);
});
test("shared subjects resolve and Blog uses configured shared image without legacy raw HTML", () => {
  const data = buildBlogData(
    [{ id: "shared", title: "<script>example</script>", questions: [] }],
    majors,
  );
  assert.equal(data.cards[0].path, "/hubt/dung/shared/setup");
  assert.ok(data.cards[0].image.endsWith(SUBJECT_IMAGE));
  assert.equal(data.cardsHtml, undefined);
  assert.equal(buildBlogData([], majors).questionCount, 0);
});
