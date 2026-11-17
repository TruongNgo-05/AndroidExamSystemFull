package com.example.project_back.service;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.SimpleMailMessage;
@Service public class ResetMailService {
 private final ObjectProvider<JavaMailSender> provider;private final String from;
 public ResetMailService(ObjectProvider<JavaMailSender> provider,@Value("${app.mail-from:}")String from){this.provider=provider;this.from=from;}
 public void sendOtp(String email,String otp){
  JavaMailSender sender=provider.getIfAvailable();if(sender==null||from.isBlank())throw new IllegalStateException("SMTP is not configured");
  SimpleMailMessage mail=new SimpleMailMessage();mail.setFrom(from);mail.setTo(email);mail.setSubject("[JLer] Mã OTP đặt lại mật khẩu");
  mail.setText("Xin chào,\n\nMã xác minh JLer của bạn: "+otp+"\n\nMã có hiệu lực 10 phút, chỉ dùng một lần. Không chia sẻ mã này cho bất kỳ ai.\nNếu bạn không yêu cầu đặt lại mật khẩu, hãy bỏ qua email này.\n\nJLer - Hệ thống thi trắc nghiệm");sender.send(mail);
 }
}
