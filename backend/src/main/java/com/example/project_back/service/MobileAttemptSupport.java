package com.example.project_back.service;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.node.*;
import java.time.Instant;
/** Metadata is stored inside the existing exam_attempts.snapshot JSON column. */
public final class MobileAttemptSupport {
 private MobileAttemptSupport(){}
 public static boolean enabled(ObjectNode snapshot){return snapshot.path("_mobile").isObject();}
 public static boolean expired(ObjectNode snapshot){return enabled(snapshot)&&!Instant.now().isBefore(Instant.parse(snapshot.path("_mobile").path("deadline").asText()));}
 public static ObjectNode request(ObjectNode snapshot,ObjectMapper mapper){
  ArrayNode array=mapper.createArrayNode();JsonNode saved=snapshot.path("_mobile").path("answers");
  for(int i=0;i<snapshot.path("questions").size();i++){
   ObjectNode entry=mapper.createObjectNode().put("index",i);entry.set("order",mapper.createArrayNode().add(0).add(1).add(2).add(3));
   JsonNode answer=saved.path(String.valueOf(i));if(answer.isIntegralNumber())entry.put("picked",answer.asInt());else entry.putNull("picked");array.add(entry);
  }
  return mapper.createObjectNode().set("answers",array);
 }
}
