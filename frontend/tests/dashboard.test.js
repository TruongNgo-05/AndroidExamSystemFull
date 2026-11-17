import test from 'node:test';
import assert from 'node:assert/strict';
import {dashboardMetrics} from '../src/features/admin/dashboard.js';
test('dashboard includes only the selected period and excludes future results',()=>{
 const now=new Date(2026,9,14,12),yesterday=new Date(2026,9,13,10).getTime();
 const data={users:[{role:'STUDENT'},{role:'ADMIN'}],results:[{date:yesterday,pct:80},{date:yesterday,pct:20},{date:new Date(2026,8,1).getTime(),pct:100},{date:now.getTime()+86400000,pct:100}],schools:[{id:'hubt'},{id:'epu'}],exams:[{id:'old'},{id:'new',schoolId:'epu'}]};
 const m=dashboardMetrics(data,7,now);assert.equal(m.results.length,2);assert.equal(m.series.reduce((n,d)=>n+d.count,0),2);assert.equal(m.average,50);assert.equal(m.high,1);assert.equal(m.low,1);assert.equal(m.students,1);assert.deepEqual(m.schools.map(s=>s.count),[1,1]);
});
test('dashboard has an honest empty state, not a fictitious score',()=>{
 const m=dashboardMetrics({},30,new Date(2026,9,14,12));assert.equal(m.average,null);assert.equal(m.series.length,30);assert.equal(m.results.length,0);assert.equal(m.high,0);
});
