import test from "node:test";
import assert from "node:assert/strict";
import {
  isDownloadKeyFormat,
  verifyDownloadKey,
} from "../src/features/quiz/services/downloadKey.js";
test("key requires exactly 8 characters, letters, digits and a hyphen", () => {
  assert.ok(isDownloadKeyFormat("Ab3-4xY8"));
  for (const key of [
    "123456",
    "12345678",
    "abcdefgh",
    "abc-efgh",
    "Ab3_4xY8",
    "Ab3-4xY88",
  ])
    assert.equal(isDownloadKeyFormat(key), false);
});
test("verifier uses the server, rejects invalid format and propagates server errors", async () => {
  const original=globalThis.fetch;let calls=0;
  globalThis.fetch=async (url,options)=>{calls++;assert.equal(url,"/api/keys/redeem");assert.equal(JSON.parse(options.body).code,"Ab3-4xY8");return {ok:true,status:200,json:async()=>({valid:true})};};
  try{
    assert.equal(await verifyDownloadKey("123456"),false);assert.equal(calls,0);
    assert.equal(await verifyDownloadKey("Ab3-4xY8"),true);assert.equal(calls,1);
    globalThis.fetch=async()=>({ok:false,status:400,json:async()=>({message:"KEY không đúng"})});
    await assert.rejects(()=>verifyDownloadKey("Ab3-4xY8"),/KEY không đúng/);
  }finally{globalThis.fetch=original;}
});
