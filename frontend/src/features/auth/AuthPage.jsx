import {useState} from "react";
import {Link,useLocation,useNavigate,Navigate} from "react-router-dom";
import {Alert,Button,Form,Input,Select} from "antd";
import {useCatalog} from "../catalog/CatalogContext.jsx";
import {useAuth} from "./AuthContext.jsx";
export default function AuthPage({register=false}){
  const [form]=Form.useForm();
  const {schools}=useCatalog();
  const auth=useAuth(),location=useLocation(),navigate=useNavigate();
  const [busy,setBusy]=useState(false),[error,setError]=useState("");
  const requested=new URLSearchParams(location.search).get("next");
  const next=requested?.startsWith("/")&&!requested.startsWith("//")&&!requested.includes("\\")&&!/^\/(login|register)/.test(requested)?requested:"/";
  if(auth.loading)return <section className="panel auth-panel">Đang kiểm tra phiên đăng nhập…</section>;
  if(auth.user)return <Navigate to={auth.user.role==="ADMIN"&&next==="/"?"/admin":next} replace/>;
  async function submit(values){
    setBusy(true);setError("");
    try{
      const {confirm,...body}=values;
      const session=await (register?auth.register(body):auth.login(body));
      navigate(session.user.role==="ADMIN"&&next==="/"?"/admin":next,{replace:true});
    }catch(e){setError(e.message);if(e.fields)form.setFields(Object.entries(e.fields).map(([name,error])=>({name,errors:[error]})));}finally{setBusy(false);}
  }
  return <section className="panel auth-panel">
    <span className="eyebrow">KHÔNG GIAN HỌC TẬP JLer</span>
    <h1>{register?"Tạo tài khoản":"Chào mừng bạn trở lại"}</h1>
    <p className="muted">{register?"Lưu kết quả thi theo tài khoản của bạn.":"Đăng nhập để bắt đầu thi và xem lịch sử."}</p>
    {error&&<Alert type="error" showIcon message={error} style={{marginBottom:16}}/>}
    <Form form={form} layout="vertical" onFinish={submit} requiredMark={false}>
      <Form.Item name="studentCode" label={register?"Mã sinh viên":"Mã sinh viên hoặc email"} rules={[{required:true,whitespace:true,message:"Vui lòng nhập thông tin đăng nhập."},{max:register?64:254,message:"Mã sinh viên tối đa 64 ký tự."}]}><Input autoComplete="username" size="large"/></Form.Item>
      {register&&<>
        <Form.Item name="name" label="Họ và tên" rules={[{required:true,whitespace:true,message:"Vui lòng nhập họ tên."},{max:200}]}><Input autoComplete="name" size="large"/></Form.Item>
        <Form.Item name="email" label="Email" rules={[{required:true,type:"email",message:"Email không hợp lệ."}]}><Input autoComplete="email" size="large"/></Form.Item>
        <Form.Item name="schoolId" label="Trường đại học" rules={[{required:true,message:"Chọn trường đại học của bạn."}]}><Select size="large" showSearch optionFilterProp="label" placeholder="Tìm và chọn trường đại học" options={schools.map(s=>({value:s.id,label:s.name}))}/></Form.Item>
      </>}
      <Form.Item name="password" label="Mật khẩu" rules={[{required:true,message:"Vui lòng nhập mật khẩu."},...(register?[{min:6,message:"Tối thiểu 6 ký tự."}]:[])]}><Input.Password autoComplete={register?"new-password":"current-password"} size="large"/></Form.Item>
      {register&&<Form.Item name="confirm" label="Nhập lại mật khẩu" dependencies={["password"]} rules={[{required:true,message:"Nhập lại mật khẩu."},({getFieldValue})=>({validator(_,v){return v===getFieldValue("password")?Promise.resolve():Promise.reject(new Error("Mật khẩu không khớp."));}})]}><Input.Password autoComplete="new-password" size="large"/></Form.Item>}
      <Button type="primary" htmlType="submit" block size="large" loading={busy}>{register?"Đăng ký":"Đăng nhập"}</Button>
    </Form>
    {!register&&<p><Link to="/forgot-password">Quên mật khẩu?</Link></p>}
    <p>{register?"Đã có tài khoản? ":"Chưa có tài khoản? "}<Link to={`${register?"/login":"/register"}?next=${encodeURIComponent(next)}`}>{register?"Đăng nhập":"Đăng ký ngay"}</Link></p>
    <Link to="/">← Về trang chủ</Link>
  </section>;
}
