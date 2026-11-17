import ImageInput from "./ImageInput.jsx";
import AdminFrame from "./AdminFrame.jsx";
import Dashboard from "./Dashboard.jsx";
import {useCallback,useEffect,useState} from "react";
import {Link} from "react-router-dom";
import {Alert,Button,Empty,Form,Input,InputNumber,Modal,Popconfirm,Select,Space,Spin,Table,Tag,message} from "antd";
import {api} from "../../shared/services/api.js";
import {useCatalog} from "../catalog/CatalogContext.jsx";
import {asset} from "../quiz/utils/quiz.js";
import QuestionEditor from "./QuestionEditor.jsx";
import "./admin.css";
const SECTIONS={dashboard:"Tổng quan",users:"Tài khoản",students:"Học sinh / Sinh viên",exams:"Đề thi",topics:"Chủ đề",majors:"Ngành học",schools:"Trường học",pages:"Giới thiệu",notifications:"Thông báo",results:"Kết quả thi",keys:"KEY truy cập"};
const labels={name:"Họ và tên",email:"Email",studentCode:"Mã học sinh / sinh viên",className:"Lớp",title:"Tên",description:"Mô tả",shortName:"Tên viết tắt",image:"Đường dẫn ảnh",tieu_de:"Tiêu đề",noi_dung:"Nội dung"};
const normalize=v=>String(v??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").toLowerCase();
const pathId=id=>encodeURIComponent(String(id));
export default function AdminPage({section="dashboard",theme,onTheme}){
 const catalog=useCatalog(),[data,setData]=useState(null),[error,setError]=useState(""),[loading,setLoading]=useState(true),[busy,setBusy]=useState(false),[keyword,setKeyword]=useState(""),[editor,setEditor]=useState(null),[questionExam,setQuestionExam]=useState(null),[role,setRole]=useState(""),[school,setSchool]=useState("");
 const [uploading,setUploading]=useState(false);
 const [form]=Form.useForm(),[msg,holder]=message.useMessage();
 const load=useCallback(async()=>{setLoading(true);try{setData(await api("/bootstrap"));setError("");}catch(e){setError(e.message);}finally{setLoading(false);}},[]);
 useEffect(()=>{load();},[load]);
 useEffect(()=>{setKeyword("");setRole("");setSchool("");setEditor(null);setQuestionExam(null);},[section]);
 const changed=async()=>{await load();await catalog.refresh();};
 const kind=section==="students"?"users":section;
 const endpoint=(k,id)=>`/admin/${["users","keys"].includes(k)?k:`catalog/${k}`}${id==null?"":`/${pathId(id)}`}`;
 function open(record=null){setEditor({record});form.resetFields();form.setFieldsValue(record?{...record,password:undefined}:({role:section==="students"?"STUDENT":"STUDENT",status:kind==="keys"?"ACTIVE":"active",majorId:"",topicId:"",schoolId:"hubt",maxUses:1}));}
 async function save(values){if(uploading)return;setBusy(true);try{
  const body={...values};if(!body.password)delete body.password;
  if(editor.record?._revision!=null)body._revision=editor.record._revision;
  await api(endpoint(kind,editor.record?.id),{method:editor.record?"PATCH":"POST",body});
  setEditor(null);msg.success("Đã lưu thay đổi");await changed();
 }catch(e){msg.error(e.message);}finally{setBusy(false);}}
 async function remove(record){setBusy(true);try{await api(endpoint(kind,record.id),{method:"DELETE"});msg.success("Đã xóa");await changed();}catch(e){msg.error(e.message);}finally{setBusy(false);}}
 async function toggle(u){setBusy(true);try{await api(`/admin/users/${pathId(u.id)}`,{method:"PATCH",body:{status:u.status==="active"?"blocked":"active"}});await load();}catch(e){msg.error(e.message);}finally{setBusy(false);}}
 const users=data?.users||[],exams=data?.exams||[];
 let rows=section==="students"?users.filter(u=>u.role==="STUDENT"):(data?.[kind]||[]);
 if(role)rows=rows.filter(u=>u.role===role);
 if(school)rows=rows.filter(e=>(e.schoolId||"hubt")===school);
 rows=rows.filter(r=>normalize([r.title,r.name,r.email,r.studentCode,r.id,r.tieu_de,r.shortName,r.studentName,r.code].join(" ")).includes(normalize(keyword)));
 const titleColumn={title:"Tên đề",dataIndex:"title",render:(v,r)=><><b>{v}</b><div className="muted">{r.id}</div></>};
 const actions={title:"Thao tác",key:"actions",width:kind==="exams"?220:180,render:(_,r)=><Space wrap>
  <Button size="small" onClick={()=>open(r)}>Sửa</Button>
  {kind==="exams"&&<Button size="small" onClick={()=>setQuestionExam(r)}>Câu hỏi</Button>}
  {kind==="users"&&<Button size="small" disabled={busy||r.id===data.user.id} onClick={()=>toggle(r)}>{r.status==="active"?"Khóa":"Mở khóa"}</Button>}
  {kind!=="pages"&&<Popconfirm title={`Xóa ${r.title||r.name||r.code||r.tieu_de||r.id}?`} description="Dữ liệu đang được sử dụng có thể không được phép xóa." onConfirm={()=>remove(r)} okText="Xóa" cancelText="Hủy"><Button size="small" danger disabled={busy||r.id===data?.user.id}>Xóa</Button></Popconfirm>}
 </Space>};
 const columns={
 users:[{title:"Họ tên",dataIndex:"name"},{title:"Mã SV",dataIndex:"studentCode"},{title:"Lớp",dataIndex:"className"},{title:"Trường",render:(_,r)=>data?.schools?.find(s=>s.id===r.schoolId)?.shortName||"Chưa chọn"},{title:"Email",dataIndex:"email"},{title:"Quyền",dataIndex:"role",render:v=><Tag color={v==="ADMIN"?"blue":"cyan"}>{v}</Tag>},{title:"Trạng thái",dataIndex:"status",render:v=><Tag color={v==="active"?"green":"red"}>{v==="active"?"Hoạt động":"Đã khóa"}</Tag>},actions],
 exams:[titleColumn,{title:"Trường",render:(_,r)=>data?.schools?.find(s=>s.id===(r.schoolId||"hubt"))?.shortName||r.schoolId||"HUBT"},{title:"Ngành / Chủ đề",render:(_,r)=><>{data?.majors?.find(m=>m.id===r.majorId)?.title||"Môn chung"}<br/><small>{data?.topics?.find(t=>t.id===r.topicId)?.title||"Chưa phân chủ đề"}</small></>},{title:"Số câu",render:(_,r)=>r.questions?.length||0},actions],
 schools:[{title:"Mã",dataIndex:"id"},{title:"Trường",dataIndex:"name"},{title:"Viết tắt",dataIndex:"shortName"},{title:"Ảnh",render:(_,r)=>r.image?<img className="admin-preview" src={asset(r.image)} alt={r.shortName}/>:"—"},actions],
 topics:[{title:"Mã",dataIndex:"id"},{title:"Chủ đề",dataIndex:"title"},{title:"Mô tả",dataIndex:"description"},actions],
 majors:[{title:"Mã",dataIndex:"id"},{title:"Ngành học",dataIndex:"title"},actions],
 pages:[{title:"Đường dẫn",dataIndex:"id"},{title:"Tiêu đề",dataIndex:"title"},{title:"Nội dung",dataIndex:"description",ellipsis:true},actions],
 notifications:[{title:"Tiêu đề",dataIndex:"tieu_de"},{title:"Nội dung",dataIndex:"noi_dung",ellipsis:true},actions],
 results:[{title:"Học sinh / Sinh viên",dataIndex:"studentName"},titleColumn,{title:"Đúng",dataIndex:"correct"},{title:"Tổng",dataIndex:"total"},{title:"Điểm (%)",dataIndex:"pct",render:v=><Tag color={v>=50?"green":"red"}>{v}%</Tag>}],
 keys:[{title:"KEY",dataIndex:"code"},{title:"Đã dùng",dataIndex:"usedCount"},{title:"Tối đa",dataIndex:"maxUses"},{title:"Trạng thái",dataIndex:"status"},actions]
 };
 function field(name,required=false,max=300,area=false,label=labels[name]){return <Form.Item key={name} name={name} label={label} className={area?"full":undefined} rules={[{required,whitespace:true,message:`Nhập ${label?.toLowerCase()}.`},{max}]}>{area?<Input.TextArea rows={5}/>:<Input/>}</Form.Item>;}
 return <AdminFrame section={section} theme={theme} onTheme={onTheme}>{holder}
 <section className="admin-content">{section!=="dashboard"&&<header className="admin-heading"><div><span className="admin-kicker">QUẢN LÝ HỆ THỐNG</span><h1>{SECTIONS[section]}</h1><p>Tìm kiếm, cập nhật và tổ chức dữ liệu trên JLer.</p></div><Button loading={loading} onClick={load}>Làm mới</Button></header>}
 {section==="dashboard"&&<div className="admin-date-row"><span>{new Date().toLocaleDateString("vi-VN",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}</span><Button size="small" loading={loading} onClick={load}>Làm mới dữ liệu</Button></div>}
 {error&&<Alert type="error" showIcon message={error} style={{marginBottom:16}}/>}
 <Spin spinning={loading&&!data}>
 {section==="dashboard"?<Dashboard data={data} loading={loading}/>:<div className="admin-surface">
 <div className="admin-toolbar"><Input.Search value={keyword} onChange={e=>setKeyword(e.target.value)} allowClear placeholder="Tìm kiếm trong danh sách…"/>
 {section==="users"&&<Select value={role} onChange={setRole} style={{width:150}} options={[{value:"",label:"Tất cả quyền"},{value:"ADMIN",label:"ADMIN"},{value:"STUDENT",label:"STUDENT"}]}/>}
 {kind==="exams"&&<Select value={school} onChange={setSchool} style={{width:180}} options={[{value:"",label:"Tất cả trường"},...(data?.schools||[]).map(s=>({value:s.id,label:s.shortName}))]}/>}
 {!["results","pages"].includes(kind)&&<Button type="primary" onClick={()=>open()}>Thêm mới</Button>}
 <span>{rows.length} bản ghi</span></div>
 {kind==="pages"&&<Alert type="info" message="Sửa tiêu đề và đoạn giới thiệu trên banner /gioi-thieu. Các phần video, tính năng và thiết kế hiện tại được giữ lại." style={{marginBottom:16}}/>}
 <Table rowKey="id" dataSource={rows} columns={columns[kind]} scroll={{x:kind==="users"?1000:700}} pagination={{defaultPageSize:10,showSizeChanger:true,showTotal:n=>`${n} bản ghi`}} locale={{emptyText:<Empty description="Chưa có dữ liệu"/>}}/>
 </div>}
 </Spin></section>
 <Modal open={!!editor} title={`${editor?.record?"Chỉnh sửa":"Thêm mới"} · ${SECTIONS[section]}`} onCancel={()=>!busy&&!uploading&&setEditor(null)} onOk={()=>form.submit()} okButtonProps={{disabled:uploading}} confirmLoading={busy} okText="Lưu" cancelText="Hủy" width={760} maskClosable={false}>
 <Form form={form} layout="vertical" onFinish={save}><div className="admin-form-grid">
 {!["users","keys"].includes(kind)&&<Form.Item name="id" label="Mã định danh (không đổi sau khi tạo)" rules={[{required:true,pattern:/^[a-zA-Z0-9_-]+$/,message:"Chỉ dùng chữ không dấu, số, _ hoặc -."}]}><Input disabled={!!editor?.record} maxLength={128}/></Form.Item>}
 {kind==="users"&&<>{field("name",true,200)}<Form.Item name="email" label="Email" rules={[{required:true,type:"email",message:"Email không hợp lệ."},{max:254}]}><Input/></Form.Item><Form.Item name="role" label="Quyền" rules={[{required:true}]}><Select disabled={section==="students"||editor?.record?.id===data?.user.id} options={[{value:"ADMIN",label:"ADMIN"},{value:"STUDENT",label:"STUDENT"}]}/></Form.Item><Form.Item noStyle shouldUpdate>{()=> <Form.Item name="studentCode" label="Mã học sinh / sinh viên" rules={[{required:form.getFieldValue("role")==="STUDENT",whitespace:true,message:"Nhập mã học sinh / sinh viên."},{max:64}]}><Input/></Form.Item>}</Form.Item>{field("className",false,100)}<Form.Item name="schoolId" label="Trường đại học"><Select showSearch optionFilterProp="label" options={[{value:"",label:"Chưa chọn trường"},...(data?.schools||[]).map(s=>({value:s.id,label:s.name}))]}/></Form.Item><Form.Item name="status" label="Trạng thái"><Select disabled={editor?.record?.id===data?.user.id} options={[{value:"active",label:"Hoạt động"},{value:"blocked",label:"Khóa"}]}/></Form.Item><Form.Item name="password" label={editor?.record?"Mật khẩu mới (bỏ trống để giữ nguyên)":"Mật khẩu"} rules={[{required:!editor?.record,message:"Nhập mật khẩu."},{min:6,max:72}]}><Input.Password autoComplete="new-password"/></Form.Item></>}
 {kind==="schools"&&<>{field("name",true,300,false,"Tên trường")}{field("shortName",true,50)}</>}
 {["schools","majors","exams"].includes(kind)&&<Form.Item name="image" label="Ảnh minh họa" className="full"><ImageInput onBusyChange={setUploading}/></Form.Item>}
 {["topics","majors","exams","pages"].includes(kind)&&field("title",true)}
 {["topics","exams","pages"].includes(kind)&&field("description",kind==="pages",20000,true)}
 {kind==="exams"&&<><Form.Item name="schoolId" label="Trường học" rules={[{required:true}]}><Select options={(data?.schools||[]).map(s=>({value:s.id,label:s.name}))}/></Form.Item><Form.Item name="majorId" label="Ngành học"><Select options={[{value:"",label:"Môn dùng chung"},...(data?.majors||[]).map(m=>({value:m.id,label:m.title}))]}/></Form.Item><Form.Item name="topicId" label="Chủ đề"><Select options={[{value:"",label:"Chưa phân chủ đề"},...(data?.topics||[]).map(m=>({value:m.id,label:m.title}))]}/></Form.Item><p className="full">Lưu thông tin đề rồi chọn “Câu hỏi” để thêm, sửa hoặc nhập JSON.</p></>}
 {kind==="notifications"&&<>{field("tieu_de",true,500)}{field("noi_dung",true,20000,true)}</>}
 {kind==="keys"&&<><Form.Item name="code" label="KEY (8 ký tự: chữ, số và dấu -)" rules={[{required:true,pattern:/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*-)[A-Za-z0-9-]{8}$/,message:"KEY gồm 8 ký tự với chữ, số và dấu -."}]}><Input disabled={!!editor?.record}/></Form.Item><Form.Item name="maxUses" label="Số lượt tối đa" rules={[{required:true}]}><InputNumber min={1} max={1000000}/></Form.Item><Form.Item name="status" label="Trạng thái"><Select options={[{value:"ACTIVE",label:"Hoạt động"},{value:"DISABLED",label:"Vô hiệu hóa"}]}/></Form.Item></>}
 </div></Form></Modal>
 {questionExam&&<QuestionEditor exam={questionExam} onClose={()=>setQuestionExam(null)} onChanged={async e=>{setQuestionExam(e);await changed();}}/>}
 </AdminFrame>;
}
