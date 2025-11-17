import { get,getJSON,post,postJSON,put,putJSON,del,delJSON} from "../request"

const host=process.env.NEXT_PUBLIC_API_DOMAIN;
const basePath="/api/upload/files";

export const getuploadfiles=()=>get(host+basePath);
export const getuploadfile=(id:number)=>get(host+basePath+`/${id}`);
export const postuploadfiles=(data:any)=>post(host+`api/upload`,data);
export const postuploadfile=(data:any,id:number)=>post(host+`api/upload?id=${id}`,data);

export const putuploadfile=(data:any)=>put(host+basePath,data);
export const deluploadfile=(id:number)=>del(host+basePath+`/${id}`);

export const getuploadfilesJSON=()=>getJSON(host+basePath);
export const getuploadfileJSON=(id:number)=>getJSON(host+basePath+`/${id}`);
export const postuploadfileJSON=(data:JSON)=>postJSON(host+basePath,data);
export const putuploadfileJSON=(data:JSON)=>putJSON(host+basePath,data);
export const deluploadfileJSON=(id:number)=>delJSON(host+basePath+`/${id}`);