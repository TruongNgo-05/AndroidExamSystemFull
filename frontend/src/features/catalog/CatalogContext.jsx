import {createContext,useContext,useEffect,useState,useCallback} from "react";
import {Alert,Button} from "antd";
import {api} from "../../shared/services/api.js";
const Context=createContext(null);
export function CatalogProvider({children}){
 const [data,setData]=useState(null),[error,setError]=useState("");
 const refresh=useCallback(async()=>{try{const [v,schools]=await Promise.all([api("/public/catalog"),api("/public/schools")]);setData({...v,schools});setError("");return v;}catch(e){setError(e.message);throw e;}},[]);
 useEffect(()=>{refresh().catch(()=>{});},[refresh]);
 if(!data&&error)return <section className="panel auth-panel"><Alert type="error" message="Không tải được thư viện đề" description={error}/><Button onClick={()=>refresh().catch(()=>{})}>Thử lại</Button></section>;
 if(!data)return <section className="panel auth-panel">Jeli đang tải thư viện đề thi…</section>;
 return <Context.Provider value={{...data,refresh}}>{children}</Context.Provider>;
}
export const useCatalog=()=>useContext(Context);
