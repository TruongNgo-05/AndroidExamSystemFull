package com.example.project_back.utils;
import java.util.*;
/** Pure scoring logic. A null choice means unanswered; never trust a client score. */
public final class Grading  {
    private Grading()  {
    }
    public record Stats(int total,int correct,int wrong,int unanswered,int pct)  {
    }
    public static Stats score(List<Integer> correctAnswers,List<Integer> choices)  {
        if(correctAnswers.size()!=choices.size()||choices.isEmpty())throw new IllegalArgumentException("Invalid attempt size");
        int correct=0,unanswered=0;
        for(int i=0;i<choices.size();i++)  {
            Integer p=choices.get(i);
            if(p==null)unanswered++;
            else  {
                if(p<0||p>3)throw new IllegalArgumentException("Invalid answer");
                if(p.equals(correctAnswers.get(i)))correct++;
            }
        }
        int total=choices.size();
        return new Stats(total,correct,total-unanswered-correct,unanswered,(int)Math.round(100.0*correct/total));
    }
}
