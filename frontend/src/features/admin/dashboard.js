export function dashboardMetrics(data={},days=7,now=new Date()){
 const start=new Date(now);start.setHours(0,0,0,0);start.setDate(start.getDate()-days+1);
 const results=(data.results||[]).filter(r=>Number.isFinite(Number(r.date))&&Number(r.date)>=start.getTime()&&Number(r.date)<=now.getTime());
 const series=Array.from({length:days},(_,i)=>{const date=new Date(start);date.setDate(start.getDate()+i);const end=new Date(date);end.setDate(end.getDate()+1);return {date:date.toISOString(),label:`${date.getDate()}/${date.getMonth()+1}`,count:results.filter(r=>Number(r.date)>=date.getTime()&&Number(r.date)<end.getTime()).length};});
 const scores=results.filter(r=>r.pct!=null&&Number.isFinite(Number(r.pct)));
 const average=scores.length?Math.round(scores.reduce((n,r)=>n+Number(r.pct),0)/scores.length):null;
 const schools=(data.schools||[]).map(s=>({...s,count:(data.exams||[]).filter(e=>(e.schoolId||"hubt")===s.id).length})).sort((a,b)=>b.count-a.count);
 const recent=[...(data.results||[])].sort((a,b)=>Number(b.date)-Number(a.date)).slice(0,6);
 return {results,series,average,schools,recent,high:scores.filter(r=>Number(r.pct)>=50).length,low:scores.filter(r=>Number(r.pct)<50).length,students:(data.users||[]).filter(u=>u.role==="STUDENT").length};
}
