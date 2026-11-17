import {api} from "../../../shared/services/api.js";
export const DOWNLOAD_KEY_LENGTH=8;
export const isDownloadKeyFormat=(key)=>typeof key==="string" && /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*-)[A-Za-z0-9-]{8}$/.test(key);
export async function verifyDownloadKey(key){
  if(!isDownloadKeyFormat(key))return false;
  const result=await api("/keys/redeem",{method:"POST",body:{code:key}});
  return result.valid===true;
}
