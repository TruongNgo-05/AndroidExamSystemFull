package com.example.project_back.service.Impl;
import java.util.*;
import com.example.project_back.service.*;
import com.example.project_back.repository.*;
import com.example.project_back.entity.*;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.project_back.repository.CatalogRepository;
import com.example.project_back.dto.response.user.Account;
import com.example.project_back.exception.*;
import com.example.project_back.utils.*;
@Service public class KeyServiceImpl implements KeyService  {
    private final CatalogRepository store;
    private final KeyRedemptionRepository redemptions;
    private final UserRepository users;
    private final Json json;
    public KeyServiceImpl(CatalogRepository store,KeyRedemptionRepository redemptions,UserRepository users,Json json)  {
        this.store=store;
        this.redemptions=redemptions;
        this.users=users;
        this.json=json;
    }
    public static String normalize(String code)  {
        return code.replaceAll("[-\\s]","").toUpperCase(Locale.ROOT);
    }
    @Transactional public ObjectNode save(String id,ObjectNode patch)  {
        store.get("settings","key_mutex",true);
        ObjectNode b=id==null?json.object().put("id",UUID.randomUUID().toString()).put("usedCount",0).put("status","ACTIVE").put("createdAt",java.time.Instant.now().toString()):store.get("keys",id,true);
        for(String field:List.of("code","maxUses","description","status"))if(patch.has(field))b.set(field,patch.get(field));
        String code=Json.required(b,"code",100);
        if(!code.matches("[A-Za-z0-9 -]+"))throw ApplicationException.bad("KEY chỉ dùng chữ, số, dấu cách và -.");
        String normalized=normalize(code);
        if(normalized.isBlank())throw ApplicationException.bad("KEY không hợp lệ.");
        if(store.list("keys").stream().anyMatch(k->!k.path("id").asText().equals(b.path("id").asText())&&normalize(k.path("code").asText()).equals(normalized)))throw ApplicationException.conflict("KEY đã tồn tại.");
        if(!b.path("maxUses").isIntegralNumber()||b.path("maxUses").asInt()<1||b.path("maxUses").asInt()>1000000)throw ApplicationException.bad("Số lượt không hợp lệ.");
        String status=b.path("status").asText();
        if(!Set.of("ACTIVE","DISABLED","EXHAUSTED").contains(status))throw ApplicationException.bad("Trạng thái KEY không hợp lệ.");
        if(!status.equals("DISABLED"))b.put("status",b.path("usedCount").asInt()>=b.path("maxUses").asInt()?"EXHAUSTED":"ACTIVE");
        return id==null?store.create("keys",b):store.save("keys",id,b);
    }
    public boolean entitled(Account u)  {
        return redemptions.exists(u.id());
    }
    @Transactional public ObjectNode redeem(Account u,String code)  {
        users.lock(u.id());
        if(entitled(u))return json.object().put("valid",true).put("lifetime",true);
        ObjectNode candidate=store.list("keys").stream().filter(k->normalize(k.path("code").asText()).equals(normalize(code))).findFirst().orElseThrow(()->ApplicationException.bad("Mã KEY không hợp lệ."));
        ObjectNode k=store.get("keys",candidate.path("id").asText(),true);
        if(!normalize(k.path("code").asText()).equals(normalize(code))||!k.path("status").asText().equals("ACTIVE")||k.path("usedCount").asInt()>=k.path("maxUses").asInt())throw ApplicationException.bad("KEY đã khóa hoặc hết lượt.");
        k.put("usedCount",k.path("usedCount").asInt()+1);
        k.put("lastUsedAt",java.time.Instant.now().toString());
        if(k.path("usedCount").asInt()>=k.path("maxUses").asInt())k.put("status","EXHAUSTED");
        store.save("keys",k.path("id").asText(),k);
        redemptions.create(u.id(),k.path("id").asText());
        return json.object().put("valid",true).put("lifetime",true).put("remainingUses",k.path("maxUses").asInt()-k.path("usedCount").asInt());
    }
    public void delete(String id)  {
        store.delete("keys",id);
    }
}
