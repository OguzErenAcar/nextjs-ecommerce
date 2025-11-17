import { get,getJSON,post,postJSON,put,putJSON,del,delJSON} from "../request"

const host=process.env.NEXT_PUBLIC_API_DOMAIN;
const basePath="/api/auth";

export const getusers=()=>get(host+basePath);
export const getuser=(id:number)=>get(host+basePath+`/${id}`);
export const postuser=(data:any)=>post(host+basePath+"/local",data);
export const putuser=(data:any)=>put(host+basePath,data);
export const deluser=(id:number)=>del(host+basePath+`/${id}`);

export const getusersJSON=()=>getJSON(host+basePath);
export const getuserJSON=(id:number)=>getJSON(host+basePath+`/${id}`);
export const postuserJSON=(data:JSON)=>postJSON(host+basePath+"/local",data);
export const putuserJSON=(data:JSON)=>putJSON(host+basePath,data);
export const deluserJSON=(id:number)=>delJSON(host+basePath+`/${id}`);