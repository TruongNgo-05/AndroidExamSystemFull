package vn.jler.quizhubt;
import android.content.Context;
import android.content.SharedPreferences;
import android.security.keystore.KeyGenParameterSpec;
import android.security.keystore.KeyProperties;
import android.util.Base64;
import javax.crypto.*;
import javax.crypto.spec.GCMParameterSpec;
import java.security.KeyStore;
import java.nio.charset.StandardCharsets;
import org.json.JSONObject;
/** Uses the legacy access JWT and HttpOnly refresh cookie, encrypted at rest. */
@android.annotation.SuppressLint("ApplySharedPref")
public final class SessionStore {
 private final SharedPreferences prefs;
 public SessionStore(Context c){prefs=c.getSharedPreferences("jler_legacy_session",Context.MODE_PRIVATE);}
 public String server(){return prefs.getString("server","http://10.0.2.2:8080");}
 public void server(String url){logout();prefs.edit().putString("server",url.replaceAll("/+$","")).commit();}
 private SecretKey key()throws Exception{
  KeyStore ks=KeyStore.getInstance("AndroidKeyStore");ks.load(null);
  if(!ks.containsAlias("quizhubt_legacy")){KeyGenerator g=KeyGenerator.getInstance(KeyProperties.KEY_ALGORITHM_AES,"AndroidKeyStore");g.init(new KeyGenParameterSpec.Builder("quizhubt_legacy",KeyProperties.PURPOSE_ENCRYPT|KeyProperties.PURPOSE_DECRYPT).setBlockModes(KeyProperties.BLOCK_MODE_GCM).setEncryptionPaddings(KeyProperties.ENCRYPTION_PADDING_NONE).build());g.generateKey();}
  return (SecretKey)ks.getKey("quizhubt_legacy",null);
 }
 private synchronized String secret(String name){try{
  String raw=prefs.getString(name,"");if(raw.isEmpty())return "";String[] parts=raw.split(":");Cipher c=Cipher.getInstance("AES/GCM/NoPadding");c.init(Cipher.DECRYPT_MODE,key(),new GCMParameterSpec(128,Base64.decode(parts[0],Base64.NO_WRAP)));return new String(c.doFinal(Base64.decode(parts[1],Base64.NO_WRAP)),StandardCharsets.UTF_8);
 }catch(Exception e){logout();return "";}}
 private synchronized void secret(String name,String value)throws Exception{
  Cipher c=Cipher.getInstance("AES/GCM/NoPadding");c.init(Cipher.ENCRYPT_MODE,key());String encrypted=Base64.encodeToString(c.getIV(),Base64.NO_WRAP)+":"+Base64.encodeToString(c.doFinal(value.getBytes(StandardCharsets.UTF_8)),Base64.NO_WRAP);prefs.edit().putString(name,encrypted).commit();
 }
 public String token(){return secret("access");}
 public String refresh(){return secret("refresh");}
 public void refresh(String cookie)throws Exception{if(cookie.isEmpty())prefs.edit().remove("refresh").commit();else secret("refresh",cookie);}
 public synchronized void login(JSONObject response)throws Exception{secret("access",response.getString("accessToken"));user(response.getJSONObject("user"));prefs.edit().putString("expiresAt",response.optString("expiresAt")).commit();}
 public void user(JSONObject user){prefs.edit().putString("user",user.toString()).commit();}
 public JSONObject user(){try{return new JSONObject(prefs.getString("user","{}"));}catch(Exception e){return new JSONObject();}}
 public synchronized void logout(){prefs.edit().remove("access").remove("refresh").remove("user").remove("expiresAt").remove("active").remove("draft").commit();}
 public String active(){return prefs.getString("active","");}
 public void active(String id){prefs.edit().putString("active",id).commit();}
 public void draft(String id,JSONObject answers){prefs.edit().putString("active",id).putString("draft",answers.toString()).commit();}
 public JSONObject draft(String id){try{return active().equals(id)?new JSONObject(prefs.getString("draft","{}")):new JSONObject();}catch(Exception e){return new JSONObject();}}
 public void completed(String id){if(active().equals(id))prefs.edit().remove("active").remove("draft").commit();}
}
