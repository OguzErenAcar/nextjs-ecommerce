import { get,getJSON,post,postJSON,put,putJSON,del,delJSON} from "../request"

const host=process.env.NEXT_PUBLIC_API_DOMAIN;
const basePath="/api/orders";

export const getorders=()=>get(host+basePath);
export const getorder=(id:number)=>get(host+basePath+`/${id}`);
export const postorder=(data:any)=>post(host+basePath,data);
export const putorder=(data:any)=>put(host+basePath,data);
export const delorder=(id:number)=>del(host+basePath+`/${id}`);

export const getordersJSON=()=>getJSON(host+basePath);
export const getorderJSON=(id:number)=>getJSON(host+basePath+`/${id}`);
export const postorderJSON=(data:JSON)=>postJSON(host+basePath,data);
export const putorderJSON=(data:JSON)=>putJSON(host+basePath,data);
export const delorderJSON=(id:number)=>delJSON(host+basePath+`/${id}`);