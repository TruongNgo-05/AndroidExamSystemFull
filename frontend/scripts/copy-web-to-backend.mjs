import {cpSync,rmSync,mkdirSync,existsSync} from "node:fs";
const source=new URL("../dist/",import.meta.url),target=new URL("../../backend/src/main/resources/static/",import.meta.url);
if(!existsSync(source))throw new Error("Build frontend first.");
rmSync(target,{recursive:true,force:true});mkdirSync(target,{recursive:true});cpSync(source,target,{recursive:true});
console.log("Copied built Quiz-HUBT UI to backend static resources.");
