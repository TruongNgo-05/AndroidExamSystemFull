package vn.jler.quizhubt;
import android.content.Context;
import android.graphics.Color;
import android.graphics.Typeface;
import android.graphics.drawable.GradientDrawable;
import android.view.*;
import android.widget.*;
public final class Ui {
 public static final int BLUE=Color.rgb(40,85,219),INK=Color.rgb(22,35,66),MUTED=Color.rgb(103,116,142),BG=Color.rgb(243,246,252),GREEN=Color.rgb(22,132,99),RED=Color.rgb(190,49,67);
 public static int dp(Context c,int n){return (int)(n*c.getResources().getDisplayMetrics().density+0.5f);}
 public static GradientDrawable rounded(int color,int stroke,Context c){GradientDrawable g=new GradientDrawable();g.setColor(color);g.setCornerRadius(dp(c,18));if(stroke!=0)g.setStroke(dp(c,1),stroke);return g;}
 public static LinearLayout column(Context c){LinearLayout v=new LinearLayout(c);v.setOrientation(LinearLayout.VERTICAL);return v;}
 public static LinearLayout row(Context c){LinearLayout v=new LinearLayout(c);v.setGravity(Gravity.CENTER_VERTICAL);return v;}
 public static TextView text(Context c,String value,int size,int color,boolean bold){TextView t=new TextView(c);t.setText(value);t.setTextSize(size);t.setTextColor(color);t.setLineSpacing(dp(c,3),1);if(bold)t.setTypeface(Typeface.DEFAULT,Typeface.BOLD);return t;}
 public static void add(LinearLayout parent,View view,int top){LinearLayout.LayoutParams p=new LinearLayout.LayoutParams(-1,-2);p.topMargin=dp(parent.getContext(),top);parent.addView(view,p);}
 public static void weight(LinearLayout parent,View view){parent.addView(view,new LinearLayout.LayoutParams(0,-2,1));}
 public static Button button(Context c,String value,boolean primary){Button b=new Button(c);b.setText(value);b.setAllCaps(false);b.setTextSize(15);b.setTypeface(Typeface.DEFAULT,Typeface.BOLD);b.setTextColor(primary?Color.WHITE:BLUE);b.setMinHeight(dp(c,52));b.setPadding(dp(c,12),dp(c,8),dp(c,12),dp(c,8));b.setBackground(rounded(primary?BLUE:Color.WHITE,primary?0:Color.rgb(217,226,248),c));return b;}
 public static LinearLayout card(Context c){LinearLayout v=column(c);v.setPadding(dp(c,18),dp(c,18),dp(c,18),dp(c,18));v.setBackground(rounded(Color.WHITE,Color.rgb(228,234,245),c));return v;}
 public static EditText input(Context c,String hint,int type){EditText e=new EditText(c);e.setHint(hint);e.setInputType(type);e.setTextSize(16);e.setSingleLine(true);e.setPadding(dp(c,15),dp(c,12),dp(c,15),dp(c,12));e.setBackground(rounded(Color.WHITE,Color.rgb(211,221,240),c));e.setTextColor(INK);return e;}
}
