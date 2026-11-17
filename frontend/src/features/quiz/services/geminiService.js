import {api} from "../../../shared/services/api.js";
export async function explainQuestion(question,exam){
 const sameChoices=(a,b)=>Array.isArray(a)&&Array.isArray(b)&&JSON.stringify([...a].sort())===JSON.stringify([...b].sort());
 const index=exam?.questions?.findIndex(q=>q.q===question.q&&sameChoices(q.o,question.o)&&q.o[q.a]===question.o[question.a]);
 if(!exam?.id||index==null||index<0)throw new Error("Không xác định được câu hỏi gốc để giải thích.");
 const response=await api("/mobile/ai/explain",{method:"POST",body:{questionId:`${exam.id}__${index}`}});
 return response.explanation;
}
