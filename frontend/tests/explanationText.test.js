import test from "node:test";
import assert from "node:assert/strict";
import { getCorrectExplanation, getWrongAnswers } from "../src/features/quiz/utils/explanationText.js";
const response = "### GIẢI THÍCH ĐÁP ÁN ĐÚNG\n**B đúng vì phù hợp.**\nCÁC ĐÁP ÁN KHÁC\nA: Nội dung A\nB: Không đưa đáp án đúng vào nhóm sai\nC: Nội dung C\nD: Nội dung D";
test("explanation formatting separates the correct explanation from alternatives", () => {
 assert.equal(getCorrectExplanation(response), "B đúng vì phù hợp.");
 assert.deepEqual(getWrongAnswers(response,1).map(answer=>answer.letter), ["A","C","D"]);
});
test("plain replies and missing explanations do not crash the dialog", () => {
 assert.equal(getCorrectExplanation("**Nội dung ngắn.**"), "Nội dung ngắn.");
 assert.deepEqual(getWrongAnswers("Chưa có lời giải",0), []);
 assert.deepEqual(getWrongAnswers("",0), []);
});
