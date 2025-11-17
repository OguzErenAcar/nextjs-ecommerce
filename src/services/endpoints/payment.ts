import { get,getJSON,post,postJSON,put,putJSON,del,delJSON} from "../request"

const host=process.env.NEXT_PUBLIC_API_DOMAIN;
const basePath="/api/payments";

export const getpayments=()=>get(host+basePath);
export const getpayment=(id:number)=>get(host+basePath+`/${id}`);
export const postpayment=(data:any)=>post(host+basePath,data);
export const putpayment=(data:any)=>put(host+basePath,data);
export const delpayment=(id:number)=>del(host+basePath+`/${id}`);

export const getpaymentsJSON=()=>getJSON(host+basePath);
export const getpaymentJSON=(id:number)=>getJSON(host+basePath+`/${id}`);
export const postpaymentJSON=(data:JSON)=>postJSON(host+basePath,data);
export const putpaymentJSON=(data:JSON)=>putJSON(host+basePath,data);
export const delpaymentJSON=(id:number)=>delJSON(host+basePath+`/${id}`);