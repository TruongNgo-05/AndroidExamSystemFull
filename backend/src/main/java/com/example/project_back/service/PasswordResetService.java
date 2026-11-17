package com.example.project_back.service;
import com.example.project_back.entity.*;
import com.example.project_back.repository.*;
import com.example.project_back.repository.jpa.PasswordResetJpaRepository;
import com.example.project_back.exception.ApplicationException;
import com.example.project_back.service.Impl.AuthenticationServiceImpl;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.http.HttpStatus;
import java.security.*;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.util.*;
@Service @Transactional(noRollbackFor=ApplicationException.class)
public class PasswordResetService {
 private final PasswordResetJpaRepository resets;private final UserRepository users;private final TokenRepository tokens;
 private final CatalogRepository catalog;private final ResetMailService mail;private final PasswordEncoder encoder;private final String pepper;private final boolean enabled;
 private final SecureRandom random=new SecureRandom();
 public PasswordResetService(PasswordResetJpaRepository resets,UserRepository users,TokenRepository tokens,CatalogRepository catalog,ResetMailService mail,PasswordEncoder encoder,@Value("${app.jwt-secret}")String pepper,@Value("${app.mail-enabled:false}")boolean enabled){this.resets=resets;this.users=users;this.tokens=tokens;this.catalog=catalog;this.mail=mail;this.encoder=encoder;this.pepper=pepper;this.enabled=enabled;}
 private String hash(String value){try{return HexFormat.of().formatHex(MessageDigest.getInstance("SHA-256").digest((pepper+":"+value).getBytes(StandardCharsets.UTF_8)));}catch(NoSuchAlgorithmException e){throw new IllegalStateException(e);}}
 private boolean same(String a,String b){return a!=null&&b!=null&&MessageDigest.isEqual(a.getBytes(StandardCharsets.UTF_8),b.getBytes(StandardCharsets.UTF_8));}
 public Map<String,Object> request(String email,String ip){
  if(!enabled)throw new ApplicationException(HttpStatus.SERVICE_UNAVAILABLE,"Chức năng gửi email chưa được cấu hình. Vui lòng liên hệ quản trị viên.");
  String emailHash=hash(email.toLowerCase(Locale.ROOT)),ipHash=hash(ip);Instant now=Instant.now();
  // Serialize issuance/rate-limit checks across instances; no dependency on client-supplied forwarded IP.
  catalog.get("settings","password_reset_mutex",true);
  if(resets.countByEmailHashAndCreatedAtAfter(emailHash,now.minusSeconds(60))>0||resets.countByEmailHashAndCreatedAtAfter(emailHash,now.minusSeconds(3600))>=5||resets.countByIpHashAndCreatedAtAfter(ipHash,now.minusSeconds(3600))>=20)throw new ApplicationException(HttpStatus.TOO_MANY_REQUESTS,"Bạn yêu cầu quá nhiều lần. Chờ ít nhất 60 giây rồi thử lại.");
  var user=users.byLogin(email.toLowerCase(Locale.ROOT)).stream().filter(u->u.email().equalsIgnoreCase(email)&&u.status().equals("active")).findFirst();
  String id=UUID.randomUUID().toString(),otp=String.format(Locale.ROOT,"%06d",random.nextInt(1000000));
  resets.invalidateEmail(emailHash);
  var challenge=new PasswordResetChallenge(id,user.map(User::id).orElse(null),emailHash,ipHash,hash(id+":"+otp),now);resets.saveAndFlush(challenge);
  if(user.isPresent())try{mail.sendOtp(user.get().email(),otp);}catch(Exception e){challenge.consume();throw new ApplicationException(HttpStatus.SERVICE_UNAVAILABLE,"Chưa gửi được email. Hãy kiểm tra cấu hình SMTP hoặc thử lại sau.");}
  return Map.of("requestId",id,"expiresIn",600,"message","Nếu email thuộc tài khoản đang hoạt động, JLer đã gửi mã OTP. Kiểm tra cả thư mục Spam.");
 }
 private PasswordResetChallenge get(String id){return resets.lock(id).orElseThrow(()->ApplicationException.bad("Mã xác minh không hợp lệ hoặc đã hết hạn."));}
 public Map<String,String> verify(String id,String otp){
  var c=get(id);if(!c.canVerify())throw ApplicationException.bad("OTP đã hết hạn, đã sử dụng hoặc nhập sai quá 5 lần. Hãy yêu cầu mã mới.");
  if(!same(c.otpHash(),hash(id+":"+otp))||c.userId()==null){c.failed();throw ApplicationException.bad("OTP không đúng. Vui lòng kiểm tra lại email.");}
  byte[] bytes=new byte[32];random.nextBytes(bytes);String token=Base64.getUrlEncoder().withoutPadding().encodeToString(bytes);c.verified(hash(token));return Map.of("resetToken",token);
 }
 public void reset(String id,String token,String password){
  AuthenticationServiceImpl.checkPassword(password);var c=get(id);
  if(!c.available()||c.resetHash()==null||!same(c.resetHash(),hash(token)))throw ApplicationException.bad("Phiên xác minh không hợp lệ hoặc đã hết hạn.");
  var user=users.find(c.userId()).orElseThrow(()->ApplicationException.bad("Tài khoản không khả dụng."));
  if(!user.status().equals("active"))throw ApplicationException.bad("Tài khoản không khả dụng.");
  users.password(user.id(),encoder.encode(password));tokens.deleteByUser(user.id());c.consume();
 }
}
