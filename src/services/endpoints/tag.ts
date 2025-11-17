import { get,getJSON,post,postJSON,put,putJSON,del,delJSON} from "../request"

const host=process.env.NEXT_PUBLIC_API_DOMAIN;
const basePath="/api/returns";

export const gettags=()=>get(host+basePath);
export const gettag=(id:number)=>get(host+basePath+`/${id}`);
export const posttag=(data:any)=>post(host+basePath,data);
export const puttag=(data:any)=>put(host+basePath,data);
export const deltag=(id:number)=>del(host+basePath+`/${id}`);

export const gettagsJSON=()=>getJSON(host+basePath);
export const gettagJSON=(id:number)=>getJSON(host+basePath+`/${id}`);
export const posttagJSON=(data:JSON)=>postJSON(host+basePath,data);
export const puttagJSON=(data:JSON)=>putJSON(host+basePath,data);
export const deltagJSON=(id:number)=>delJSON(host+basePath+`/${id}`);