import {useRef,useState} from "react";
import {Alert,Button,Input,Spin} from "antd";
import {api} from "../../shared/services/api.js";
import {asset} from "../quiz/utils/quiz.js";
// Ant Design Form-compatible controlled field. Only a successful upload changes its value.
export default function ImageInput({value="",onChange,onBusyChange}){
 const picker=useRef(null),[busy,setBusy]=useState(false),[error,setError]=useState("");
 async function upload(event){
  const file=event.target.files?.[0];event.target.value="";if(!file)return;
  setError("");
  if(file.size>30*1024*1024){setError("Ảnh tối đa 30 MB.");return;}
  setBusy(true);onBusyChange?.(true);
  try{const body=new FormData();body.append("file",file);const result=await api("/admin/uploads/images",{method:"POST",body});onChange?.(result.url);}
  catch(e){setError(e.message);}finally{setBusy(false);onBusyChange?.(false);}
 }
 return <div className="admin-image-input">
  <Input value={value} onChange={e=>onChange?.(e.target.value)} disabled={busy} placeholder="URL hoặc đường dẫn ảnh" aria-label="URL hoặc đường dẫn ảnh"/>
  <div className="admin-image-actions"><Button loading={busy} onClick={()=>picker.current?.click()}>Chọn ảnh từ thiết bị</Button>{value&&<Button disabled={busy} onClick={()=>onChange?.("")}>Bỏ ảnh</Button>}</div>
  <input ref={picker} type="file" accept="image/jpeg,image/png,image/gif" hidden onChange={upload}/>
  <small>JPG, PNG, GIF · Tối đa 30 MB. Ảnh được tải lên máy chủ.</small>
  {error&&<Alert type="error" showIcon message={error}/>}
  {value&&asset(value)&&<Spin spinning={busy}><img key={value} className="admin-image-preview" src={asset(value)} alt="Xem trước ảnh đã chọn"/></Spin>}
 </div>;
}
