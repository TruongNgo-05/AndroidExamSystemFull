export async function savePdfDocument(doc,filename){
 if(typeof window!=="undefined"&&typeof window.__JLerSavePdf==="function"){
  await window.__JLerSavePdf(doc.output("blob"),filename);return;
 }
 doc.save(filename);
}
