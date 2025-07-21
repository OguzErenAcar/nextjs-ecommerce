import { Product } from "@/models/Product";
import React, { ReactNode } from "react";

export default function CartItem({
  product,
  width,
  height,
}: {
  product: Product;
  width: number;
  height:number
}) {
  return (
    <div  className="block">
      <div style={{width:width,height:height}} className="max-w-sm border border-gray-300 rounded-lg shadow-lg bg-white p-6 space-y-4">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 flex items-center justify-center bg-red-500 text-white text-lg font-semibold rounded-full">
            DJ
          </div>
          <div>
            <div className="text-gray-900 font-medium">{product.title}</div>
            <div className="text-gray-600 text-sm">Content Creator</div>
          </div>
        </div>

        <p className="text-gray-700">
          I ve been using Imagify for nearly two ye 
        </p> 
        <div className="text-red-500 font-medium cursor-pointer hover:underline">
          Read more
        </div>
      </div>
    </div>
  );
}
