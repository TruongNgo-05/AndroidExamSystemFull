package com.example.project_back.service;

import com.example.project_back.exception.ApplicationException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import javax.imageio.ImageIO;
import java.io.IOException;
import java.nio.file.*;
import java.util.*;

@Service
public class ImageStorageService {
    private final Path root;
    public ImageStorageService(@Value("${app.upload-dir:./uploads/images}") String directory){root=Path.of(directory).toAbsolutePath().normalize();}
    public String save(MultipartFile file) throws IOException {
        if(file.isEmpty()||file.getSize()>30L*1024*1024)throw ApplicationException.bad("Chọn ảnh không rỗng, tối đa 30 MB.");
        String extension;
        try(var input=ImageIO.createImageInputStream(file.getInputStream())){
            var readers=ImageIO.getImageReaders(input);
            if(!readers.hasNext())throw ApplicationException.bad("Ảnh không hợp lệ. Hỗ trợ JPG, PNG và GIF.");
            var reader=readers.next();
            try{
                reader.setInput(input);
                extension=switch(reader.getFormatName().toLowerCase(Locale.ROOT)){case "jpeg","jpg"->"jpg";case "png"->"png";case "gif"->"gif";default->throw ApplicationException.bad("Hỗ trợ JPG, PNG và GIF.");};
                int width=reader.getWidth(0),height=reader.getHeight(0);
                if(width<1||height<1||width>12000||height>12000||(long)width*height>40000000)throw ApplicationException.bad("Ảnh quá lớn. Tối đa 40 triệu điểm ảnh, mỗi chiều 12.000 px.");
                if(reader.read(0)==null)throw ApplicationException.bad("Không đọc được ảnh.");
            } finally {reader.dispose();}
        } catch(javax.imageio.IIOException e){throw ApplicationException.bad("Ảnh hỏng hoặc không đọc được.");}
        Files.createDirectories(root);
        String name=UUID.randomUUID()+"."+extension;
        Path target=root.resolve(name);
        try(var input=file.getInputStream()){Files.copy(input,target);}
        catch(IOException e){Files.deleteIfExists(target);throw e;}
        return name;
    }
    public Path find(String name){
        if(!name.matches("[0-9a-f-]{36}\\.(jpg|png|gif)"))throw ApplicationException.missing();
        Path path=root.resolve(name).normalize();
        if(!path.getParent().equals(root)||!Files.isRegularFile(path))throw ApplicationException.missing();
        return path;
    }
}
