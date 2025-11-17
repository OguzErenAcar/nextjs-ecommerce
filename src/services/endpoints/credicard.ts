import { get,getJSON,post,postJSON,put,putJSON,del,delJSON} from "../request"

const host=process.env.NEXT_PUBLIC_API_DOMAIN;
const basePath="/api/credit-cards";

export const getcredicards=()=>get(host+basePath);
export const getcredicard=(id:number)=>get(host+basePath+`/${id}`);
export const postcredicard=(data:any)=>post(host+basePath,data);
export const putcredicard=(data:any)=>put(host+basePath,data);
export const delcredicard=(id:number)=>del(host+basePath+`/${id}`);

export const getcredicardsJSON=()=>getJSON(host+basePath);
export const getcredicardJSON=(id:number)=>getJSON(host+basePath+`/${id}`);
export const postcredicardJSON=(data:JSON)=>postJSON(host+basePath,data);
export const putcredicardJSON=(data:JSON)=>putJSON(host+basePath,data);
export const delcredicardJSON=(id:number)=>delJSON(host+basePath+`/${id}`);