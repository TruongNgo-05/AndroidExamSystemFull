package com.example.project_back.service.Impl;
import java.util.*;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import com.example.project_back.service.*;
import com.example.project_back.repository.*;
import com.example.project_back.dto.response.user.Account;
import com.example.project_back.exception.*;
import com.example.project_back.utils.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service public class BootstrapServiceImpl implements BootstrapService  {
    private final CatalogService catalog;
    private final CatalogRepository store;
    private final AuthenticationService auth;
    private final AttemptService attempts;
    private final KeyService keys;
    private final SubmissionService submissions;
    private final NotificationReadRepository reads;
    public BootstrapServiceImpl(CatalogService catalog,CatalogRepository store,AuthenticationService auth,AttemptService attempts,KeyService keys,SubmissionService submissions,NotificationReadRepository reads)  {
        this.catalog=catalog;
        this.store=store;
        this.auth=auth;
        this.attempts=attempts;
        this.keys=keys;
        this.submissions=submissions;
        this.reads=reads;
    }
    public Object publicCatalog()  {
        return Map.of("majors",catalog.list("majors"),"exams",catalog.exams("",""),"notifications",store.list("notifications"),"schools",catalog.list("schools"),"topics",catalog.list("topics"),"pages",catalog.list("pages"));
    }
    public Object bootstrap(Account u)  {
        Map<String,Object> b=new HashMap<>();
        b.put("user",u);
        b.put("exams",catalog.exams("",""));
        b.put("majors",catalog.list("majors"));
        for(String kind:List.of("schools","topics","pages"))b.put(kind,catalog.list(kind));
        b.put("notifications",store.list("notifications"));
        b.put("results",attempts.history(u));
        b.put("submissions",submissions.list(u));
        b.put("users",u.role().equals("ADMIN")?auth.list():List.of(u));
        b.put("keys",u.role().equals("ADMIN")?store.list("keys"):List.of());
        b.put("entitled",keys.entitled(u));
        b.put("readIds",reads.list(u.id()));
        return b;
    }
    @Transactional public Object read(Account u,List<String> ids)  {
        if(ids.size()>10000)throw ApplicationException.bad("Quá nhiều thông báo.");
        for(String id:ids)  {
            if(!store.exists("notifications",id))continue;
            reads.read(u.id(),id);
        }
        return Map.of("success",true);
    }
}
