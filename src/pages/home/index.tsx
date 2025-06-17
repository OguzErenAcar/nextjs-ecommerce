import React, { useEffect, useState } from "react";
import styles from "../../styles/home.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from '@mui/material/Button';
import {useRouter} from "next/router";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
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
 
  const switchFav=(element:SVGSVGElement)=>{
   element.style.color = element.style.color === 'red' ? 'gray' : 'red';
  }


  return (
    <div className={styles.containerhome}>
      <div className={styles.searchcont}>
        <div className={styles.searchcontdiv}>
          <input className={styles.search} placeholder="entry text"></input>
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
                 <StarOutlineIcon onClick={(element:React.MouseEvent<SVGSVGElement>)=>{switchFav(element.currentTarget)}} className="block" />
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
  

