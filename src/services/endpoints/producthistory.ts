import { get,getJSON,post,postJSON,put,putJSON,del,delJSON} from "../request"

const host=process.env.NEXT_PUBLIC_API_DOMAIN;
const basePath="/api/product-histories";

export const getproducthistories=()=>get(host+basePath);
export const getproducthistory=(id:number)=>get(host+basePath+`/${id}`);
export const postproducthistory=(data:any)=>post(host+basePath,data);
export const putproducthistory=(data:any)=>put(host+basePath,data);
export const delproducthistory=(id:number)=>del(host+basePath+`/${id}`);

export const getproducthistoriesJSON=()=>getJSON(host+basePath);
export const getproducthistoryJSON=(id:number)=>getJSON(host+basePath+`/${id}`);
export const postproducthistorJSON=(data:JSON)=>postJSON(host+basePath,data);
export const putproducthistoryJSON=(data:JSON)=>putJSON(host+basePath,data);
export const delproducthistoryJSON=(id:number)=>delJSON(host+basePath+`/${id}`);