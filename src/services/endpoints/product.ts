import { get,getJSON,post,postJSON,put,putJSON,del,delJSON} from "../request"

const host=process.env.NEXT_PUBLIC_API_DOMAIN;
const basePath="/api/products";

export const getproducts=()=>get(host+basePath);
export const getproduct=(id:number)=>get(host+basePath+`/${id}`);
export const postproduct=(data:any)=>post(host+basePath,data);
export const putproduct=(data:any)=>put(host+basePath,data);
export const delproduct=(id:number)=>del(host+basePath+`/${id}`);

export const getproductsJSON=()=>getJSON(host+basePath);
export const getproductJSON=(id:number)=>getJSON(host+basePath+`/${id}`);
export const postproductJSON=(data:JSON)=>postJSON(host+basePath,data);
export const putproductJSON=(data:JSON)=>putJSON(host+basePath,data);
export const delproductJSON=(id:number)=>delJSON(host+basePath+`/${id}`);