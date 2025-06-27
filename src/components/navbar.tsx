import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./../styles/components/navbar.module.scss";
import navbar from "@/components/navbar";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useCart } from "@/contexts/cartContext";
import { Badge } from "@mui/material";
import Image from "next/image";
import { useAuth } from "@/contexts/authContext";


function Navbar() {
  const encpath = usePathname() || "";
  const decPath = decodeURIComponent(encpath);
  const outSider = ["/auth", "/login", "/signin"];
  const Cart: any = useCart();
  const cartsizeRef = useRef(Cart.cart.length);  

  const auth= useAuth(); 

  useEffect(() => {
    cartsizeRef.current = Cart.cart.length;
  }, [Cart.cart]);

  if (outSider.some((x) => x == decPath || x == decPath.slice(0, x.length)))
    return <></>;

  //aktif link yap
  return (
    <div className={styles.navbar}>
     <div className={styles.leftgroup}>
     <Link href="/"> 
        <span>QWE</span> 
      </Link> 
      <Link href="/home"> 
        <span className={styles.Logo}>Home</span> 
      </Link>
     </div>
      <div className={styles.rightgroup}>
        <Link href="/cart"> 
          <span>
            <Badge badgeContent={cartsizeRef.current} color="warning">
              <LocalGroceryStoreIcon />
            </Badge>
          </span> 
        </Link>
        <Link href="/favorites"> 
          <span>Favorites</span> 
        </Link>
        <Link href="/profile"> 
          <Image className="rounded-full" src={auth?.profile?.img_uri?? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} width={50} height={50} alt=""/>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
