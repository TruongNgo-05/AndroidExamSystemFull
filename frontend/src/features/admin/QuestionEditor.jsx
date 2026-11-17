import ImageInput from "./ImageInput.jsx";
import {useState} from "react";
import {Alert,Button,Drawer,Form,Input,Modal,Popconfirm,Radio,Space,Table,message} from "antd";
import {api} from "../../shared/services/api.js";
export default function QuestionEditor({exam,onClose,onChanged}){
 const [uploading,setUploading]=useState(false);
 const [form]=Form.useForm(),[editing,setEditing]=useState(null),[busy,setBusy]=useState(false),[keyword,setKeyword]=useState(""),[importing,setImporting]=useState(false),[source,setSource]=useState(""),[error,setError]=useState("");
 const [msg,holder]=message.useMessage();
 const base=`/admin/exams/${encodeURIComponent(exam.id)}/questions`;
 function open(index){setEditing({index});form.resetFields();form.setFieldsValue(index==null?{a:0,o:["","","",""]}:exam.questions[index]);}
 async function save(v){if(uploading)return;setBusy(true);try{const body={...(editing.index==null?{}:exam.questions[editing.index]),...v,_revision:exam._revision};if(!body.image){delete body.image;delete body.imageAlt;}const updated=await api(base+(editing.index==null?"":`/${editing.index}`),{method:editing.index==null?"POST":"PATCH",body});setEditing(null);await onChanged(updated);msg.success("Đã lưu câu hỏi");}catch(e){msg.error(e.message);}finally{setBusy(false);}}
 async function remove(i){setBusy(true);try{const updated=await api(`/admin/catalog/exams/${encodeURIComponent(exam.id)}`,{method:"PATCH",body:{_revision:exam._revision,questions:exam.questions.filter((_,index)=>i!==index)}});await onChanged(updated);}catch(e){msg.error(e.message);}finally{setBusy(false);}}
 async function importQuestions(){setBusy(true);setError("");try{const parsed=JSON.parse(source),qs=Array.isArray(parsed)?parsed:parsed.questions;if(!Array.isArray(qs)||!qs.length)throw new Error("Cần một mảng JSON câu hỏi không rỗng.");
 for(const [i,q] of qs.entries())if(typeof q.q!=="string"||!q.q.trim()||!Array.isArray(q.o)||q.o.length!==4||q.o.some(o=>typeof o!=="string"||!o.trim())||!Number.isInteger(q.a)||q.a<0||q.a>3)throw new Error(`Câu ${i+1}: cần nội dung, 4 đáp án không rỗng và a từ 0 đến 3.`);
 const updated=await api(`/admin/catalog/exams/${encodeURIComponent(exam.id)}`,{method:"PATCH",body:{_revision:exam._revision,questions:[...exam.questions,...qs]}});setImporting(false);setSource("");await onChanged(updated);msg.success(`Đã thêm ${qs.length} câu hỏi`);
 }catch(e){setError(e.message);}finally{setBusy(false);}}
 const rows=exam.questions.map((q,index)=>({...q,index})).filter(q=>q.q.toLocaleLowerCase("vi").includes(keyword.toLocaleLowerCase("vi")));
 return <Drawer open title={`Câu hỏi · ${exam.title}`} width="min(1100px, 100vw)" onClose={()=>!busy&&onClose()}>{holder}
 <div className="admin-question-tools"><Input.Search style={{maxWidth:340}} placeholder="Tìm nội dung câu hỏi" value={keyword} onChange={e=>setKeyword(e.target.value)}/><Space><Button onClick={()=>{setError("");setImporting(true);}}>Nhập JSON</Button><Button type="primary" onClick={()=>open(null)}>Thêm câu hỏi</Button></Space></div>
 <p>{exam.questions.length} câu · Đáp án A/B/C/D tương ứng 0/1/2/3</p>
 <Table rowKey="index" dataSource={rows} scroll={{x:650}} pagination={{pageSize:10}} columns={[{title:"STT",dataIndex:"index",width:60,render:v=>v+1},{title:"Câu hỏi",dataIndex:"q",render:v=><div className="admin-question">{v}</div>},{title:"Đáp án đúng",width:180,render:(_,q)=><>{"ABCD"[q.a]}. {q.o[q.a]}</>},{title:"Thao tác",width:140,render:(_,q)=><Space><Button size="small" onClick={()=>open(q.index)}>Sửa</Button><Popconfirm title="Xóa câu hỏi này?" onConfirm={()=>remove(q.index)} okText="Xóa" cancelText="Hủy"><Button danger size="small" disabled={busy}>Xóa</Button></Popconfirm></Space>}]}/>
 <Modal open={!!editing} title={editing?.index==null?"Thêm câu hỏi":`Sửa câu ${editing.index+1}`} width={760} maskClosable={false} onCancel={()=>!busy&&!uploading&&setEditing(null)} onOk={()=>form.submit()} okButtonProps={{disabled:uploading}} confirmLoading={busy} okText="Lưu" cancelText="Hủy">
 <Form form={form} layout="vertical" onFinish={save}><Form.Item name="q" label="Nội dung câu hỏi" rules={[{required:true,whitespace:true,message:"Nhập câu hỏi."}]}><Input.TextArea rows={4}/></Form.Item>
 {[0,1,2,3].map(i=><Form.Item key={i} name={["o",i]} label={`Đáp án ${"ABCD"[i]}`} rules={[{required:true,whitespace:true,message:"Nhập đáp án."}]}><Input.TextArea autoSize={{minRows:1,maxRows:4}}/></Form.Item>)}
 <Form.Item name="a" label="Đáp án đúng" rules={[{required:true}]}><Radio.Group options={[0,1,2,3].map(i=>({value:i,label:"ABCD"[i]}))}/></Form.Item>
 <Form.Item name="image" label="Đường dẫn ảnh (bỏ trống nếu không có)"><ImageInput onBusyChange={setUploading}/></Form.Item><Form.Item name="imageAlt" label="Mô tả ảnh"><Input/></Form.Item></Form></Modal>
 <Modal open={importing} title="Thêm câu hỏi từ JSON" width={760} onCancel={()=>!busy&&setImporting(false)} onOk={importQuestions} confirmLoading={busy} okText="Kiểm tra và thêm" cancelText="Hủy"><p>Dán mảng câu hỏi hoặc object có questions. Thêm vào cuối đề, giữ các câu đang có. Không chạy mã JavaScript.</p>{error&&<Alert type="error" message={error}/>}<Input.TextArea rows={14} value={source} onChange={e=>setSource(e.target.value)} placeholder={'[{"q":"Câu hỏi","o":["A","B","C","D"],"a":0}]'}/></Modal>
 </Drawer>;
}
