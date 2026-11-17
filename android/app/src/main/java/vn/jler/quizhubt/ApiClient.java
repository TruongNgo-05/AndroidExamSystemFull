package vn.jler.quizhubt;
import org.json.*;
import java.net.*;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.*;
public final class ApiClient {
 public static final class ApiError extends Exception {public final int status;ApiError(int s,String message){super(message);status=s;}}
 private final SessionStore session;
 public ApiClient(SessionStore s){session=s;}
 /** Synchronize refresh rotation so a cookie is never consumed twice concurrently. */
 public synchronized Object request(String method,String path,JSONObject body)throws Exception{
  String route=path;
  if(path.equals("/me"))route="/auth/me";
  else if(path.startsWith("/subjects")||path.startsWith("/attempts")||path.startsWith("/ai/")||path.equals("/profile")||path.equals("/notifications"))route="/mobile"+path;
  try{return exchange(method,route,body);}
  catch(ApiError error){
   boolean canRefresh=error.status==401&&!route.equals("/auth/login")&&!route.equals("/auth/register")&&!route.equals("/auth/refresh")&&!route.startsWith("/auth/forgot")&&!route.startsWith("/auth/verify")&&!route.startsWith("/auth/reset");
   if(!canRefresh||session.refresh().isEmpty())throw error;
   JSONObject updated=(JSONObject)exchange("POST","/auth/refresh",object());session.login(updated);
   return exchange(method,route,body); // One refresh and one retry only.
  }
 }
 private Object exchange(String method,String route,JSONObject body)throws Exception{
  String origin=session.server();
  HttpURLConnection c=(HttpURLConnection)new URL(origin+"/api"+route).openConnection();
  c.setInstanceFollowRedirects(false);c.setConnectTimeout(12000);c.setReadTimeout(35000);c.setRequestMethod(method);c.setRequestProperty("Accept","application/json");c.setRequestProperty("X-Requested-With","JLer");
  String token=session.token();if(!token.isEmpty())c.setRequestProperty("Authorization","Bearer "+token);
  if(route.startsWith("/auth/")&&!session.refresh().isEmpty())c.setRequestProperty("Cookie",session.refresh());
  try{
   if(body!=null){c.setDoOutput(true);c.setRequestProperty("Content-Type","application/json;charset=UTF-8");try(OutputStream out=c.getOutputStream()){out.write(body.toString().getBytes(StandardCharsets.UTF_8));}}
   int code=c.getResponseCode();
   if(!origin.equals(session.server()))throw new IOException("Địa chỉ máy chủ đã thay đổi");
   for(Map.Entry<String,List<String>> h:c.getHeaderFields().entrySet())if("Set-Cookie".equalsIgnoreCase(h.getKey()))for(String value:h.getValue()){
    if(value.startsWith("jler_refresh=")){String pair=value.split(";",2)[0];session.refresh(pair.equals("jler_refresh=")?"":pair);}
   }
   InputStream in=code>=400?c.getErrorStream():c.getInputStream();String text="";
   if(in!=null)try(in;ByteArrayOutputStream bytes=new ByteArrayOutputStream()){
    byte[] buffer=new byte[8192];int n;while((n=in.read(buffer))!=-1){bytes.write(buffer,0,n);if(bytes.size()>20_000_000)throw new IOException("Phản hồi quá lớn");}text=bytes.toString("UTF-8");
   }
   if(code>=300){String message="Lỗi máy chủ ("+code+")";try{message=new JSONObject(text).optString("message",message);}catch(JSONException ignored){}throw new ApiError(code,message);}
   return text.startsWith("[")?new JSONArray(text):new JSONObject(text);
  }finally{c.disconnect();}
 }
 public static String encode(String s){try{return URLEncoder.encode(s,"UTF-8");}catch(java.io.UnsupportedEncodingException e){throw new IllegalStateException(e);}}
 public static JSONObject object(Object... pairs){JSONObject o=new JSONObject();try{for(int i=0;i<pairs.length;i+=2)o.put((String)pairs[i],pairs[i+1]);}catch(JSONException e){throw new IllegalArgumentException(e);}return o;}
}
