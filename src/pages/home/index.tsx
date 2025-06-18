import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "../../styles/home.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from '@mui/material/Button';
import {useRouter} from "next/router";
import FavIcon from "../../components/FavIcon"
type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
    slug: string;
  };
  images: [string, string, string];
};
export default function Index({data}:{data:Product[]}) { 
  const router =useRouter()
 
 
  const onFocusSrch=(e:ChangeEvent<HTMLInputElement>)=>{
    const y=e.currentTarget.getBoundingClientRect().top;
    window.scrollTo({
      top: y-30,           
      behavior: 'smooth'   
    })
  }



  return (
    <div className={styles.containerhome}>
      <div className={styles.searchcont}>
        <div className={styles.searchcontdiv}>
          <input onFocus={onFocusSrch} className={styles.search} placeholder="entry text"></input>
          <button className={styles.searchbtn} >
            start
          </button>
        </div>
      </div> 
       <div className={styles.productcont}>
     <div className={styles.productdiv}>
       <div className={styles.products}>
          {data.map((item) => (
            <div className={styles.product} key={item.id}>
              <Link href={router.pathname+"/productdetails/"+item.id}>
              <Image
              className={styles.img}
                src={item.images[0]}
                alt="Landscape picture"
                width={0}
                height={0}/> 
              </Link>
              <span><h3 className="inline">{item.title.substring(0,10)}...</h3>
               <FavIcon  className="block"/>  
              </span> 
            </div>
          ))}
        </div>
     </div>
      </div>
    </div>
  );
} 
export async function getServerSideProps(){ 
   const res =await fetch("https://api.escuelajs.co/api/v1/products") 
   const data= await res.json();
  return {props:{data}}
};
  

