package com.example.project_back.mapper;
import org.springframework.stereotype.Component;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
@Component public class RequestMapper  {
    private final ObjectMapper mapper;
    public RequestMapper(ObjectMapper mapper)  {
        this.mapper=mapper;
    }
    public ObjectNode toJson(Object request)  {
        return mapper.valueToTree(request);
    }
}
