import {createContext,useContext,useEffect,useRef,useState} from "react";
import {Alert} from "antd";
import {authenticate,refreshSession,logoutSession,subscribeAuth,clearSession,checkSession,api,publishAccount} from "../../shared/services/api.js";
import {monitorSession} from "./sessionMonitor.js";
const Context=createContext(null);
export function AuthProvider({children}){
  const [user,setUser]=useState(null),[loading,setLoading]=useState(true),[error,setError]=useState(""),[ended,setEnded]=useState("");
  const current=useRef(null);
  useEffect(()=>{
    const unsubscribe=subscribeAuth((session,reason)=>{
      if(current.current&&!session&&reason)setEnded(reason);
      if(session)setEnded("");
      current.current=session?.user||null;setUser(current.current);
    });
    refreshSession().catch(e=>{if(e.status!==401)setError("Chưa kết nối được máy chủ tài khoản.");}).finally(()=>setLoading(false));
    const channel=typeof BroadcastChannel!=="undefined"?new BroadcastChannel("jler-auth"):null;
    if(channel)channel.onmessage=e=>{if(e.data==="logout")clearSession();};
    return ()=>{unsubscribe();channel?.close();};
  },[]);
  useEffect(()=>{if(!user)return;return monitorSession(checkSession);},[user?.id]);
  return <Context.Provider value={{user,loading,error,
    login:body=>authenticate("login",body),register:body=>authenticate("register",body),
    updateProfile:async body=>{const account=await api("/auth/me",{method:"PATCH",body});publishAccount(account);return account;},
    logout:logoutSession}}>{ended&&<Alert type="warning" showIcon closable onClose={()=>setEnded("")} message="Phiên đăng nhập đã kết thúc" description={ended} action={<a href="/login">Đăng nhập lại</a>}/>}{children}</Context.Provider>;
}
export const useAuth=()=>useContext(Context);
