import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import {Alert,Avatar,Button,Form,Input,Select,Tag} from "antd";
import {useAuth} from "./AuthContext.jsx";
import {useCatalog} from "../catalog/CatalogContext.jsx";
export default function Profile(){
 const {user,updateProfile}=useAuth(),{schools}=useCatalog(),[form]=Form.useForm();
 const [busy,setBusy]=useState(false),[error,setError]=useState(""),[saved,setSaved]=useState(false);
 useEffect(()=>{form.setFieldsValue({name:user.name,email:user.email,schoolId:user.schoolId||undefined});},[user,form]);
 async function save(values){setBusy(true);setError("");setSaved(false);try{await updateProfile(values);setSaved(true);}catch(e){setError(e.message);}finally{setBusy(false);}}
 return <section className="panel profile-panel">
  <Link to={user.role==="ADMIN"?"/admin":"/"}>← {user.role==="ADMIN"?"Về quản trị":"Về trang chủ"}</Link>
  <div className="profile-heading"><Avatar size={64} style={{background:"#1677ff",flexShrink:0}}>{user.name.slice(0,1).toUpperCase()}</Avatar><div><span className="eyebrow">TÀI KHOẢN CỦA BẠN</span><h1>Thông tin cá nhân</h1><Tag color="blue">{user.role==="ADMIN"?"Quản trị viên":"Học sinh / Sinh viên"}</Tag></div></div>
  <p className="muted">Cập nhật thông tin liên hệ và trường học để bắt đầu ôn tập phù hợp với bạn.</p>
  {error&&<Alert type="error" showIcon message={error}/>}{saved&&<Alert type="success" showIcon message="Đã lưu thông tin cá nhân."/>}
  <Form form={form} layout="vertical" onFinish={save} onValuesChange={()=>setSaved(false)} requiredMark={false} disabled={busy}>
   <Form.Item name="name" label="Họ và tên" rules={[{required:true,whitespace:true,message:"Nhập họ và tên."},{max:200}]}><Input size="large" autoComplete="name"/></Form.Item>
   <Form.Item name="email" label="Email" extra="Dùng để đăng nhập và nhận mã khôi phục mật khẩu." rules={[{required:true,type:"email",message:"Nhập email hợp lệ."},{max:254}]}><Input size="large" autoComplete="email"/></Form.Item>
   <Form.Item name="schoolId" label="Trường đại học" extra="JLer tự chọn trường này khi bạn đăng nhập. Bạn vẫn có thể chuyển trường trong thư viện." rules={[{required:user.role==="STUDENT",message:"Chọn trường đại học."}]}><Select size="large" showSearch optionFilterProp="label" placeholder="Chọn trường đại học" options={schools.map(s=>({value:s.id,label:s.name}))}/></Form.Item>
   {user.studentCode&&<Form.Item label="Mã sinh viên"><Input value={user.studentCode} disabled size="large"/></Form.Item>}
   {user.className&&<p>Lớp: {user.className}</p>}
   <Button type="primary" htmlType="submit" size="large" loading={busy}>Lưu thay đổi</Button>
  </Form>
 </section>;
}
