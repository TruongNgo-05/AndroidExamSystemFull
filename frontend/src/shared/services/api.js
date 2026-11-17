// Access tokens live only in memory. Refresh tokens are HttpOnly cookies.
const BASE=(import.meta.env?.VITE_API_BASE_URL || "/api").replace(/\/$/, "");
let accessToken="",refreshPromise=null,sessionVersion=0;
const listeners=new Set();
export const subscribeAuth=(fn)=>{listeners.add(fn);return ()=>listeners.delete(fn);};
function publish(session,reason=""){sessionVersion++;accessToken=session?.accessToken||"";listeners.forEach(fn=>fn(session,reason));}
export class ApiError extends Error {constructor(message,status,fields){super(message);this.status=status;this.fields=fields;}}
async function raw(path,options={}){
  const controller=new AbortController();const timer=setTimeout(()=>controller.abort(),30000);
  try{
    const headers={"X-Requested-With":"JLer",...options.headers};
    const multipart=typeof FormData!=="undefined"&&options.body instanceof FormData;
    if(options.body!=null&&!multipart)headers["Content-Type"]="application/json";
    if(accessToken)headers.Authorization=`Bearer ${accessToken}`;
    const res=await fetch(BASE+path,{...options,headers,credentials:"include",signal:controller.signal,body:options.body==null?undefined:multipart?options.body:JSON.stringify(options.body)});
    let body;
    try{body=await res.json();}catch{throw new ApiError("Máy chủ không trả dữ liệu API hợp lệ. Kiểm tra backend và cấu hình /api.",res.status);}
    if(body==null||typeof body!=="object")throw new ApiError("Phản hồi máy chủ không hợp lệ.",res.status);
    if(!res.ok)throw new ApiError(body.message||`Yêu cầu thất bại (${res.status})`,res.status,body.errors);
    return body;
  }catch(e){if(e instanceof TypeError)throw new ApiError("Không kết nối được máy chủ. Kiểm tra backend đang chạy và địa chỉ API.",0);if(e.name==="AbortError")throw new ApiError("Kết nối quá lâu. Hãy thử lại.",0);throw e;}
  finally{clearTimeout(timer);}
}
async function locked(fn){
  return globalThis.navigator?.locks ? navigator.locks.request("jler-auth-cookie",fn) : fn();
}
export function refreshSession(){
  if(!refreshPromise)refreshPromise=locked(async()=>{
    const version=sessionVersion;
    try{const session=await raw("/auth/refresh",{method:"POST"});if(version===sessionVersion)publish(session);return session;}
    catch(e){if(e.status===401&&version===sessionVersion)publish(null,e.message);throw e;}
  }).finally(()=>{refreshPromise=null;});
  return refreshPromise;
}
export async function authenticate(kind,body){
  return locked(async()=>{const session=await raw(`/auth/${kind}`,{method:"POST",body});publish(session);return session;});
}
export async function logoutSession(){
  await locked(()=>raw("/auth/logout",{method:"POST"}));
  publish(null);
  // Notify other tabs without storing credentials.
  if(typeof BroadcastChannel!=="undefined"){const channel=new BroadcastChannel("jler-auth");channel.postMessage("logout");channel.close();}
}
export function clearSession(){publish(null);}
export async function api(path,options={}){
  const sentToken=accessToken;
  try{return await raw(path,options);}
  catch(e){
    if(e.status!==401||(path.startsWith("/auth/")&&path!=="/auth/me")||path.startsWith("/public/"))throw e;
    if(accessToken===sentToken)await refreshSession();
    return raw(path,options);
  }
}

// A 401 access token can simply have expired; only revoke UI after refresh is denied.
export async function checkSession(){
  if(!accessToken)return false;
  const version=sessionVersion;
  try{await raw("/auth/me");return true;}
  catch(e){
    if(version!==sessionVersion)return !!accessToken;
    if(e.status!==401)throw e;
    try{await refreshSession();return true;}catch(error){if(error.status===401)return false;throw error;}
  }
}

// Refresh account details without discarding the access token.
export function publishAccount(user){if(accessToken)publish({user,accessToken});}
