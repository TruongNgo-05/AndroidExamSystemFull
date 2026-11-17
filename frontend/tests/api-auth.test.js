import test from 'node:test';
import assert from 'node:assert/strict';
import {api,authenticate,clearSession,logoutSession} from '../src/shared/services/api.js';
const response=(status,body)=>({ok:status<400,status,json:async()=>body});
test('parallel expired requests share one refresh and retry with the new bearer',async()=>{
 const original=globalThis.fetch;let refreshes=0;
 globalThis.fetch=async(path,opt)=>{
   assert.equal(opt.credentials,'include');
   if(path.endsWith('/login'))return response(200,{accessToken:'old',user:{id:'u'}});
   if(path.endsWith('/refresh')){refreshes++;await new Promise(r=>setTimeout(r,10));return response(200,{accessToken:'new',user:{id:'u'}});}
   return opt.headers.Authorization==='Bearer new'?response(200,{saved:true}):response(401,{message:'expired'});
 };
 try{await authenticate('login',{});const results=await Promise.all([api('/history'),api('/history')]);assert.equal(refreshes,1);assert.ok(results.every(x=>x.saved));}
 finally{clearSession();globalThis.fetch=original;}
});
test('non-auth failure is not retried or presented as success',async()=>{
 const original=globalThis.fetch;let calls=0;
 globalThis.fetch=async()=>{calls++;return response(503,{message:'Database unavailable'});};
 try{await assert.rejects(()=>api('/attempts/x/submit',{method:'POST',body:{}}),/Database unavailable/);assert.equal(calls,1);}
 finally{globalThis.fetch=original;}
});
test('logout sends the CSRF header and removes access credentials on success',async()=>{
 const original=globalThis.fetch;const requests=[];
 globalThis.fetch=async(path,opt)=>{requests.push({path,opt});return path.endsWith('/login')?response(200,{accessToken:'active',user:{id:'u'}}):response(200,{});};
 try{await authenticate('login',{});await logoutSession();await api('/public/catalog');assert.equal(requests[1].opt.headers['X-Requested-With'],'JLer');assert.equal(requests[1].opt.headers.Authorization,'Bearer active');assert.equal(requests[2].opt.headers.Authorization,undefined);}
 finally{clearSession();globalThis.fetch=original;}
});
test('HTML fallback from an incorrectly configured API cannot count as successful registration',async()=>{
 const original=globalThis.fetch;
 globalThis.fetch=async()=>({ok:true,status:200,json:async()=>{throw new SyntaxError('HTML');}});
 try{await assert.rejects(()=>authenticate('register',{}),/API hợp lệ/);}finally{clearSession();globalThis.fetch=original;}
});
test('registration validation exposes field errors',async()=>{
 const original=globalThis.fetch;globalThis.fetch=async()=>response(400,{message:'Kiểm tra thông tin',errors:{email:'Email không hợp lệ'}});
 try{await assert.rejects(()=>authenticate('register',{}),e=>e.status===400&&e.fields.email==='Email không hợp lệ');}finally{clearSession();globalThis.fetch=original;}
});
test('background check rejects replaced refresh and clears authenticated UI with the server reason',async()=>{
 const {checkSession,subscribeAuth}=await import('../src/shared/services/api.js');const original=globalThis.fetch;let last;
 const unsub=subscribeAuth((session,reason)=>{last={session,reason};});
 globalThis.fetch=async path=>path.endsWith('/login')?response(200,{accessToken:'old',user:{id:'u'}}):response(401,{message:'Tài khoản đã đăng nhập trên thiết bị khác.'});
 try{await authenticate('login',{});assert.equal(await checkSession(),false);assert.equal(last.session,null);assert.match(last.reason,/thiết bị khác/);}finally{unsub();clearSession();globalThis.fetch=original;}
});
test('expired access refreshes normally, but network failure never logs out the user',async()=>{
 const {checkSession,subscribeAuth}=await import('../src/shared/services/api.js');const original=globalThis.fetch;let session;
 const unsub=subscribeAuth(v=>{session=v;});
 globalThis.fetch=async path=>path.endsWith('/login')?response(200,{accessToken:'old',user:{id:'u'}}):path.endsWith('/refresh')?response(200,{accessToken:'fresh',user:{id:'u'}}):response(401,{message:'expired'});
 try{await authenticate('login',{});assert.equal(await checkSession(),true);assert.equal(session.accessToken,'fresh');globalThis.fetch=async()=>{throw new TypeError('offline');};await assert.rejects(checkSession);assert.equal(session.user.id,'u');}finally{unsub();clearSession();globalThis.fetch=original;}
});
test('a late 401 from an older login cannot clear a newer login',async()=>{
 const {checkSession,subscribeAuth}=await import('../src/shared/services/api.js');const original=globalThis.fetch;let release,latest;
 const unsub=subscribeAuth(v=>{latest=v;});
 globalThis.fetch=async(path,options)=>path.endsWith('/login')?response(200,{accessToken:JSON.parse(options.body).token,user:{id:'u'}}):new Promise(resolve=>{release=()=>resolve(response(401,{message:'old token'}));});
 try{await authenticate('login',{token:'old'});const pending=checkSession();await authenticate('login',{token:'new'});release();assert.equal(await pending,true);assert.equal(latest.accessToken,'new');}finally{unsub();clearSession();globalThis.fetch=original;}
});
test('image upload keeps FormData and lets the browser set the multipart boundary',async()=>{
 const original=globalThis.fetch;const body=new FormData();body.append('file',new Blob(['image'],{type:'image/png'}),'image.png');
 globalThis.fetch=async(path,opt)=>{assert.equal(opt.body,body);assert.equal(opt.headers['Content-Type'],undefined);return response(200,{url:'/api/public/images/test.png'});};
 try{assert.equal((await api('/admin/uploads/images',{method:'POST',body})).url,'/api/public/images/test.png');}finally{globalThis.fetch=original;}
});
test('profile update can refresh expired access and publish account without losing credentials',async()=>{
 const {publishAccount,subscribeAuth}=await import('../src/shared/services/api.js');const original=globalThis.fetch;let latest,refreshes=0;
 const stop=subscribeAuth(v=>{latest=v;});
 globalThis.fetch=async(path,opt)=>{
  if(path.endsWith('/login'))return response(200,{accessToken:'old',user:{id:'u'}});
  if(path.endsWith('/refresh')){refreshes++;return response(200,{accessToken:'new',user:{id:'u'}});}
  if(opt.headers.Authorization!=='Bearer new')return response(401,{message:'expired'});
  return response(200,{id:'u',name:'Updated',schoolId:'hubt'});
 };
 try{await authenticate('login',{});const account=await api('/auth/me',{method:'PATCH',body:{name:'Updated'}});publishAccount(account);assert.equal(refreshes,1);assert.equal(latest.user.schoolId,'hubt');assert.equal(latest.accessToken,'new');}finally{stop();clearSession();globalThis.fetch=original;}
});
