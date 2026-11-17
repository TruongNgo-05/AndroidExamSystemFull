import test from "node:test";
import assert from "node:assert/strict";
import { parseRoute, examPath } from "../src/app/router/routes.js";
const sets = [
  { id: "java", majorId: "cntt" },
  { id: "chung", majorId: "" },
];
const majors = [{ id: "cntt" }, { id: "luat" }];
test("major and nested URLs work on reload, including shared subjects", () => {
  assert.equal(parseRoute("/cntt", "", sets, majors).major, "cntt");
  for (const screen of ["setup", "study", "quiz", "result"]) {
    const path = examPath(screen, sets[0], "cntt");
    const route = parseRoute(path, "", sets, majors);
    assert.equal(route.screen, screen);
    assert.equal(route.examId, "java");
    assert.equal(route.major, "cntt");
  }
  assert.equal(examPath("setup", sets[1], "cntt"), "/hubt/cntt/chung/setup");
  assert.equal(
    parseRoute("/cntt/chung/study", "", sets, majors).examId,
    "chung",
  );
  assert.equal(
    parseRoute("/dung/chung/setup", "", sets, majors).examId,
    "chung",
  );
});
test("unknown paths, malformed encoding and mismatched subjects are rejected", () => {
  for (const path of [
    "/cntt/nope/setup",
    "/luat/java/setup",
    "/cntt/java/nope",
    "/bad",
    "/%XX",
  ])
    assert.equal(parseRoute(path, "", sets, majors).screen, "not-found");
});
test("old links retain their exam ID for canonical redirects", () => {
  assert.equal(parseRoute("/setup", "?exam=java", sets, majors).examId, "java");
  assert.equal(parseRoute("/exam", "?exam=java", sets, majors).screen, "quiz");
});

test("all footer policies resolve directly without becoming exam or major routes", async () => {
  const { POLICIES } = await import("../src/features/policies/data/policies.js");
  assert.equal(POLICIES.length, 5);
  for (const policy of POLICIES) {
    const route = parseRoute(`/${policy.slug}`, "", sets, majors);
    assert.equal(route.screen, "policy");
    assert.equal(route.policySlug, policy.slug);
    assert.equal(route.legacy, undefined);
    assert.equal(
      parseRoute(`/${policy.slug}/unknown`, "", sets, majors).screen,
      "not-found",
    );
  }
});


test("school-scoped routes isolate duplicate exam IDs and preserve legacy bookmarks", () => {
 const schools=[{id:"hubt"},{id:"hust"},{id:"id_truong"}];
 const data=[{id:"bigdata",majorId:"cntt"},{id:"bigdata",majorId:"cntt",schoolId:"hust"},{id:"shared",majorId:"",schoolId:"id_truong"}];
 for (const screen of ["setup","study","quiz","result"]) {
   for (const exam of data) {
     const path=examPath(screen,exam,"cntt");
     const route=parseRoute(path,"",data,majors,schools);
     assert.equal(route.screen,screen);assert.equal(route.schoolId,exam.schoolId||"hubt");assert.equal(route.examId,exam.id);
   }
 }
 assert.equal(parseRoute("/hubt/cntt/bigdata/setup","",data,majors,schools).legacy,undefined);
 assert.equal(parseRoute("/cntt/bigdata/setup","",data,majors,schools).legacy,true);
 assert.equal(parseRoute("/id_truong/cntt/shared/setup","",data,majors,schools).screen,"setup");
 for (const path of ["/hubt/cntt/shared/setup","/hust/luat/bigdata/setup","/unknown/cntt/bigdata/setup","/hust/cntt/bigdata/setup/extra","/hubt/%XX"])
   assert.equal(parseRoute(path,"",data,majors,schools).screen,"not-found");
 assert.equal(parseRoute("/hust/cntt","",data,majors,schools).schoolId,"hust");
 assert.equal(parseRoute("/hust","",data,majors,schools).screen,"home");
});
test("admin sections and OTP recovery resolve to dedicated screens",()=>{
 for(const section of ["users","students","exams","topics","majors","schools","pages","notifications","results","keys"]){const r=parseRoute(`/admin/${section}`,"",sets,majors);assert.equal(r.screen,"admin");assert.equal(r.adminSection,section);}
 assert.equal(parseRoute("/admin/unknown","",sets,majors).screen,"not-found");
 assert.equal(parseRoute("/forgot-password","",sets,majors).screen,"forgot-password");
 assert.equal(parseRoute("/new-school","",sets,majors,[{id:"new-school"}]).schoolId,"new-school");
});
test('profile resolves independently of university routes',()=>{
 assert.equal(parseRoute('/profile','',sets,majors).screen,'profile');
 assert.equal(parseRoute('/profile/unknown','',sets,majors).screen,'not-found');
});
