import {useState} from "react";
import {Link} from "react-router-dom";
import {Alert,Button,Form,Input,Result,Steps} from "antd";
import {api} from "../../shared/services/api.js";
export default function ForgotPassword(){
 const [step,setStep]=useState(0),[email,setEmail]=useState(""),[requestId,setRequestId]=useState(""),[resetToken,setResetToken]=useState(""),[busy,setBusy]=useState(false),[error,setError]=useState(""),[notice,setNotice]=useState(""),[sentAt,setSentAt]=useState(0);
 const [form]=Form.useForm();
 async function request(address){const r=await api("/auth/forgot-password",{method:"POST",body:{email:address.trim()}});setEmail(address.trim());setRequestId(r.requestId);setResetToken("");setSentAt(Date.now());setNotice(r.message);setStep(1);form.resetFields();}
 async function submit(v){setBusy(true);setError("");try{
  if(step===0)await request(v.email);
  else if(step===1){const r=await api("/auth/verify-otp",{method:"POST",body:{requestId,otp:v.otp.trim()}});setResetToken(r.resetToken);setStep(2);setNotice("OTP đã được xác minh. Bạn có thể đặt mật khẩu mới.");form.resetFields();}
  else {await api("/auth/reset-password",{method:"POST",body:{requestId,resetToken,password:v.password}});setResetToken("");setStep(3);}
 }catch(e){setError(e.message);if(e.fields)form.setFields(Object.entries(e.fields).map(([name,error])=>({name,errors:[error]})));}finally{setBusy(false);}}
 async function resend(){if(Date.now()-sentAt<60000){setError("Chờ ít nhất 60 giây kể từ lần gửi trước.");return;}setBusy(true);setError("");try{await request(email);}catch(e){setError(e.message);}finally{setBusy(false);}}
 return <section className="panel auth-panel"><span className="eyebrow">BẢO VỆ TÀI KHOẢN JLER</span><h1>Quên mật khẩu</h1>
 {step===3?<Result status="success" title="Đã đổi mật khẩu" subTitle="Các phiên đăng nhập cũ đã được thu hồi. Hãy đăng nhập bằng mật khẩu mới." extra={<Button type="primary" href="/login">Đăng nhập lại</Button>}/>:<>
 <Steps current={step} size="small" items={[{title:"Email"},{title:"OTP"},{title:"Mật khẩu"}]} style={{margin:"24px 0"}}/>
 {notice&&<Alert type="info" message={notice} style={{marginBottom:16}}/>}{error&&<Alert type="error" showIcon message={error} style={{marginBottom:16}}/>}
 <Form form={form} layout="vertical" onFinish={submit} key={step}>
 {step===0&&<Form.Item name="email" label="Email đã đăng ký" rules={[{required:true,type:"email",message:"Nhập email hợp lệ."}]}><Input autoComplete="email" size="large" maxLength={254}/></Form.Item>}
 {step===1&&<><p>Mã OTP gồm 6 chữ số, có hiệu lực 10 phút.</p><Form.Item name="otp" label="Mã OTP" rules={[{required:true,pattern:/^\d{6}$/,message:"Nhập đúng 6 chữ số."}]}><Input autoComplete="one-time-code" inputMode="numeric" maxLength={6} size="large" style={{letterSpacing:8}}/></Form.Item></>}
 {step===2&&<><Form.Item name="password" label="Mật khẩu mới" rules={[{required:true,min:6,max:72,message:"Nhập mật khẩu từ 6 đến 72 ký tự."}]}><Input.Password autoComplete="new-password" size="large"/></Form.Item><Form.Item name="confirm" label="Nhập lại mật khẩu" dependencies={["password"]} rules={[{required:true,message:"Nhập lại mật khẩu."},({getFieldValue})=>({validator(_,v){return v===getFieldValue("password")?Promise.resolve():Promise.reject(new Error("Mật khẩu không khớp."));}})]}><Input.Password autoComplete="new-password" size="large"/></Form.Item></>}
 <Button type="primary" block htmlType="submit" size="large" loading={busy}>{["Gửi mã OTP","Xác minh OTP","Đổi mật khẩu"][step]}</Button>
 </Form>{step===1&&<div style={{marginTop:16,display:"flex",justifyContent:"space-between"}}><Button disabled={busy} onClick={resend}>Gửi lại OTP</Button><Button type="link" disabled={busy} onClick={()=>{setStep(0);setNotice("");setError("");form.resetFields();}}>Đổi email</Button></div>}
 <p><Link to="/login">← Quay lại đăng nhập</Link></p></>}
 </section>;
}
