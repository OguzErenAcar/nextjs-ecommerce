import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "../../styles/home.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import FavIcon from "../../components/FavIcon";
import { Product } from "@/models/Product";
import {useCart} from "../../contexts/cartContext"





export default function Index({ data }: { data: Product[] }) {
  const router = useRouter();
  const Cart:any =useCart();


  const onFocusSrch = (e: ChangeEvent<HTMLInputElement>) => {
    const y = e.currentTarget.getBoundingClientRect().top;
    window.scrollTo({
      top: y - 30,
      behavior: "smooth",
    });
  };

  const AddBtn=({item}:{item:Product})=>{
    const list = Cart.cart

    Cart.setCart([...list,item])
    console.log(list.length)

  }

  return (
    <div className={styles.containerhome}>
      <div className={styles.searchcont}>
        <div className={styles.searchcontdiv}>
          <input
            onFocus={onFocusSrch}
            className={styles.search}
            placeholder="entry text"
          ></input>
          <button className={styles.searchbtn}>start</button>
        </div>
      </div>
      <div className={styles.productcont}>
        <div className={styles.productdiv}>
          <div className={styles.products}>
            {data.map((item) => (
              <div className={styles.product} key={item.id}>
                <Link href={router.pathname + "/productdetails/" + item.id}>
                  <Image
                    className={styles.img}
                    src={item.images[0]}
                    alt="Landscape picture"
                    width={0}
                    height={0}
                  />
                </Link>
                <span>
                  <h3 className="">{item.title.substring(0, 25)}...</h3>
                  <Button
                    sx={{
                      height: 20,
                      backgroundColor: "#4caf50",
                      color: "white",
                    }}
                    onClick={() => AddBtn({ item })}
                  >
                   Add 
                  </Button>
                  <FavIcon className="block" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await res.json();
  return { props: { data } };
}
