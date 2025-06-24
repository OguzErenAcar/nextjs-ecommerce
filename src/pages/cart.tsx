import React ,{Component} from "react";
import ListItem from "@/components/ListItem";
import { Product } from "@/models/Product";
import { useCart } from "@/contexts/cartContext";
 


function Cart({result}:{result:Product[]}) {
   
  const {cart}=useCart() 
 

  return(
            <div>
                {cart.map((item,i)=>(
                    <ListItem product={item} key={i}/>
                ))}
            </div>
            )
}

export default Cart


export async function getServerSideProps() { 
  const response = await fetch(
    "https://api.escuelajs.co/api/v1/products" 
  );
  const result = await response.json();

  return { props: { result } };
}
