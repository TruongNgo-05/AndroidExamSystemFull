package vn.jler.quizhubt;

import android.app.*;
import android.os.*;
import android.content.*;
import android.graphics.Color;
import android.text.*;
import android.text.InputType;
import android.view.*;
import android.widget.*;
import org.json.*;
import java.time.Instant;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.Consumer;
import static vn.jler.quizhubt.Ui.*;
import static vn.jler.quizhubt.ApiClient.object;

/** Native Android views; all HTTP runs on the worker, never on the UI thread. */
public class MainActivity extends Activity {
 private SessionStore session;
 private ApiClient api;
 private final ExecutorService network=Executors.newSingleThreadExecutor();
 private final Handler handler=new Handler(Looper.getMainLooper());
 private LinearLayout body;
 private TextView status,timer;
 private int generation=0;
 private String screen="schools";
 private JSONArray subjects=new JSONArray(),schools=new JSONArray();
 private String schoolFilter="";
 private boolean authPending=false,startPending=false,registerForm=false;
 private String authReturn="catalog",pendingAttempt="";
 private int selectedCount=0,selectedMinutes=30;
 private boolean selectedShuffle=true;
 private JSONObject subject,exam,answers=new JSONObject(),studyData;
 private int questionIndex=0,studyPage=0,studyIndex=0,historyPage=0;
 private boolean revealed=false,submitting=false;
 private long deadlineElapsed;
 private String searchText="",majorFilter="";
 private String[] majorIds={"","cntt","ngon_ngu","quan_tri_kinh_doanh","tai_chinh_ngan_hang","ke_toan","suc_khoe","luat","du_lich"};
 private String[] majorNames={"Tất cả ngành","Công nghệ thông tin","Ngôn ngữ","Quản trị kinh doanh","Tài chính - Ngân hàng","Kế toán","Sức khỏe","Luật","Du lịch"};
 private final Runnable tick=new Runnable(){public void run(){
  if(!"exam".equals(screen)||exam==null||isComplete())return;
  long remaining=Math.max(0,(deadlineElapsed-SystemClock.elapsedRealtime()+999)/1000);
  if(timer!=null)timer.setText(String.format(Locale.ROOT,"%02d:%02d còn lại",remaining/60,remaining%60));
  if(remaining==0){if(!submitting)submit(false);else handler.postDelayed(this,1000);}else handler.postDelayed(this,1000);
 }};
 @Override public void onCreate(Bundle saved){
  super.onCreate(saved);session=new SessionStore(this);api=new ApiClient(session);
  if(saved!=null){
   authReturn=saved.getString("authReturn","catalog");pendingAttempt=saved.getString("pendingAttempt","");registerForm=saved.getBoolean("registerForm",false);
   selectedCount=saved.getInt("selectedCount",0);selectedMinutes=saved.getInt("selectedMinutes",30);selectedShuffle=saved.getBoolean("selectedShuffle",true);historyPage=saved.getInt("historyPage",0);
   schoolFilter=saved.getString("school","");searchText=saved.getString("search","");majorFilter=saved.getString("major","");questionIndex=saved.getInt("question",0);studyPage=saved.getInt("studyPage",0);studyIndex=saved.getInt("studyIndex",0);
   try{subject=new JSONObject(saved.getString("subject","{}"));}catch(Exception ignored){}
  }
  String last=saved==null?"schools":saved.getString("screen","schools");
  if(last.equals("auth")){if(loggedIn())afterLogin();else auth(registerForm);}
  else if((last.equals("exam")||last.equals("result"))&&saved!=null&&!saved.getString("attempt","").isEmpty())openAttempt(saved.getString("attempt"));
  else if(last.equals("study")&&subject!=null)loadStudy(studyPage,studyIndex);
  else if(last.equals("setup")&&subject!=null)setup();
  else if(last.equals("history"))history(0);
  else if(last.equals("profile"))profile();else if(last.equals("catalog"))catalog();else schoolsPage();
 }
 @Override protected void onSaveInstanceState(Bundle state){
  super.onSaveInstanceState(state);persist();state.putString("screen",screen);state.putString("authReturn",authReturn);state.putString("pendingAttempt",pendingAttempt);state.putBoolean("registerForm",registerForm);state.putInt("selectedCount",selectedCount);state.putInt("selectedMinutes",selectedMinutes);state.putBoolean("selectedShuffle",selectedShuffle);state.putInt("historyPage",historyPage);state.putString("school",schoolFilter);state.putString("search",searchText);state.putString("major",majorFilter);state.putInt("question",questionIndex);state.putInt("studyPage",studyPage);state.putInt("studyIndex",studyIndex);
  if(subject!=null)state.putString("subject",subject.toString());if(exam!=null)state.putString("attempt",exam.optString("id"));
 }
 @Override protected void onPause(){super.onPause();persist();}
 @Override protected void onDestroy(){handler.removeCallbacksAndMessages(null);network.shutdown();super.onDestroy();}
 private void persist(){if(loggedIn()&&exam!=null&&!isComplete())session.draft(exam.optString("id"),answers);}
 private boolean loggedIn(){return !session.token().isEmpty();}
 private void requestLogin(String destination){authReturn=destination;auth(false);}
 private void afterLogin(){
  String destination=authReturn;authReturn="catalog";
  if(destination.equals("setup")&&subject!=null)setup();
  else if(destination.equals("study")&&subject!=null)loadStudy(studyPage,studyIndex);
  else if(destination.equals("history"))history(historyPage);
  else if(destination.equals("profile"))profile();
  else if(destination.equals("attempt")&&!pendingAttempt.isEmpty()){String id=pendingAttempt;pendingAttempt="";openAttempt(id);}
  else catalog();
 }
 private void cancelLogin(){String destination=authReturn;authReturn="catalog";pendingAttempt="";if(destination.equals("setup")&&subject!=null)setup();else catalog();}
 private boolean isComplete(){return exam!=null&&"COMPLETED".equals(exam.optString("status"));}
 private JSONObject copy(JSONObject o){try{return new JSONObject(o.toString());}catch(Exception e){return new JSONObject();}}
 private void message(String value,boolean error){if(status!=null){status.setText(value);status.setTextColor(error?RED:MUTED);}}
 private void call(String method,String path,JSONObject data,Consumer<Object> success){call(method,path,data,success,false);}
 private void call(String method,String path,JSONObject data,Consumer<Object> success,boolean silent){
  int epoch=generation;if(!silent)message("Đang kết nối…",false);
  network.execute(()->{try{Object result=api.request(method,path,data);handler.post(()->{
   if(isDestroyed()||epoch!=generation)return;if(!silent)message("",false);success.accept(result);
  });}catch(Exception e){handler.post(()->{
   if(isDestroyed()||epoch!=generation)return;submitting=false;authPending=false;startPending=false;
   if(e instanceof ApiClient.ApiError&&((ApiClient.ApiError)e).status==401&&!screen.equals("auth")){String destination=screen.equals("exam")?"attempt":screen;String attemptId=exam==null?pendingAttempt:exam.optString("id");
    session.logout();exam=null;answers=new JSONObject();pendingAttempt=attemptId;requestLogin(destination);message("Phiên đăng nhập hết hạn. Đăng nhập để tiếp tục thao tác vừa chọn.",true);}
   else message(e instanceof ApiClient.ApiError?e.getMessage():"Không kết nối được máy chủ. Kiểm tra mạng và địa chỉ backend; dữ liệu bài đang làm vẫn được giữ trên máy.",true);
  });}});
 }
 private void shell(String title,String subtitle,boolean navigation){
  generation++;handler.removeCallbacks(tick);screen=screen==null?"catalog":screen;timer=null;
  LinearLayout root=column(this);root.setBackgroundColor(BG);root.setPadding(0,dp(this,8),0,0);setContentView(root);
  LinearLayout header=column(this);header.setPadding(dp(this,22),dp(this,12),dp(this,22),dp(this,6));
  TextView brand=text(this,"JLer  /  QUIZ HUBT",12,BLUE,true);add(header,brand,0);add(header,text(this,title,27,INK,true),8);if(!subtitle.isEmpty())add(header,text(this,subtitle,14,MUTED,false),3);root.addView(header);
  status=text(this,"",13,MUTED,false);status.setPadding(dp(this,22),dp(this,4),dp(this,22),dp(this,4));root.addView(status);
  ScrollView scroll=new ScrollView(this);scroll.setFillViewport(true);body=column(this);body.setPadding(dp(this,20),dp(this,8),dp(this,20),dp(this,24));scroll.addView(body);root.addView(scroll,new LinearLayout.LayoutParams(-1,0,1));
  if(navigation){LinearLayout nav=row(this);nav.setPadding(dp(this,10),dp(this,10),dp(this,10),dp(this,12));nav.setBackgroundColor(Color.WHITE);
   for(String label:new String[]{"Môn học","Lịch sử","Tài khoản"}){
    Button b=button(this,label,false);b.setTextSize(13);weight(nav,b);b.setOnClickListener(v->{if(label.equals("Môn học")){if(schoolFilter.isEmpty())schoolsPage();else catalog();}else if(label.equals("Lịch sử"))history(0);else profile();});
   }root.addView(nav);
  }
 }
 private void action(LinearLayout parent,String label,boolean primary,Runnable run){Button b=button(this,label,primary);add(parent,b,12);b.setOnClickListener(v->run.run());}
 private TextView label(String value){TextView t=text(this,value,14,MUTED,true);add(body,t,18);return t;}
 private void auth(boolean register){
  screen="auth";registerForm=register;authPending=false;shell(register?"Tạo tài khoản sinh viên":"Chào bạn trở lại","Dùng tài khoản hiện có trên hệ thống JLer.",false);
  LinearLayout intro=card(this);add(intro,text(this,"Kho đề của bạn,\ntrong tầm tay.",25,BLUE,true),0);add(intro,text(this,"Ôn tập • Thi thử • Kết quả dùng chung với web",14,MUTED,false),12);add(body,intro,8);
  EditText name=input(this,"Họ và tên",InputType.TYPE_CLASS_TEXT|InputType.TYPE_TEXT_FLAG_CAP_WORDS);
  EditText code=input(this,"Mã sinh viên",InputType.TYPE_CLASS_TEXT);
  EditText className=input(this,"Lớp (không bắt buộc)",InputType.TYPE_CLASS_TEXT);
  EditText login=input(this,register?"Email":"Mã sinh viên hoặc email",InputType.TYPE_CLASS_TEXT);
  EditText password=input(this,"Mật khẩu (từ 6 ký tự)",InputType.TYPE_CLASS_TEXT|InputType.TYPE_TEXT_VARIATION_PASSWORD);
  Spinner school=new Spinner(this);school.setAdapter(new ArrayAdapter<>(this,android.R.layout.simple_spinner_dropdown_item,new String[]{"Chưa chọn trường"}));
  if(register){add(body,name,20);add(body,code,12);add(body,className,12);add(body,school,12);}
  add(body,login,16);add(body,password,12);
  if(register)call("GET","/public/mobile-info",null,r->{schools=((JSONObject)r).optJSONArray("schools");if(schools==null)schools=new JSONArray();String[] names=new String[schools.length()+1];names[0]="Chưa chọn trường";for(int i=0;i<schools.length();i++)names[i+1]=schools.optJSONObject(i).optString("name");school.setAdapter(new ArrayAdapter<>(this,android.R.layout.simple_spinner_dropdown_item,names));for(int i=0;i<schools.length();i++)if(schoolFilter.equals(schools.optJSONObject(i).optString("id")))school.setSelection(i+1);});
  Button go=button(this,register?"Đăng ký":"Đăng nhập",true);add(body,go,20);
  go.setOnClickListener(v->{
   if(authPending)return;String identifier=login.getText().toString().trim(),pass=password.getText().toString(),full=name.getText().toString().trim(),studentCode=code.getText().toString().trim();
   if(identifier.isEmpty()||pass.length()<6||(register&&(full.isEmpty()||studentCode.isEmpty()||!android.util.Patterns.EMAIL_ADDRESS.matcher(identifier).matches()))){message("Nhập thông tin hợp lệ; đăng ký cần họ tên, mã sinh viên, email và mật khẩu từ 6 ký tự.",true);return;}
   authPending=true;JSONObject payload;
   if(register){int index=school.getSelectedItemPosition()-1;payload=object("name",full,"studentCode",studentCode,"className",className.getText().toString().trim(),"email",identifier,"password",pass,"schoolId",index>=0?schools.optJSONObject(index).optString("id"):"");}
   else payload=object(identifier.contains("@")?"email":"studentCode",identifier,"password",pass,"role","STUDENT");
   call("POST",register?"/auth/register":"/auth/login",payload,r->{try{authPending=false;session.login((JSONObject)r);afterLogin();}catch(Exception e){authPending=false;message("Không lưu được phiên đăng nhập trên thiết bị.",true);}});
  });
  action(body,register?"Đã có tài khoản? Đăng nhập":"Chưa có tài khoản? Đăng ký",false,()->auth(!register));
  if(!register)action(body,"Quên mật khẩu?",false,this::forgotPassword);
  action(body,"← Quay lại xem môn học",false,this::cancelLogin);action(body,"Cấu hình địa chỉ máy chủ",false,this::serverDialog);add(body,text(this,"Máy chủ: "+session.server(),12,MUTED,false),16);
 }
 private void forgotPassword(){
  screen="auth";shell("Khôi phục mật khẩu","Nhận mã OTP qua email đã đăng ký.",false);EditText email=input(this,"Email tài khoản",InputType.TYPE_CLASS_TEXT|InputType.TYPE_TEXT_VARIATION_EMAIL_ADDRESS);add(body,email,12);
  action(body,"Gửi mã OTP",true,()->{if(!android.util.Patterns.EMAIL_ADDRESS.matcher(email.getText().toString().trim()).matches()){message("Nhập email hợp lệ.",true);return;}call("POST","/auth/forgot-password",object("email",email.getText().toString().trim()),r->verifyOtp(((JSONObject)r).optString("requestId")));});action(body,"← Đăng nhập",false,()->auth(false));
 }
 private void verifyOtp(String requestId){
  screen="auth";shell("Xác minh OTP","Nhập mã 6 số nhận qua email. Yêu cầu có hiệu lực 10 phút.",false);EditText otp=input(this,"Mã OTP",InputType.TYPE_CLASS_NUMBER);add(body,otp,12);action(body,"Xác minh",true,()->call("POST","/auth/verify-otp",object("requestId",requestId,"otp",otp.getText().toString().trim()),r->resetPassword(requestId,((JSONObject)r).optString("resetToken"))));action(body,"← Bắt đầu lại",false,this::forgotPassword);
 }
 private void resetPassword(String requestId,String resetToken){
  screen="auth";shell("Đặt mật khẩu mới","Phiên đăng nhập cũ sẽ được thu hồi.",false);EditText password=input(this,"Mật khẩu mới",InputType.TYPE_CLASS_TEXT|InputType.TYPE_TEXT_VARIATION_PASSWORD);add(body,password,12);action(body,"Lưu mật khẩu",true,()->call("POST","/auth/reset-password",object("requestId",requestId,"resetToken",resetToken,"password",password.getText().toString()),r->{session.logout();auth(false);message("Đã đổi mật khẩu. Vui lòng đăng nhập lại.",false);}));action(body,"← Đăng nhập",false,()->auth(false));
 }
 private void serverDialog(){
  EditText url=input(this,"https://api.example.com",InputType.TYPE_CLASS_TEXT|InputType.TYPE_TEXT_VARIATION_URI);url.setText(session.server());
  AlertDialog dialog=new AlertDialog.Builder(this).setTitle("Địa chỉ backend").setMessage("Máy ảo: http://10.0.2.2:8080\nĐiện thoại thật: IP LAN của máy chạy backend. Thay địa chỉ sẽ đăng xuất tài khoản hiện tại.").setView(url).setNegativeButton("Hủy",null).setPositiveButton("Lưu",null).create();
  dialog.setOnShowListener(d->dialog.getButton(-1).setOnClickListener(v->{
   try{java.net.URI parsed=java.net.URI.create(url.getText().toString().trim());String scheme=parsed.getScheme();
    if(parsed.getHost()==null||(!"http".equals(scheme)&&!"https".equals(scheme))||parsed.getUserInfo()!=null||parsed.getQuery()!=null||parsed.getFragment()!=null||!(parsed.getPath().isEmpty()||parsed.getPath().equals("/")))throw new IllegalArgumentException();
    session.server(parsed.toString());exam=null;subject=null;subjects=new JSONArray();schools=new JSONArray();schoolFilter="";authReturn="catalog";pendingAttempt="";selectedCount=0;dialog.dismiss();schoolsPage();
   }catch(Exception e){url.setError("Nhập http(s)://host:port, không thêm /api");}
  }));dialog.show();
 }
 private void schoolsPage(){
  screen="schools";shell("Chọn trường của bạn","Danh sách trường được cập nhật từ hệ thống JLer.",true);
  EditText search=input(this,"Tìm trường theo tên hoặc viết tắt…",InputType.TYPE_CLASS_TEXT);add(body,search,8);LinearLayout list=column(this);add(body,list,12);
  Runnable render=()->{list.removeAllViews();String term=normalize(search.getText().toString());int count=0;for(int i=0;i<schools.length();i++){
   JSONObject item=schools.optJSONObject(i);if(!normalize(item.optString("name")+" "+item.optString("shortName")).contains(term))continue;count++;
   LinearLayout tile=card(this);String image=item.optString("image");if(!image.isEmpty()){ImageView view=new ImageView(this);view.setAdjustViewBounds(true);view.setMaxHeight(dp(this,140));view.setScaleType(ImageView.ScaleType.FIT_CENTER);view.setVisibility(View.GONE);add(tile,view,0);ImageLoader.load(view,imageUrl(image));}
   add(tile,text(this,item.optString("shortName"),13,BLUE,true),8);add(tile,text(this,item.optString("name"),21,INK,true),6);add(tile,text(this,item.optInt("subjectCount")+" bộ đề  •  "+item.optInt("questionCount")+" câu hỏi",14,MUTED,false),10);
   action(tile,"Chọn trường →",true,()->{schoolFilter=item.optString("id");majorFilter="";searchText="";subjects=new JSONArray();subject=null;catalog();});add(list,tile,14);
  }if(count==0)add(list,text(this,"Chưa có trường phù hợp. Bạn có thể tải lại danh sách.",16,MUTED,false),20);};
  search.addTextChangedListener(new TextWatcher(){public void beforeTextChanged(CharSequence s,int a,int c,int f){}public void onTextChanged(CharSequence s,int a,int before,int c){render.run();}public void afterTextChanged(Editable e){}});
  action(body,"Xem môn của tất cả trường",false,()->{schoolFilter="";majorFilter="";searchText="";subjects=new JSONArray();catalog();});action(body,"Tải lại trường",false,this::schoolsPage);action(body,"Cấu hình địa chỉ máy chủ",false,this::serverDialog);
  call("GET","/public/schools",null,r->{schools=(JSONArray)r;render.run();});
 }
 private static String normalize(String value){return java.text.Normalizer.normalize(value.toLowerCase(Locale.ROOT),java.text.Normalizer.Form.NFD).replaceAll("\\p{M}","").replace('đ','d').trim();}
 private void catalog(){
  screen="catalog";shell(schoolFilter.isEmpty()?"Môn học các trường":"Môn học — "+schoolName(schoolFilter),loggedIn()?"Xin chào, "+session.user().optString("name","bạn")+". Chọn môn để bắt đầu.":"Xem môn học và ôn tập ngay. Đăng nhập khi bắt đầu thi.",true);
  action(body,"← Chọn trường khác",false,this::schoolsPage);
  if(loggedIn()&&!session.active().isEmpty())action(body,"Tiếp tục bài đang làm →",true,()->openAttempt(session.active()));
  EditText search=input(this,"Tìm tên môn học…",InputType.TYPE_CLASS_TEXT);search.setText(searchText);add(body,search,10);
  final String preferredMajor=majorFilter;Spinner majors=new Spinner(this);majors.setAdapter(new ArrayAdapter<>(this,android.R.layout.simple_spinner_dropdown_item,new String[]{"Tất cả ngành"}));majors.setEnabled(false);add(body,majors,12);
  TextView count=text(this,"",13,MUTED,false);add(body,count,16);LinearLayout list=column(this);add(body,list,0);Runnable filter=()->renderSubjects(list,count);
  search.addTextChangedListener(new TextWatcher(){public void beforeTextChanged(CharSequence s,int st,int c,int a){}public void onTextChanged(CharSequence s,int st,int before,int c){searchText=s.toString();filter.run();}public void afterTextChanged(Editable e){}});
  filter.run();action(body,"Tải lại môn học",false,this::catalog);action(body,"Thông báo",false,this::notifications);action(body,"Cấu hình địa chỉ máy chủ",false,this::serverDialog);
  String subjectPath=schoolFilter.isEmpty()?"/subjects":"/public/schools/"+ApiClient.encode(schoolFilter)+"/subjects";
  call("GET",subjectPath,null,r->{subjects=(JSONArray)r;filter.run();});
  String majorPath=schoolFilter.isEmpty()?"/public/mobile-info":"/public/schools/"+ApiClient.encode(schoolFilter)+"/majors";
  call("GET",majorPath,null,r->{JSONArray all=schoolFilter.isEmpty()?((JSONObject)r).optJSONArray("majors"):(JSONArray)r;if(all==null)all=new JSONArray();majorIds=new String[all.length()+1];majorNames=new String[all.length()+1];majorIds[0]="";majorNames[0]="Tất cả ngành";int selection=0;for(int i=0;i<all.length();i++){majorIds[i+1]=all.optJSONObject(i).optString("id");majorNames[i+1]=all.optJSONObject(i).optString("title");if(preferredMajor.equals(majorIds[i+1]))selection=i+1;}majorFilter=majorIds[selection];majors.setAdapter(new ArrayAdapter<>(this,android.R.layout.simple_spinner_dropdown_item,majorNames));majors.setSelection(selection);majors.setEnabled(true);majors.setOnItemSelectedListener(new android.widget.AdapterView.OnItemSelectedListener(){public void onItemSelected(android.widget.AdapterView<?> p,View v,int index,long id){if(index<majorIds.length){majorFilter=majorIds[index];filter.run();}}public void onNothingSelected(android.widget.AdapterView<?> p){}});filter.run();});
 }
 private void renderSubjects(LinearLayout list,TextView count){
  list.removeAllViews();int found=0;String term=normalize(searchText);
  for(int i=0;i<subjects.length();i++){
   JSONObject item=subjects.optJSONObject(i);if(item==null||!normalize(item.optString("title")).contains(term)||(!majorFilter.isEmpty()&&!majorFilter.equals(item.optString("majorId")))||(!schoolFilter.isEmpty()&&!schoolFilter.equals(item.optString("schoolId","hubt"))))continue;found++;
   LinearLayout card=card(this);add(card,text(this,majorName(item.optString("majorId")),12,BLUE,true),0);add(card,text(this,item.optString("title"),19,INK,true),8);add(card,text(this,item.optInt("questionCount")+" câu hỏi  •  "+schoolName(item.optString("schoolId","hubt")),13,MUTED,false),8);
   action(card,"Ôn tập hoặc thi thử →",false,()->{subject=item;selectedCount=0;selectedMinutes=30;selectedShuffle=true;setup();});add(list,card,14);
  }
  count.setText(getString(R.string.found_count,found));if(found==0)add(list,text(this,subjects.length()==0&&!schoolFilter.isEmpty()?"Trường này chưa có bộ đề. Bạn có thể chọn trường khác hoặc chờ quản trị thêm đề.":"Chưa có môn phù hợp. Thử từ khóa hoặc ngành khác.",15,MUTED,false),20);
 }
 private String schoolName(String id){for(int i=0;i<schools.length();i++){JSONObject school=schools.optJSONObject(i);if(id.equals(school.optString("id")))return school.optString("shortName",school.optString("name"));}return id.toUpperCase(Locale.ROOT);}
 private String majorName(String id){int i=Arrays.asList(majorIds).indexOf(id);return i>0?majorNames[i]:"Đại cương";}
 private void setup(){
  startPending=false;
  screen="setup";shell(subject.optString("title"),subject.optInt("questionCount")+" câu hỏi • "+majorName(subject.optString("majorId")),false);
  String desc=subject.optString("description");if(!desc.isEmpty())add(body,text(this,desc,15,MUTED,false),0);
  LinearLayout study=card(this);add(study,text(this,"01  /  Ôn tập",21,INK,true),0);add(study,text(this,"Học lần lượt từng câu, chọn đáp án rồi kiểm tra kết quả ngay.",15,MUTED,false),10);action(study,"Bắt đầu ôn tập",true,()->loadStudy(0,0));add(body,study,16);
  label("02  /  Thi thử");EditText count=input(this,"Số câu",InputType.TYPE_CLASS_NUMBER);count.setText(String.valueOf(selectedCount>0?Math.min(selectedCount,subject.optInt("questionCount")):Math.min(40,subject.optInt("questionCount"))));add(body,count,10);
  EditText minutes=input(this,"Thời gian (phút)",InputType.TYPE_CLASS_NUMBER);minutes.setText(String.valueOf(selectedMinutes));add(body,minutes,12);
  CheckBox shuffle=new CheckBox(this);shuffle.setText(R.string.shuffle_questions);shuffle.setChecked(selectedShuffle);add(body,shuffle,12);
  Button start=button(this,"Bắt đầu thi thử",true);add(body,start,16);start.setOnClickListener(v->{if(startPending)return;try{
   int n=Integer.parseInt(count.getText().toString()),m=Integer.parseInt(minutes.getText().toString());
   if(n<1||n>Math.min(500,subject.optInt("questionCount"))||m<1||m>180){message("Số câu từ 1 đến "+Math.min(500,subject.optInt("questionCount"))+", thời gian 1–180 phút.",true);return;}
   selectedCount=n;selectedMinutes=m;selectedShuffle=shuffle.isChecked();
   if(!loggedIn()){requestLogin("setup");message("Đăng nhập để thi môn "+subject.optString("title")+". Môn và cấu hình thi của bạn được giữ lại.",false);return;}
   if(!session.active().isEmpty()){new AlertDialog.Builder(this).setTitle("Bạn có bài đang làm").setMessage("Tiếp tục bài hiện tại hoặc nộp bài đó trước khi bắt đầu bài mới.").setPositiveButton("Tiếp tục",(d,w)->openAttempt(session.active())).setNegativeButton("Đóng",null).show();return;}
   startPending=true;
   call("POST","/attempts",object("subjectId",subject.optString("id"),"count",n,"minutes",m,"shuffle",shuffle.isChecked()),r->{startPending=false;questionIndex=0;acceptAttempt((JSONObject)r,false);});
  }catch(NumberFormatException e){message("Nhập số câu và thời gian hợp lệ.",true);}});
  action(body,"← Danh sách môn học",false,this::catalog);
 }
 private void loadStudy(int page,int index){
  screen="study";shell("Ôn tập",subject.optString("title"),false);action(body,"Thử tải lại",false,()->loadStudy(page,index));action(body,"← Chọn chế độ",false,this::setup);
  call("GET","/subjects/"+ApiClient.encode(subject.optString("id"))+"/study?page="+page+"&size=30",null,r->{studyData=(JSONObject)r;studyPage=page;studyIndex=index;revealed=false;studyQuestion();});
 }
 private void studyQuestion(){
  screen="study";JSONArray items=studyData.optJSONArray("items");if(items==null||items.length()==0){setup();message("Môn học chưa có câu hỏi.",true);return;}
  studyIndex=Math.max(0,Math.min(studyIndex,items.length()-1));JSONObject q=items.optJSONObject(studyIndex);int absolute=studyPage*30+studyIndex;
  shell("Ôn tập",subject.optString("title"),false);add(body,text(this,"CÂU "+(absolute+1)+" / "+studyData.optInt("total"),13,BLUE,true),0);
  showQuestion(q);LinearLayout opts=column(this);add(body,opts,14);JSONArray options=q.optJSONArray("options");
  for(int i=0;i<options.length();i++){
   final int choice=i;Button b=answerButton(i,options.optString(i),false);add(opts,b,10);
   if(revealed&&i==q.optInt("answerIndex")){b.setText(getString(R.string.correct_option,b.getText()));b.setTextColor(GREEN);b.setBackground(rounded(Color.rgb(230,247,239),GREEN,this));}
   b.setOnClickListener(v->{revealed=true;studyQuestion();message(choice==q.optInt("answerIndex")?"Chính xác!":"Đáp án đúng: "+letter(q.optInt("answerIndex")),choice!=q.optInt("answerIndex"));});
  }
  if(!revealed)action(body,"Hiện đáp án",false,()->{revealed=true;studyQuestion();});
  else if(loggedIn())action(body,"Giải thích bằng AI",false,()->call("POST","/ai/explain",object("questionId",q.optString("id")),r->{
   TextView explanation=text(this,((JSONObject)r).optString("explanation"),16,INK,false);explanation.setPadding(dp(this,20),dp(this,12),dp(this,20),dp(this,12));ScrollView scroll=new ScrollView(this);scroll.addView(explanation);new AlertDialog.Builder(this).setTitle("Giải thích tham khảo từ AI").setView(scroll).setPositiveButton("Đóng",null).show();
  }));
  LinearLayout nav=row(this);Button prev=button(this,"← Trước",false),next=button(this,"Tiếp →",true);weight(nav,prev);weight(nav,next);add(body,nav,24);prev.setEnabled(absolute>0);next.setEnabled(absolute+1<studyData.optInt("total"));
  prev.setOnClickListener(v->{revealed=false;if(studyIndex>0){studyIndex--;studyQuestion();}else loadStudy(studyPage-1,29);});
  next.setOnClickListener(v->{revealed=false;if(studyIndex+1<items.length()){studyIndex++;studyQuestion();}else loadStudy(studyPage+1,0);});
  action(body,"← Chọn chế độ",false,this::setup);
 }
 private String letter(int i){return String.valueOf((char)('A'+i));}
 private Button answerButton(int index,String value,boolean chosen){
  Button b=button(this,letter(index)+".  "+value,false);b.setGravity(Gravity.START|Gravity.CENTER_VERTICAL);b.setTypeface(android.graphics.Typeface.DEFAULT);b.setTextColor(chosen?BLUE:INK);b.setBackground(rounded(chosen?Color.rgb(232,239,255):Color.WHITE,chosen?BLUE:Color.rgb(219,227,243),this));return b;
 }
 private void showQuestion(JSONObject q){
  LinearLayout block=card(this);add(block,text(this,q.optString("content"),19,INK,true),0);String image=q.optString("image","");
  if(!image.isEmpty()&&!image.equals("null")){
   add(block,text(this,"Ảnh minh họa: "+q.optString("imageAlt","Nếu ảnh chưa hiển thị, máy chủ có thể chưa có tệp ảnh gốc."),12,MUTED,false),14);
   ImageView picture=new ImageView(this);picture.setAdjustViewBounds(true);picture.setMaxHeight(dp(this,360));picture.setScaleType(ImageView.ScaleType.FIT_CENTER);picture.setVisibility(View.GONE);add(block,picture,10);
   String url=imageUrl(image);ImageLoader.load(picture,url);
  }add(body,block,12);
 }
 private void openAttempt(String id){
  if(!loggedIn()){pendingAttempt=id;requestLogin("attempt");return;}
  screen="exam";shell("Bài thi của bạn","Đang tải bài và đáp án đã lưu…",false);action(body,"Thử lại",false,()->openAttempt(id));action(body,"← Lịch sử",false,()->history(0));
  call("GET","/attempts/"+ApiClient.encode(id),null,r->acceptAttempt((JSONObject)r,true));
 }
 private void acceptAttempt(JSONObject result,boolean merge){
  exam=result;submitting=false;answers=copy(exam.optJSONObject("answers")==null?new JSONObject():exam.optJSONObject("answers"));
  if(isComplete()){session.completed(exam.optString("id"));result();return;}
  if(merge){JSONObject draft=session.draft(exam.optString("id"));Iterator<String> keys=draft.keys();while(keys.hasNext()){String key=keys.next();try{answers.put(key,draft.getInt(key));}catch(Exception ignored){}}}
  session.active(exam.optString("id"));persist();
  try{long remaining=Instant.parse(exam.getString("deadline")).toEpochMilli()-Instant.parse(exam.getString("serverTime")).toEpochMilli();deadlineElapsed=SystemClock.elapsedRealtime()+Math.max(0,remaining);}catch(Exception e){deadlineElapsed=SystemClock.elapsedRealtime();}
  renderExam();if(merge)saveAnswers();
 }
 private void renderExam(){
  if(submitting)return;
  screen="exam";shell("Thi thử",exam.optString("subjectTitle"),false);JSONArray qs=exam.optJSONArray("questions");questionIndex=Math.max(0,Math.min(questionIndex,qs.length()-1));JSONObject q=qs.optJSONObject(questionIndex);
  timer=text(this,"",22,BLUE,true);add(body,timer,0);add(body,text(this,"Câu "+(questionIndex+1)+" / "+qs.length()+"  •  Đã chọn "+answers.length()+" câu",13,MUTED,false),6);
  ProgressBar progress=new ProgressBar(this,null,android.R.attr.progressBarStyleHorizontal);progress.setMax(qs.length());progress.setProgress(answers.length());add(body,progress,12);showQuestion(q);
  JSONArray options=q.optJSONArray("options");String qid=q.optString("id");int selected=answers.optInt(qid,-1);
  for(int i=0;i<options.length();i++){
   final int choice=i;Button b=answerButton(i,options.optString(i),i==selected);add(body,b,10);
   b.setOnClickListener(v->{if(submitting)return;try{answers.put(qid,choice);}catch(Exception ignored){}persist();saveAnswers();renderExam();});
  }
  LinearLayout nav=row(this);Button prev=button(this,"← Trước",false),next=button(this,"Tiếp →",false);weight(nav,prev);weight(nav,next);add(body,nav,20);prev.setEnabled(questionIndex>0);next.setEnabled(questionIndex+1<qs.length());prev.setOnClickListener(v->{questionIndex--;renderExam();});next.setOnClickListener(v->{questionIndex++;renderExam();});
  action(body,"Danh sách câu hỏi",false,this::questionPicker);action(body,submitting?"Đang nộp…":"Nộp bài",true,()->submit(true));handler.post(tick);
 }
 private void questionPicker(){
  JSONArray qs=exam.optJSONArray("questions");String[] labels=new String[qs.length()];for(int i=0;i<labels.length;i++)labels[i]="Câu "+(i+1)+(answers.has(qs.optJSONObject(i).optString("id"))?"   • Đã chọn":"   ○ Chưa chọn");
  new AlertDialog.Builder(this).setTitle("Chuyển đến câu hỏi").setItems(labels,(d,i)->{questionIndex=i;renderExam();}).setNegativeButton("Đóng",null).show();
 }
 private void saveAnswers(){
  if(exam==null||isComplete()||submitting)return;
  String id=exam.optString("id");JSONObject snapshot=copy(answers);int epoch=generation;
  network.execute(()->{try{JSONObject r=(JSONObject)api.request("PUT","/attempts/"+id+"/answers",object("answers",snapshot));handler.post(()->{
   if(isDestroyed()||exam==null||!id.equals(exam.optString("id")))return;
   if("COMPLETED".equals(r.optString("status"))){exam=r;session.completed(id);if("exam".equals(screen))result();}
   else if("exam".equals(screen))message("Đã lưu đáp án trên máy chủ",false);
  });}catch(Exception e){handler.post(()->{if(!isDestroyed()&&exam!=null&&id.equals(exam.optString("id"))&&"exam".equals(screen))message("Đáp án đã lưu trên máy. Chưa đồng bộ được; hãy kiểm tra mạng trước khi hết giờ.",true);});}});
 }
 private void submit(boolean confirm){
  if(submitting||exam==null||isComplete())return;
  if(confirm){new AlertDialog.Builder(this).setTitle("Nộp bài thi?").setMessage("Đã trả lời "+answers.length()+" / "+exam.optInt("total")+" câu. Bài đã nộp sẽ không thể sửa.").setPositiveButton("Nộp bài",(d,w)->submit(false)).setNegativeButton("Làm tiếp",null).show();return;}
  submitting=true;persist();message("Đang nộp bài…",false);
  call("POST","/attempts/"+exam.optString("id")+"/submit",object("answers",copy(answers)),r->{exam=(JSONObject)r;submitting=false;session.completed(exam.optString("id"));result();});
 }
 private void result(){
  screen="result";shell("Kết quả thi",exam.optString("subjectTitle"),false);
  LinearLayout hero=card(this);add(hero,text(this,String.format(Locale.ROOT,"%.2f / 10",exam.optDouble("score")),42,BLUE,true),0);add(hero,text(this,exam.optInt("correctCount")+" / "+exam.optInt("total")+" câu đúng",18,INK,true),12);
  add(hero,text(this,exam.optBoolean("timedOut")?"Hết thời gian — hệ thống chấm các đáp án đã đồng bộ trước hạn.":"Bài đã được chấm và lưu vào tài khoản.",14,MUTED,false),10);add(body,hero,10);
  action(body,"Xem lại đáp án",true,()->review(0));action(body,"Lịch sử làm bài",false,()->history(0));action(body,"Chọn môn khác",false,this::catalog);
 }
 private void review(int index){
  screen="result";shell("Xem lại bài thi",exam.optString("subjectTitle"),false);JSONArray qs=exam.optJSONArray("questions");JSONObject q=qs.optJSONObject(index);JSONObject selected=exam.optJSONObject("answers");int chosen=selected.optInt(q.optString("id"),-1),correct=q.optInt("answerIndex");
  add(body,text(this,"Câu "+(index+1)+" / "+qs.length(),14,BLUE,true),0);showQuestion(q);JSONArray options=q.optJSONArray("options");
  for(int i=0;i<options.length();i++){
   TextView line=text(this,(i==correct?"✓ ":i==chosen?"✕ ":"")+letter(i)+". "+options.optString(i),16,i==correct?GREEN:i==chosen?RED:INK,i==correct);add(body,line,18);
  }add(body,text(this,chosen<0?"Bạn chưa chọn đáp án.":"Bạn chọn "+letter(chosen)+". Đáp án đúng: "+letter(correct),14,chosen==correct?GREEN:RED,true),20);
  LinearLayout nav=row(this);Button prev=button(this,"← Trước",false),next=button(this,"Tiếp →",true);weight(nav,prev);weight(nav,next);add(body,nav,24);prev.setEnabled(index>0);next.setEnabled(index+1<qs.length());prev.setOnClickListener(v->review(index-1));next.setOnClickListener(v->review(index+1));action(body,"← Kết quả",false,this::result);
 }
 private void history(int page){
  if(!loggedIn()){historyPage=page;screen="history";shell("Lịch sử làm bài","Đăng nhập để xem kết quả của riêng bạn.",true);action(body,"Đăng nhập",true,()->requestLogin("history"));action(body,"← Danh sách môn học",false,this::catalog);return;}
  screen="history";historyPage=page;shell("Hành trình của bạn","Các bài thi được lưu theo tài khoản.",true);action(body,"Tải lại lịch sử",false,()->history(page));
  call("GET","/attempts?page="+page,null,r->{JSONObject response=(JSONObject)r;JSONArray items=response.optJSONArray("items");if(items.length()==0)add(body,text(this,"Chưa có bài thi. Hãy chọn một môn và bắt đầu nhé.",17,MUTED,false),24);
   for(int i=0;i<items.length();i++){
    JSONObject a=items.optJSONObject(i);boolean done="COMPLETED".equals(a.optString("status"));if(done)session.completed(a.optString("id"));LinearLayout card=card(this);add(card,text(this,a.optString("subjectTitle"),19,INK,true),0);
    add(card,text(this,done?String.format(Locale.ROOT,"%.2f / 10  •  %d/%d câu đúng",a.optDouble("score"),a.optInt("correctCount"),a.optInt("total")):"Bài đang làm",15,done?GREEN:BLUE,true),10);
    String time=a.optString("startedAt");try{time=java.time.format.DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm").withZone(java.time.ZoneId.systemDefault()).format(Instant.parse(time));}catch(Exception ignored){}add(card,text(this,time,13,MUTED,false),8);
    action(card,done?"Xem kết quả":"Tiếp tục",false,()->{questionIndex=0;openAttempt(a.optString("id"));});add(body,card,16);
   }
   if(page>0)action(body,"← Trang trước",false,()->history(page-1));if(response.optBoolean("hasNext"))action(body,"Trang tiếp →",false,()->history(page+1));
  });
 }
 private void profile(){
  if(!loggedIn()){screen="profile";shell("Tài khoản","Bạn đang xem ứng dụng với tư cách khách.",true);action(body,"Đăng nhập",true,()->requestLogin("profile"));action(body,"Tạo tài khoản sinh viên",false,()->{authReturn="profile";auth(true);});action(body,"Cấu hình địa chỉ máy chủ",false,this::serverDialog);action(body,"← Xem môn học",false,this::catalog);return;}
  screen="profile";shell("Tài khoản","Học tập được đồng bộ trên máy chủ.",true);LinearLayout card=card(this);JSONObject user=session.user();add(card,text(this,user.optString("name"),24,INK,true),0);add(card,text(this,user.optString("email"),15,MUTED,false),8);add(body,card,12);
  add(body,text(this,"Mã SV: "+user.optString("studentCode")+"  •  Lớp: "+user.optString("className"),14,MUTED,false),12);
  label("Kết nối backend");add(body,text(this,session.server(),15,MUTED,false),8);action(body,"Thay địa chỉ máy chủ",false,this::serverDialog);action(body,"Kiểm tra kết nối",false,()->call("GET","/health",null,r->message("Máy chủ hoạt động bình thường.",false)));
  action(body,"Sửa thông tin cá nhân",false,this::editProfile);action(body,"Đổi mật khẩu",false,this::changePassword);action(body,"Thông báo",false,this::notifications);
  action(body,"Đăng xuất",false,()->{persist();call("POST","/auth/logout",object(),r->{session.logout();exam=null;answers=new JSONObject();authReturn="catalog";pendingAttempt="";catalog();});});
  add(body,text(this,"Quiz HUBT 2.2\nỨng dụng Android Java • JLer",13,MUTED,false),24);
 }
 private void editProfile(){
  screen="profile";shell("Thông tin cá nhân","Dữ liệu dùng chung với tài khoản trên web.",false);JSONObject current=session.user();EditText name=input(this,"Họ tên",InputType.TYPE_CLASS_TEXT),email=input(this,"Email",InputType.TYPE_CLASS_TEXT|InputType.TYPE_TEXT_VARIATION_EMAIL_ADDRESS),className=input(this,"Lớp",InputType.TYPE_CLASS_TEXT);name.setText(current.optString("name"));email.setText(current.optString("email"));className.setText(current.optString("className"));add(body,name,10);add(body,email,12);add(body,className,12);
  action(body,"Lưu thông tin",true,()->call("PUT","/profile",object("name",name.getText().toString().trim(),"email",email.getText().toString().trim(),"className",className.getText().toString().trim()),r->{session.user((JSONObject)r);profile();message("Đã cập nhật thông tin.",false);}));action(body,"← Tài khoản",false,this::profile);
 }
 private void changePassword(){
  screen="profile";shell("Đổi mật khẩu","Đổi thành công sẽ đăng xuất mọi phiên cũ.",false);EditText old=input(this,"Mật khẩu hiện tại",InputType.TYPE_CLASS_TEXT|InputType.TYPE_TEXT_VARIATION_PASSWORD),next=input(this,"Mật khẩu mới",InputType.TYPE_CLASS_TEXT|InputType.TYPE_TEXT_VARIATION_PASSWORD);add(body,old,10);add(body,next,12);
  action(body,"Đổi mật khẩu",true,()->call("PUT","/profile",object("currentPassword",old.getText().toString(),"newPassword",next.getText().toString()),r->{session.logout();exam=null;auth(false);message("Đã đổi mật khẩu. Vui lòng đăng nhập lại.",false);}));action(body,"← Tài khoản",false,this::profile);
 }
 private void notifications(){
  screen="profile";shell("Thông báo","Nội dung được quản trị trên hệ thống JLer.",true);action(body,"Tải lại",false,this::notifications);call("GET","/notifications",null,r->{JSONArray entries=(JSONArray)r;if(entries.length()==0)add(body,text(this,"Chưa có thông báo mới.",16,MUTED,false),16);for(int i=0;i<entries.length();i++){
   JSONObject n=entries.optJSONObject(i);LinearLayout c=card(this);add(c,text(this,n.optString("tieu_de",n.optString("title")),19,INK,true),0);add(c,text(this,n.optString("noi_dung",n.optString("content",n.optString("description"))),15,MUTED,false),10);String image=n.optString("image",n.optString("anh",""));if(!image.isEmpty()){ImageView view=new ImageView(this);view.setAdjustViewBounds(true);view.setMaxHeight(dp(this,300));view.setVisibility(View.GONE);add(c,view,12);ImageLoader.load(view,imageUrl(image));}add(body,c,16);
  }});
 }
 private String imageUrl(String image){if(image.startsWith("http://")||image.startsWith("https://"))return image;if(image.startsWith("/api/"))return session.server()+image;return session.server()+"/media/"+image.replaceAll("^/+","");}
 @Override public void onBackPressed(){
  if("catalog".equals(screen)){schoolsPage();return;}
  if("auth".equals(screen)){cancelLogin();return;}
  if("exam".equals(screen)&&exam!=null&&!isComplete()){
   new AlertDialog.Builder(this).setTitle("Tạm rời bài thi?").setMessage("Đáp án được lưu trên máy, thời gian thi vẫn tiếp tục chạy. Bạn có thể vào Lịch sử để làm tiếp.").setPositiveButton("Tạm rời",(d,w)->{persist();saveAnswers();catalog();}).setNegativeButton("Làm tiếp",null).show();
  }else if("study".equals(screen))setup();else if("setup".equals(screen)||"history".equals(screen)||"profile".equals(screen)||"result".equals(screen))catalog();else super.onBackPressed();
 }
}
