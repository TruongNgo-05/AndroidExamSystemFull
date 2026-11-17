package vn.jler.quizhubt;

import android.app.*;
import android.content.*;
import android.net.Uri;
import android.os.*;
import android.provider.MediaStore;
import android.util.Base64;
import android.view.*;
import android.webkit.*;
import android.widget.*;
import org.json.JSONObject;
import java.io.OutputStream;

/** Full Quiz-HUBT interface, served from the same origin as the Spring API. */
public final class WebActivity extends Activity {
 private WebView web;
 private ProgressBar progress;
 private SessionStore session;
 private ValueCallback<Uri[]> chooser;
 private WebMessagePort port;
 private byte[] pendingPdf;
 private static final int FILE=10, PDF=11;
 private int dp(int n){return Math.round(n*getResources().getDisplayMetrics().density);}
 private String origin(){Uri u=Uri.parse(session.server());return u.getScheme()+"://"+u.getAuthority();}
 private boolean own(String url){try{Uri u=Uri.parse(url);return origin().equals(u.getScheme()+"://"+u.getAuthority());}catch(Exception e){return false;}}
 @Override @android.annotation.SuppressLint("SetJavaScriptEnabled") public void onCreate(Bundle state){
  super.onCreate(state);session=new SessionStore(this);
  LinearLayout root=new LinearLayout(this);root.setOrientation(LinearLayout.VERTICAL);root.setBackgroundColor(0xfff6f8fc);
  root.setOnApplyWindowInsetsListener((v,insets)->{if(Build.VERSION.SDK_INT>=30){android.graphics.Insets i=insets.getInsets(WindowInsets.Type.systemBars()|WindowInsets.Type.displayCutout());v.setPadding(i.left,i.top,i.right,i.bottom);}else v.setPadding(insets.getSystemWindowInsetLeft(),insets.getSystemWindowInsetTop(),insets.getSystemWindowInsetRight(),insets.getSystemWindowInsetBottom());return insets;});
  LinearLayout bar=new LinearLayout(this);bar.setGravity(Gravity.CENTER_VERTICAL);bar.setPadding(dp(16),0,dp(8),0);
  TextView title=new TextView(this);title.setText("Quiz HUBT");title.setTextSize(17);title.setTextColor(0xff17428a);bar.addView(title,new LinearLayout.LayoutParams(0,dp(48),1));
  Button menu=new Button(this);menu.setText("⋮");bar.addView(menu,new LinearLayout.LayoutParams(dp(60),dp(48)));menu.setOnClickListener(v->{PopupMenu m=new PopupMenu(this,menu);m.getMenu().add("Tải lại");m.getMenu().add("Địa chỉ backend");m.getMenu().add("Mở giao diện Java native");m.getMenu().add("Mở trong trình duyệt");m.setOnMenuItemClickListener(i->{switch(i.getTitle().toString()){case "Tải lại":web.reload();break;case "Địa chỉ backend":settings();break;case "Mở giao diện Java native":startActivity(new Intent(this,MainActivity.class));break;default:external(web.getUrl());}return true;});m.show();});root.addView(bar);
  progress=new ProgressBar(this,null,android.R.attr.progressBarStyleHorizontal);root.addView(progress,new LinearLayout.LayoutParams(-1,dp(4)));
  web=new WebView(this);root.addView(web,new LinearLayout.LayoutParams(-1,0,1));setContentView(root);
  WebSettings s=web.getSettings();s.setJavaScriptEnabled(true);s.setDomStorageEnabled(true);s.setAllowFileAccess(false);s.setAllowContentAccess(false);s.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);s.setBuiltInZoomControls(false);
  CookieManager.getInstance().setAcceptCookie(true);CookieManager.getInstance().setAcceptThirdPartyCookies(web,false);
  web.setWebViewClient(new WebViewClient(){
   @Override public boolean shouldOverrideUrlLoading(WebView view,WebResourceRequest req){if(!req.isForMainFrame())return false;String url=req.getUrl().toString();if(own(url))return false;external(url);return true;}
   @Override public void onPageFinished(WebView v,String url){CookieManager.getInstance().flush();if(own(url))installPdfPort();}
   @Override public void onReceivedError(WebView v,WebResourceRequest req,WebResourceError e){if(req.isForMainFrame())new AlertDialog.Builder(WebActivity.this).setTitle("Chưa kết nối được backend").setMessage("Chạy backend trước. Máy ảo dùng http://10.0.2.2:8080; điện thoại thật dùng IP LAN của máy tính.").setPositiveButton("Cấu hình",(a,b)->settings()).setNegativeButton("Thử lại",(a,b)->web.reload()).show();}
  });
  web.setWebChromeClient(new WebChromeClient(){
   @Override public void onProgressChanged(WebView v,int n){progress.setProgress(n);progress.setVisibility(n==100?View.GONE:View.VISIBLE);}
   @Override public boolean onShowFileChooser(WebView v,ValueCallback<Uri[]> cb,FileChooserParams params){if(chooser!=null)chooser.onReceiveValue(null);chooser=cb;try{startActivityForResult(params.createIntent(),FILE);}catch(Exception e){chooser=null;cb.onReceiveValue(null);}return true;}
  });
  if(state==null||web.restoreState(state)==null)web.loadUrl(session.server()+"/");
 }
 private void external(String url){try{Uri u=Uri.parse(url);if("https".equals(u.getScheme())||"http".equals(u.getScheme())||"mailto".equals(u.getScheme())||"tel".equals(u.getScheme()))startActivity(new Intent(Intent.ACTION_VIEW,u));}catch(Exception e){Toast.makeText(this,"Không có ứng dụng mở liên kết này",Toast.LENGTH_SHORT).show();}}
 private void settings(){EditText input=new EditText(this);input.setSingleLine(true);input.setText(session.server());new AlertDialog.Builder(this).setTitle("Địa chỉ backend").setView(input).setPositiveButton("Lưu",(d,w)->{String value=input.getText().toString().trim().replaceAll("/+$","");Uri u=Uri.parse(value);if((!"http".equals(u.getScheme())&&!"https".equals(u.getScheme()))||u.getHost()==null||u.getUserInfo()!=null||!(u.getPath()==null||u.getPath().isEmpty())){Toast.makeText(this,"Nhập URL gốc, ví dụ http://10.0.2.2:8080",Toast.LENGTH_LONG).show();return;}session.server(value);web.loadUrl(value+"/");}).setNegativeButton("Hủy",null).show();}
 private void installPdfPort(){
  if(port!=null)port.close();WebMessagePort[] ports=web.createWebMessageChannel();port=ports[0];
  port.setWebMessageCallback(new WebMessagePort.WebMessageCallback(){@Override public void onMessage(WebMessagePort p,WebMessage message){if(!own(web.getUrl()))return;try{JSONObject obj=new JSONObject(message.getData());String data=obj.getString("data");if(!"pdf".equals(obj.optString("type"))||data.length()>28000000)throw new Exception();byte[] bytes=Base64.decode(data,Base64.DEFAULT);if(bytes.length<5||bytes[0]!='%'||bytes[1]!='P'||bytes[2]!='D'||bytes[3]!='F')throw new Exception();String name=obj.optString("name","QuizHUBT.pdf").replaceAll("[^\\p{L}\\p{N}._ -]","_");if(!name.endsWith(".pdf"))name+=".pdf";savePdf(bytes,name);}catch(Exception e){Toast.makeText(WebActivity.this,"Không lưu được PDF",Toast.LENGTH_LONG).show();}}});
  String js="(function(){window.addEventListener('message',function(e){if(e.data==='JLER_NATIVE_PORT_INIT'&&e.ports[0])window.__jlerNativePort=e.ports[0];});window.__JLerSavePdf=async function(blob,name){if(!window.__jlerNativePort)throw new Error('Kênh lưu PDF chưa sẵn sàng');return new Promise(function(resolve,reject){var r=new FileReader();r.onerror=reject;r.onload=function(){window.__jlerNativePort.postMessage(JSON.stringify({type:'pdf',name:name,data:r.result.split(',')[1]}));resolve();};r.readAsDataURL(blob);});};})();";
  web.evaluateJavascript(js,v->{if(own(web.getUrl()))web.postWebMessage(new WebMessage("JLER_NATIVE_PORT_INIT",new WebMessagePort[]{ports[1]}),Uri.parse(origin()));});
 }
 private void savePdf(byte[] bytes,String name)throws Exception{
  if(Build.VERSION.SDK_INT>=29){ContentValues cv=new ContentValues();cv.put(MediaStore.Downloads.DISPLAY_NAME,name);cv.put(MediaStore.Downloads.MIME_TYPE,"application/pdf");cv.put(MediaStore.Downloads.IS_PENDING,1);Uri uri=getContentResolver().insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI,cv);if(uri==null)throw new Exception();try{try(OutputStream out=getContentResolver().openOutputStream(uri)){if(out==null)throw new Exception();out.write(bytes);}cv.clear();cv.put(MediaStore.Downloads.IS_PENDING,0);getContentResolver().update(uri,cv,null,null);}catch(Exception e){getContentResolver().delete(uri,null,null);throw e;}Toast.makeText(this,"Đã lưu PDF vào Downloads",Toast.LENGTH_LONG).show();}
  else{pendingPdf=bytes;Intent i=new Intent(Intent.ACTION_CREATE_DOCUMENT).setType("application/pdf").addCategory(Intent.CATEGORY_OPENABLE).putExtra(Intent.EXTRA_TITLE,name);startActivityForResult(i,PDF);}
 }
 @Override protected void onActivityResult(int request,int result,Intent data){super.onActivityResult(request,result,data);if(request==FILE&&chooser!=null){chooser.onReceiveValue(WebChromeClient.FileChooserParams.parseResult(result,data));chooser=null;}if(request==PDF){if(result==RESULT_OK&&data!=null&&data.getData()!=null&&pendingPdf!=null){try(OutputStream out=getContentResolver().openOutputStream(data.getData())){if(out!=null)out.write(pendingPdf);}catch(Exception e){Toast.makeText(this,"Không lưu được PDF",Toast.LENGTH_LONG).show();}}pendingPdf=null;}}
 @Override public void onBackPressed(){if(web.canGoBack())web.goBack();else super.onBackPressed();}
 @Override protected void onSaveInstanceState(Bundle out){super.onSaveInstanceState(out);web.saveState(out);}
 @Override protected void onDestroy(){if(port!=null)port.close();if(chooser!=null)chooser.onReceiveValue(null);web.destroy();super.onDestroy();}
}
