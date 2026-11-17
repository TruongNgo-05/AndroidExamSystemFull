package com.example.project_back.config;
import java.nio.file.Path;
import org.springframework.context.annotation.Configuration;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.servlet.config.annotation.*;
@Configuration
public class MobileMediaConfig implements WebMvcConfigurer {
 @Value("${MOBILE_MEDIA_DIRECTORY:./media/}") String directory;
 @Override public void addResourceHandlers(ResourceHandlerRegistry registry){
  String uri=Path.of(directory).toAbsolutePath().normalize().toUri().toString();
  registry.addResourceHandler("/media/**").addResourceLocations(uri.endsWith("/")?uri:uri+"/");
 }
}
