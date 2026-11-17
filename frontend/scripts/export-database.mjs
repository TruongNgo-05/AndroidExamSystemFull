import {writeFileSync} from 'node:fs';
import sets from '../src/features/quiz/data/quizSets.js';
import {QUIZ_MAJORS} from '../src/features/catalog/data/majors.js';
import {notifications} from '../src/features/notifications/data/notifications.js';
import {SCHOOLS} from '../src/features/schools/data/schools.js';
const seed={exams:sets,majors:QUIZ_MAJORS,notifications,schools:SCHOOLS};
const seen=new Set();
for(const s of sets){
 if(seen.has(s.id))throw new Error(`Duplicate exam ID: ${s.id}`);seen.add(s.id);
 for(const q of s.questions)if(!Array.isArray(q.o)||q.o.length!==4||!Number.isInteger(q.a)||q.a<0||q.a>3)throw new Error(`Invalid question in ${s.id}`);
}
const json=JSON.stringify(seed,null,2);
writeFileSync(new URL('../../database/seed.json',import.meta.url),json);
writeFileSync(new URL('../../backend/src/main/resources/quiz-seed.json',import.meta.url),json);
// Server loads JSON on startup; SQL export is a manual alternative and never overwrites existing rows.
const hex=s=>`CONVERT(0x${Buffer.from(s,'utf8').toString('hex')} USING utf8mb4)`;
let sql='USE jlerTestingHubt;\n';
for(const kind of ['schools','majors','exams','notifications'])for(const item of seed[kind])sql+=`INSERT IGNORE INTO catalog_documents(kind,id,body,revision,created_at) VALUES (${hex(kind)},${hex(String(item.id))},${hex(JSON.stringify(item))},1,CURRENT_TIMESTAMP(6));\n`;
writeFileSync(new URL('../../database/seed.sql',import.meta.url),sql);
console.log(`${sets.length} exams, ${sets.reduce((n,s)=>n+s.questions.length,0)} questions exported unchanged.`);
