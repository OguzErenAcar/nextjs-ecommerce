import { Product } from "@/models/productModel";
import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@mui/material/Button";
import { useCart } from "@/contexts/cartContext";
import FavIcon from "./favIcon";
import { useRouter } from "next/router";
import { styled } from "@mui/material";

export default function ProductItem({
  product,
  width,
  height,
}: {
  product: Product;
  width: number;
  height: number;
}) {
  const Cart: any = useCart();
  const router = useRouter() 
  const AddBtn = (  item: Product ) => {
    const list = Cart.cart; 
    Cart.setCart([...list, item]);
    console.log(list.length);
  };


  const Productdiv = styled('div')({
  textAlign: 'center',
  position: 'relative',
  '& span': {
    fontSize: '12px',
    color: 'gainsboro',
    position: 'absolute',
    right: 0,
    left: 0,
    bottom:10,
  },
});
  return (
    <div className="block">
      <div
        style={{ width: width, height: height }}
        className="max-w-sm border border-gray-300 rounded-lg shadow-lg bg-white "
      >
        <Productdiv style={{height:height}}>
          <Link  href={"/productdetails/" + product.id}>
            <Image
              style={{objectFit:'cover',height:'100%'}}
              src={product.images[0]}
              alt="Landscape picture"
              width={width}
              height={height}
            />
          </Link>
          <span>
            <h3 className="">{product.title.substring(0, 25)}...</h3>
            <Button
              sx={{
                height: 20,
                backgroundColor: "#4caf50",
                color: "white",
              }}
              onClick={() => AddBtn( product )}>
              Add
            </Button>
            <FavIcon className="block" />
          </span>
        </Productdiv>
        
      </div>
    </div>
  );
}
