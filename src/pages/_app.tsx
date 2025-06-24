import Navbar from '@/components/navbar'
import React from 'react' 
import { useRouter } from 'next/router';
import '@/styles/global.scss'; // yol dosya yapına göre değişebilir
import CartContext from "../contexts/cartContext"
function _app({ Component, pageProps }:{ Component:any, pageProps:any }) {
 
   const router = useRouter();

 
 const hideNavbarOn=["/","/login","/signin","/createprofile"]
 const ShowNavbar = !hideNavbarOn.includes(router.pathname) 
 
 return (
    <>
    <CartContext>
     {ShowNavbar&& <Navbar/> }
      <Component {...pageProps}/>
    </CartContext>
    </>
  )
}

export default _app
