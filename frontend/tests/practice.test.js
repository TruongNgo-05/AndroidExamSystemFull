import test from 'node:test';
import assert from 'node:assert/strict';
import { chooseAnswer, canChooseAnswer, isSessionComplete, score, resetWrongAnswers } from '../src/features/quiz/utils/quiz.js';
const question = { q: 'Question', o: ['A', 'B', 'C', 'D'], a: 2, picked: null, skipped: false };
test('an answer is locked even when wrong; it changes only in a new round', () => {
  const session = chooseAnswer([question], 0, 0);
  assert.equal(canChooseAnswer(session[0]), false);
  assert.strictEqual(chooseAnswer(session, 0, 2), session);
  assert.equal(score(session).wrong, 1);
  const next = resetWrongAnswers(session);
  assert.equal(next[0].picked, null);
  assert.equal(canChooseAnswer(next[0]), true);
  assert.equal(session[0].picked, 0);
  assert.equal(question.picked, null);
});
test('retry retains wrong and unanswered questions, clears feedback and preserves options/correct answer', () => {
  const wrong = { ...question, q: 'wrong', picked: 0, skipped: true };
  const session = [
    { ...question, q: 'correct', picked: 2 },
    wrong,
    { ...question, q: 'unanswered', skipped: true },
  ];
  const next = resetWrongAnswers(session);
  assert.equal(next.length, 2);
  assert.equal(next[0].q, 'wrong');
  assert.equal(next[0].picked, null);
  assert.equal(next[0].skipped, false);
  assert.deepEqual(next[0].o, wrong.o);
  assert.equal(next[0].a, wrong.a);
  assert.equal(score(next).unanswered, 2);
  assert.equal(next[1].q, 'unanswered');
  assert.equal(next[1].picked, null);
  assert.equal(next[1].skipped, false);
  assert.equal(score(next).wrong, 0);
  assert.equal(wrong.skipped, true);
});
test('successive rounds remove solved questions until no wrong answers remain', () => {
  let session = [{ ...question, q: 'one', picked: 0 }, { ...question, q: 'two', picked: 1 }];
  session = resetWrongAnswers(session);
  session = chooseAnswer(session, 0, 2);
  session = chooseAnswer(session, 1, 0);
  assert.equal(isSessionComplete(session, true), false);
  session = resetWrongAnswers(session);
  assert.equal(session.length, 1);
  assert.equal(session[0].q, 'two');
  session = chooseAnswer(session, 0, 2);
  assert.equal(isSessionComplete(session, true), true);
  assert.deepEqual(resetWrongAnswers(session), []);
});
test('practice stays open with wrong/skipped questions; standard exam completes after answering', () => {
  const correct = { ...question, picked: 2 };
  const wrong = { ...question, picked: 0 };
  assert.equal(isSessionComplete([correct, wrong], true), false);
  assert.equal(isSessionComplete([correct, wrong]), true);
  assert.equal(isSessionComplete([correct, question], true), false);
  assert.equal(isSessionComplete([], true), false);
  assert.equal(isSessionComplete([correct, correct], true), true);
  assert.strictEqual(chooseAnswer([question], 0, 8)[0], question);
});

test('retry works with only unanswered or skipped questions', () => {
  const next = resetWrongAnswers([{ ...question, skipped: true }]);
  assert.equal(next.length, 1);
  assert.equal(next[0].picked, null);
  assert.equal(next[0].skipped, false);
  assert.equal(canChooseAnswer(next[0]), true);
});
