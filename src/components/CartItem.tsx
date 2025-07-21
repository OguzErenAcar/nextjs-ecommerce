import Image from "next/image";
import React from "react";

function CartItem({height}:{height:number}) {
  return (
  
    <div  className="block ">
      <div style={{height:height}}  
      //row
      className="w-full  border border-gray-300 rounded- shadow-md bg-white p-6 space-y-4">
      
      </div>
    </div>
    
  );
}

export default CartItem;
