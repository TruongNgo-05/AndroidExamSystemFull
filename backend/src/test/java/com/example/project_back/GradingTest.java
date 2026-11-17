package com.example.project_back;
import java.util.*;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import com.example.project_back.utils.Grading;
class GradingTest  {
    @Test void countsWrongAndUnanswered()  {
        var s=Grading.score(List.of(0,1,2,3),Arrays.asList(0,2,null,3));
        assertEquals(new Grading.Stats(4,2,1,1,50),s);
    }
    @Test void roundsLikeFrontend()  {
        assertEquals(67,Grading.score(List.of(0,1,2),List.of(0,1,0)).pct());
    }
    @Test void rejectsInvalidAnswers()  {
        assertThrows(IllegalArgumentException.class,()->Grading.score(List.of(0),List.of(4)));
    }
    @Test void rejectsMismatchedLength()  {
        assertThrows(IllegalArgumentException.class,()->Grading.score(List.of(0),List.of()));
    }
}
