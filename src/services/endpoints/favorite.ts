import { get,getJSON,post,postJSON,put,putJSON,del,delJSON} from "../request"

const host=process.env.NEXT_PUBLIC_API_DOMAIN;
const basePath="/api/favorites";

export const getfavorites=()=>get(host+basePath);
export const getfavorite=(id:number)=>get(host+basePath+`/${id}`);
export const postfavorite=(data:any)=>post(host+basePath,data);
export const putfavorite=(data:any)=>put(host+basePath,data);
export const delfavorite=(id:number)=>del(host+basePath+`/${id}`);

export const getfavoritesJSON=()=>getJSON(host+basePath);
export const getfavoriteJSON=(id:number)=>getJSON(host+basePath+`/${id}`);
export const postfavoriteJSON=(data:JSON)=>postJSON(host+basePath,data);
export const putfavoriteJSON=(data:JSON)=>putJSON(host+basePath,data);
export const delAddressJSON=(id:number)=>delJSON(host+basePath+`/${id}`);