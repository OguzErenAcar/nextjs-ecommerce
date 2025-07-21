import React, { createContext,useContext,useState } from "react";
 import { Product } from "@/models/productModel";


type CartContextType = {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
};

const Context = createContext<CartContextType | undefined>(undefined);
function CartContext({children}:{children:React.ReactNode}){

    const [cart , setCart]=useState<Product[]>([])
    const data ={
        cart,
        setCart
    }  
    return <Context.Provider value={data}>{children}</Context.Provider>
}

export const useCart=()=>{
  const context = useContext(Context);
  if (!context) {
    throw new Error("useCart must be used within a CartContext");
  }
  return context;
};


export default CartContext;
