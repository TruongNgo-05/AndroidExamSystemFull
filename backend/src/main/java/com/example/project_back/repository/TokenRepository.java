package com.example.project_back.repository;
import com.example.project_back.entity.*;
import com.example.project_back.repository.jpa.*;
import com.example.project_back.dto.response.user.Account;
import com.example.project_back.exception.ApplicationException;
import com.example.project_back.mapper.UserMapper;
import java.util.*;
import java.time.*;
import java.nio.charset.StandardCharsets;
import java.security.*;
import jakarta.persistence.*;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.oauth2.jwt.*;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
@Repository @Transactional(noRollbackFor=ApplicationException.class)
public class TokenRepository {
    private final LoginSessionJpaRepository sessions;
    private final RefreshTokenJpaRepository refreshes;
    private final UserRepository users;
    private final JwtEncoder encoder;
    private final JwtDecoder decoder;
    private final long accessSeconds,refreshSeconds;
    @PersistenceContext private EntityManager em;
    public TokenRepository(LoginSessionJpaRepository sessions,RefreshTokenJpaRepository refreshes,UserRepository users,JwtEncoder encoder,JwtDecoder decoder,
            @Value("${app.access-seconds:900}") long accessSeconds,@Value("${app.refresh-seconds:604800}") long refreshSeconds){
        this.sessions=sessions;this.refreshes=refreshes;this.users=users;this.encoder=encoder;this.decoder=decoder;
        this.accessSeconds=accessSeconds;this.refreshSeconds=refreshSeconds;
    }
    static String hash(String raw){
        try{return HexFormat.of().formatHex(MessageDigest.getInstance("SHA-256").digest(raw.getBytes(StandardCharsets.UTF_8)));}
        catch(NoSuchAlgorithmException e){throw new IllegalStateException(e);}
    }
    private ApplicationException denied(){return new ApplicationException(HttpStatus.UNAUTHORIZED,"Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");}
    public Map<String,Object> issue(Account user){
        // Serialize logins for this account across backend instances. Failed login never reaches here.
        users.lock(user.id());
        sessions.replaceActiveSessions(user.id());
        var session=new LoginSession(UUID.randomUUID().toString(),user.id(),Instant.now().plusSeconds(refreshSeconds));
        em.persist(session);return pair(session,user);
    }
    private Map<String,Object> pair(LoginSession session,Account user){
        byte[] bytes=new byte[32];new SecureRandom().nextBytes(bytes);
        String refresh=Base64.getUrlEncoder().withoutPadding().encodeToString(bytes);
        em.persist(new RefreshToken(hash(refresh),session.id));
        Instant now=Instant.now(),expires=now.plusSeconds(accessSeconds);
        var claims=JwtClaimsSet.builder().issuer("jler").subject(user.id()).audience(List.of("jler-web"))
            .issuedAt(now).expiresAt(expires).id(UUID.randomUUID().toString())
            .claim("sid",session.id).claim("token_use","access").build();
        String access=encoder.encode(JwtEncoderParameters.from(JwsHeader.with(MacAlgorithm.HS256).build(),claims)).getTokenValue();
        return new HashMap<>(Map.of("user",user,"accessToken",access,"expiresAt",expires.toString(),
            "refreshToken",refresh,"refreshExpiresAt",session.expiresAt.toString()));
    }
    public Map<String,Object> refresh(String raw){
        if(raw==null||raw.length()>100)throw denied();
        var token=refreshes.findById(hash(raw)).orElseThrow(this::denied);
        var session=sessions.lock(token.sessionId).orElseThrow(this::denied);
        // Refresh after obtaining the family lock: another request may have consumed this token.
        em.refresh(token);
        if(session.revoked&&"REPLACED".equals(session.revokedReason))throw new ApplicationException(HttpStatus.UNAUTHORIZED,"Tài khoản đã được đăng nhập trên thiết bị khác. Phiên trên thiết bị này đã bị đăng xuất.");
        if(token.used){session.revoked=true;throw denied();}
        if(session.revoked||!session.expiresAt.isAfter(Instant.now()))throw denied();
        Account user=users.find(session.userId).map(UserMapper::response).orElse(null);
        if(user==null){session.revoked=true;throw denied();}
        if(!user.status().equals("active")){session.revoked=true;throw denied();}
        token.used=true;return pair(session,user);
    }
    public Optional<User> resolve(String raw){
        try{
            Jwt jwt=decoder.decode(raw);
            if(!"access".equals(jwt.getClaimAsString("token_use"))||!jwt.getAudience().contains("jler-web"))return Optional.empty();
            var session=sessions.findById(jwt.getClaimAsString("sid")).orElse(null);
            if(session==null||session.revoked||!session.expiresAt.isAfter(Instant.now())||!session.userId.equals(jwt.getSubject()))return Optional.empty();
            User user=users.find(session.userId).orElse(null);
            if(user==null)return Optional.empty();
            return "active".equals(user.status())?Optional.of(user):Optional.empty();
        }catch(JwtException|ApplicationException|IllegalArgumentException e){return Optional.empty();}
    }
    public void deleteByUser(String id){sessions.revokeUser(id);}
    public void logout(String refresh,String access){
        String sid=null;
        if(refresh!=null && refresh.length()<=100){var t=refreshes.findById(hash(refresh)).orElse(null);if(t!=null)sid=t.sessionId;}
        if(sid==null && access!=null){try{sid=decoder.decode(access).getClaimAsString("sid");}catch(JwtException e){return;}}
        if(sid!=null)sessions.lock(sid).ifPresent(s->s.revoked=true);
    }
}
