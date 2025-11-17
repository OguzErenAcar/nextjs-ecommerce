import { get,getJSON,post,postJSON,put,putJSON,del,delJSON} from "../request"

const host=process.env.NEXT_PUBLIC_API_DOMAIN;
const basePath="/api/addresses";

export const getAddreses=()=>get(host+basePath);
export const getAddress=(id:number)=>get(host+basePath+`/${id}`);
export const postAddress=(data:any)=>post(host+basePath,data);
export const putAddress=(data:any)=>put(host+basePath,data);
export const delAddress=(id:number)=>del(host+basePath+`/${id}`);

export const getAddresesJSON=()=>getJSON(host+basePath);
export const getAddressJSON=(id:number)=>getJSON(host+basePath+`/${id}`);
export const postAddressJSON=(data:JSON)=>postJSON(host+basePath,data);
export const putAddressJSON=(data:JSON)=>putJSON(host+basePath,data);
export const delAddressJSON=(id:number)=>delJSON(host+basePath+`/${id}`);