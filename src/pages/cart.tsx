import React ,{Component} from "react";
import CartItem from "@/components/CartItem";
import { Product } from "@/models/Product";
import { useCart } from "@/contexts/cartContext";
 


function Cart({result}:{result:Product[]}) {
  const {cart}=useCart() 
  const Pr:Product={
  id: 101,
  title: "Wireless Noise Cancelling Headphones",
  slug: "wireless-noise-cancelling-headphones",
  price: 149.99,
  description: "High-fidelity over-ear headphones with active noise cancellation and 30-hour battery life.",
  category: {
    id: 5,
    name: "Electronics",
    image: "https://fakeimg.pl/300x200/?text=Electronics",
    slug: "electronics",
  },
  images: [
    "https://fakeimg.pl/400x400/?text=Headphone+1",
    "https://fakeimg.pl/400x400/?text=Headphone+2",
    "https://fakeimg.pl/400x400/?text=Headphone+3"
  ]
};
  return(
            <div className="flex justify-between">
               <CartItem product={Pr}/>
               <CartItem product={Pr}/>
            {/* must grid */}

                {cart.map((item,i)=>(
                    <CartItem product={item} key={i}/>
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
