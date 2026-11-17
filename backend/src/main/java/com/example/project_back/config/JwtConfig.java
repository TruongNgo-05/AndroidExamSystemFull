package com.example.project_back.config;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import javax.crypto.spec.SecretKeySpec;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.*;
import org.springframework.security.oauth2.jwt.*;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import com.nimbusds.jose.jwk.source.ImmutableSecret;
@Configuration
public class JwtConfig {
 @Bean public SecretKeySpec jwtSecret(@Value("${app.jwt-secret}") String encoded){
  byte[] bytes;
  try{bytes=Base64.getDecoder().decode(encoded.trim());}
  catch(IllegalArgumentException e){bytes=encoded.trim().getBytes(StandardCharsets.UTF_8);}
  if(bytes.length<32)throw new IllegalArgumentException("Set JWT_SECRET/app.jwt-secret to at least 32 random bytes. Keep the existing valid secret to preserve sessions.");
  return new SecretKeySpec(bytes,"HmacSHA256");
 }
 @Bean public JwtEncoder jwtEncoder(SecretKeySpec key){return new NimbusJwtEncoder(new ImmutableSecret<>(key));}
 @Bean public JwtDecoder jwtDecoder(SecretKeySpec key){var d=NimbusJwtDecoder.withSecretKey(key).macAlgorithm(MacAlgorithm.HS256).build();d.setJwtValidator(JwtValidators.createDefaultWithIssuer("jler"));return d;}
}
