import { get,getJSON,post,postJSON,put,putJSON,del,delJSON} from "../request"

const host=process.env.NEXT_PUBLIC_API_DOMAIN;
const basePath="/api/categories";

export const getcategories=()=>get(host+basePath);
export const getcategory=(id:number)=>get(host+basePath+`/${id}`);
export const postcategory=(data:any)=>post(host+basePath,data);
export const putcategory=(data:any)=>put(host+basePath,data);
export const delcategory=(id:number)=>del(host+basePath+`/${id}`);

export const getcategoriesJSON=()=>getJSON(host+basePath);
export const getcategoryJSON=(id:number)=>getJSON(host+basePath+`/${id}`);
export const postcategoryJSON=(data:JSON)=>postJSON(host+basePath,data);
export const putcategoryJSON=(data:JSON)=>putJSON(host+basePath,data);
export const delcategoryJSON=(id:number)=>delJSON(host+basePath+`/${id}`);