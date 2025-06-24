import { Product } from "@/models/Product";
import React, { ReactNode } from "react";

export default function ListItem({product}:{product:Product}) {
  

  return (
    <>
      <div className="block">
        {product.title}
      </div>
    </>
  );
}

 