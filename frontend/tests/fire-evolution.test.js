import test from 'node:test';
import assert from 'node:assert/strict';
import {freshProgress, claimFire, fireStatus, fireTheme, jeliEvolution, streakMilestone, normalizeProgress} from '../src/features/gamification/utils/progress.js';
import {encodeBackup, decodeBackup} from '../src/features/gamification/services/progressTransfer.js';
const d=(day)=>new Date(`${day}T12:00:00`);
test('three missed days recover per month; fourth loses streak without extra currency',()=>{
 let p=claimFire(freshProgress(),d('2026-10-01'));
 for(const day of ['2026-10-03','2026-10-05','2026-10-07']) p=claimFire(p,d(day));
 assert.equal(p.streak,4);assert.equal(p.fireRecoveries['2026-10'],3);assert.equal(p.xp,40);assert.equal(p.gems,4);
 assert.equal(fireStatus(p,d('2026-10-09')).canRestore,false);
 p=claimFire(p,d('2026-10-09'));assert.equal(p.streak,1);assert.equal(p.bestStreak,4);assert.equal(p.xp,50);
 assert.equal(claimFire(p,d('2026-10-09')),p);assert.equal(claimFire(p,d('2026-10-08')),p);
});
test('each missed day costs a slot; new calendar month has independent allowance',()=>{
 let p=claimFire(freshProgress(),d('2026-10-27'));p=claimFire(p,d('2026-10-31'));
 assert.equal(p.streak,2);assert.equal(p.fireRecoveries['2026-10'],3);
 p=claimFire(p,d('2026-11-03'));assert.equal(p.streak,3);assert.equal(p.fireRecoveries['2026-11'],2);
 assert.equal(fireStatus(p,d('2026-11-03')).remaining,1);
 const old={...p,lastClaimDay:'2026-10-30'};assert.equal(fireStatus(old,d('2026-11-02')).canRestore,false);
 p=claimFire(p,d('2026-11-08'));assert.equal(p.streak,1);
});
test('cross-month and DST-safe day arithmetic and malformed old dates',()=>{
 let p=claimFire(freshProgress(),d('2026-01-30'));p=claimFire(p,d('2026-02-02'));
 assert.deepEqual(p.fireRecoveries,{'2026-01':1,'2026-02':1});assert.equal(p.streak,2);
 assert.equal(claimFire({...p,lastClaimDay:'garbage'},d('2026-02-04')).streak,1);
 assert.equal(claimFire({...p,lastClaimDay:'2026-02-30'},d('2026-03-02')).streak,1);
});
test('fire colors, monthly/yearly milestones and Jeli evolution thresholds',()=>{
 assert.deepEqual([1,3,7,30,90,365].map(n=>fireTheme(n).color),['orange','gold','blue','teal','violet','rainbow']);
 assert.deepEqual([3,7,30,60,365,730].map(streakMilestone),['3 ngày giữ lửa','7 ngày giữ lửa','1 tháng giữ lửa','2 tháng giữ lửa','1 năm giữ lửa','2 năm giữ lửa']);assert.equal(streakMilestone(8),'');
 assert.equal(jeliEvolution(2).level,1);assert.equal(jeliEvolution(3).level,3);assert.equal(jeliEvolution(20).next,undefined);
});
test('legacy migration and code transfer preserve monthly recovery counters',async()=>{
 assert.deepEqual(normalizeProgress({version:2,xp:75}).fireRecoveries,{});
 const p={...freshProgress(),fireRecoveries:{'2026-10':3,'2026-11':1}};
 assert.deepEqual((await decodeBackup(await encodeBackup(p,[]))).progress.fireRecoveries,p.fireRecoveries);
 assert.deepEqual(normalizeProgress({...p,fireRecoveries:{'2026-13':1,'2026-10':4,'2026-11':2}}).fireRecoveries,{'2026-11':2});
});
