package com.example.project_back.service.Impl;
import com.example.project_back.dto.response.user.Account;
import java.util.*;
import com.example.project_back.constant.Role;
import com.example.project_back.service.*;
import com.example.project_back.repository.*;
import com.example.project_back.entity.*;
import com.example.project_back.mapper.UserMapper;
import java.nio.charset.StandardCharsets;
import java.security.*;
import java.time.Instant;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import com.example.project_back.exception.*;
import com.example.project_back.utils.*;
@Service public class AuthenticationServiceImpl implements AuthenticationService  {
    private final UserRepository users;
    private final CatalogRepository catalog;
    private final TokenRepository tokens;
    private final PasswordEncoder encoder;
    public AuthenticationServiceImpl(UserRepository users,TokenRepository tokens,PasswordEncoder encoder,CatalogRepository catalog)  {
        this.users=users;
        this.catalog=catalog;
        this.tokens=tokens;
        this.encoder=encoder;
    }
    public Account get(String id)  {
        return UserMapper.response(users.get(id));
    }
    public List<Account> list()  {
        return users.all().stream().map(UserMapper::response).toList();
    }
    public static String hash(String token)  {
        try  {
            return HexFormat.of().formatHex(MessageDigest.getInstance("SHA-256").digest(token.getBytes(StandardCharsets.UTF_8)));
        }
        catch(NoSuchAlgorithmException e)  {
            throw new IllegalStateException(e);
        }
    }
    public Account resolve(String token){
        if(token==null||token.length()>4096)return null;
        return tokens.resolve(token).map(UserMapper::response).orElse(null);
    }
    private Map<String,Object> session(Account u){return tokens.issue(u);}
    @Transactional public Map<String,Object> login(JsonNode body)  {
        String login=Json.text(body,"studentCode").trim();
        if(login.isEmpty())login=Json.text(body,"email").trim();
        String role=Json.text(body,"role");
        var found=users.byLogin(login).stream().map(UserMapper::response).toList();
        Account u=found.stream().filter(a->role.isEmpty()||a.role().equals(role)).findFirst().orElse(null);
        String pwd=u==null?"$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy":users.get(u.id()).passwordHash();
        if(!encoder.matches(Json.text(body,"password"),pwd)||u==null||!u.status().equals("active"))throw new ApplicationException(org.springframework.http.HttpStatus.UNAUTHORIZED,"Thông tin đăng nhập không đúng hoặc tài khoản bị khóa.");
        return session(u);
    }
    @Transactional public Map<String,Object> register(JsonNode body)  {
        return session(create(body,false));
    }
    public static void checkPassword(String password)  {
        if(password.length()<6||password.getBytes(StandardCharsets.UTF_8).length>72)throw ApplicationException.bad("Mật khẩu cần từ 6 ký tự và tối đa 72 byte UTF-8.");
    }
    private String school(String id){
        id=id==null?"":id.trim();
        if(id.length()>128||(!id.isEmpty()&&!catalog.exists("schools",id)))throw ApplicationException.bad("Trường học không tồn tại. Vui lòng chọn lại.");
        return id;
    }
    @Transactional public Account create(JsonNode b,boolean admin)  {
        String name=Json.required(b,"name",200),email=Json.required(b,"email",254).toLowerCase(Locale.ROOT),password=Json.text(b,"password");
        checkPassword(password);
        if(!email.matches("[^\\s@]+@[^\\s@]+\\.[^\\s@]+"))throw ApplicationException.bad("Email không hợp lệ.");
        String role=admin?Json.text(b,"role"):"STUDENT";
        if(role.isBlank())role="STUDENT";
        if(!Role.supports(role))throw ApplicationException.bad("Role không hợp lệ.");
        String code=Json.text(b,"studentCode").trim();
        if(role.equals("STUDENT")&&code.isEmpty())throw ApplicationException.bad("Thiếu mã sinh viên.");
        if(code.length()>64)throw ApplicationException.bad("Mã sinh viên quá dài.");
        String status=admin?b.path("status").asText("active"):"active";
        if(!Set.of("active","blocked").contains(status))throw ApplicationException.bad("Trạng thái không hợp lệ.");
        users.checkUnique(email,code,"");
        if(Json.text(b,"className").length()>100)throw ApplicationException.bad("Tên lớp tối đa 100 ký tự.");
        String id=UUID.randomUUID().toString();
        User created=new User(id,name,email,role,code,Json.text(b,"className"),status,encoder.encode(password));
        created.schoolId(school(Json.text(b,"schoolId")));
        users.create(created);
        return get(id);
    }
    @Transactional public Account update(String id,JsonNode b,Account actor)  {
        Account old=get(id);
        boolean admin=actor.role().equals("ADMIN");
        if(!admin&&!actor.id().equals(id))throw ApplicationException.missing();
        String role=admin?b.path("role").asText(old.role()):old.role();
        String status=admin?b.path("status").asText(old.status()):old.status();
        if(!Role.supports(role)||!Set.of("active","blocked").contains(status))throw ApplicationException.bad("Role/trạng thái không hợp lệ.");
        if(id.equals(actor.id())&&(!role.equals(old.role())||!status.equals("active")))throw ApplicationException.bad("Không thể tự đổi quyền hoặc khóa tài khoản hiện tại.");
        String email=b.path("email").asText(old.email()).trim().toLowerCase(Locale.ROOT);
        if(!email.matches("[^\\s@]+@[^\\s@]+\\.[^\\s@]+"))throw ApplicationException.bad("Email không hợp lệ.");
        String name=b.path("name").asText(old.name()).trim();
        if(name.isEmpty()||name.length()>200)throw ApplicationException.bad("Tên không hợp lệ.");
        String code=admin?b.path("studentCode").asText(old.studentCode()).trim():old.studentCode();
        if(role.equals("STUDENT")&&code.isEmpty())throw ApplicationException.bad("Thiếu mã sinh viên.");
        if(code.length()>64||b.path("className").asText(old.className()).length()>100)throw ApplicationException.bad("Mã sinh viên tối đa 64 ký tự; tên lớp tối đa 100 ký tự.");
        users.checkUnique(email,code,id);
        String password=admin?Json.text(b,"password"):Json.text(b,"newPassword");
        if(!password.isEmpty())  {
            checkPassword(password);
            String oldHash=users.get(id).passwordHash();
            if(!admin&&!encoder.matches(Json.text(b,"currentPassword"),oldHash))throw ApplicationException.bad("Mật khẩu hiện tại không đúng.");
            users.password(id,encoder.encode(password));
            tokens.deleteByUser(id);
        }
        if(!role.equals(old.role())||!status.equals(old.status()))tokens.deleteByUser(id);
        if(email.length()>254)throw ApplicationException.bad("Email tối đa 254 ký tự.");
        users.get(id).schoolId(school(b.path("schoolId").asText(old.schoolId())));
        users.update(id,name,email,code,b.path("className").asText(old.className()),role,status);
        return get(id);
    }
    @Transactional public void delete(String id,Account actor)  {
        if(id.equals(actor.id()))throw ApplicationException.bad("Không thể xóa tài khoản hiện tại.");
        get(id);
        users.delete(id);
        tokens.deleteByUser(id);
    }
    public void logout(String token){tokens.logout(null,token);}
}
