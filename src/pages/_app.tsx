import Navbar from '@/components/navbar'
import React from 'react' 
import { useRouter } from 'next/router';
import '@/styles/global.scss'; // yol dosya yapına göre değişebilir
import CartContext from "../contexts/cartContext"
import {Provider} from  'react-redux';
import { store } from "../redux/configure";
import AuthContext from "../contexts/authContext"


function _app({ Component, pageProps }:{ Component:any, pageProps:any }) {
 
   const router = useRouter();

 
 const hideNavbarOn=["/","/login","/signin","/createprofile"]
 const ShowNavbar = !hideNavbarOn.includes(router.pathname) 
 
 return (
    <Provider store={store}>
    <AuthContext> 
    <CartContext>
     {ShowNavbar&& <Navbar/> }
      <Component {...pageProps}/>
    </CartContext>
    </AuthContext>
    </Provider>
  )
}

export default _app
