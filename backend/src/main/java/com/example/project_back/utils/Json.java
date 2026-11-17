package com.example.project_back.utils;
import com.example.project_back.exception.ApplicationException;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import org.springframework.stereotype.Component;
@Component public class Json  {
    private final ObjectMapper mapper;
    public Json(ObjectMapper mapper)  {
        this.mapper=mapper;
    }
    public ObjectNode object()  {
        return mapper.createObjectNode();
    }
    public ArrayNode array()  {
        return mapper.createArrayNode();
    }
    public JsonNode read(String value)  {
        try  {
            return mapper.readTree(value);
        }
        catch(Exception e)  {
            throw new IllegalStateException("Invalid stored JSON",e);
        }
    }
    public String write(Object value)  {
        try  {
            return mapper.writeValueAsString(value);
        }
        catch(Exception e)  {
            throw new IllegalArgumentException("Invalid JSON",e);
        }
    }
    public static String text(JsonNode n,String key)  {
        return n.path(key).asText("");
    }
    public static String required(JsonNode n,String key,int max)  {
        String v=text(n,key).trim();
        if(v.isEmpty()||v.length()>max)throw ApplicationException.bad("Trường "+key+" không hợp lệ.");
        return v;
    }
}
