package vn.jler.quizhubt;
import android.graphics.*;
import android.os.*;
import android.widget.ImageView;
import android.view.View;
import java.net.*;
import java.io.*;
import java.util.concurrent.*;
final class ImageLoader {
 private static final ExecutorService workers=Executors.newFixedThreadPool(2);
 static void load(ImageView target,String source){
  target.setTag(source);
  workers.execute(()->{try{
   HttpURLConnection c=(HttpURLConnection)new URL(source).openConnection();c.setConnectTimeout(8000);c.setReadTimeout(8000);
   Bitmap bitmap;try{if(c.getResponseCode()!=200)throw new IOException();try(InputStream in=c.getInputStream();ByteArrayOutputStream b=new ByteArrayOutputStream()){
    byte[] buf=new byte[8192];int n;while((n=in.read(buf))!=-1){b.write(buf,0,n);if(b.size()>6_000_000)throw new IOException();}
    byte[] bytes=b.toByteArray();BitmapFactory.Options opts=new BitmapFactory.Options();opts.inJustDecodeBounds=true;BitmapFactory.decodeByteArray(bytes,0,bytes.length,opts);opts.inSampleSize=1;while(opts.outWidth/opts.inSampleSize>1800||opts.outHeight/opts.inSampleSize>1800)opts.inSampleSize*=2;opts.inJustDecodeBounds=false;bitmap=BitmapFactory.decodeByteArray(bytes,0,bytes.length,opts);
   }}finally{c.disconnect();}
   new Handler(Looper.getMainLooper()).post(()->{if(source.equals(target.getTag())&&bitmap!=null){target.setImageBitmap(bitmap);target.setVisibility(View.VISIBLE);}});
  }catch(Exception ignored){/* Text placeholder remains visible when source image is missing. */}});
 }
}
