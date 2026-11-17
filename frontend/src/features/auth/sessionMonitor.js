// Check while the page is visible and immediately on returning online/focusing it.
export function monitorSession(check,{window:win=window,document:doc=document,interval=20000}={}){
 let stopped=false,busy=false;
 async function run(){if(stopped||busy||doc.hidden)return;busy=true;try{await check();}catch{/* Network/server failures do not log out a valid session. */}finally{busy=false;}}
 const timer=win.setInterval(run,interval);
 win.addEventListener('focus',run);win.addEventListener('online',run);doc.addEventListener('visibilitychange',run);run();
 return ()=>{stopped=true;win.clearInterval(timer);win.removeEventListener('focus',run);win.removeEventListener('online',run);doc.removeEventListener('visibilitychange',run);};
}
