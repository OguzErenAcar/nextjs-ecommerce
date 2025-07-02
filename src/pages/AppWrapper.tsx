import CartContext from "../contexts/cartContext";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store, RootState } from '../redux/configure';
import { styled } from "@mui/material";
import { settWidth } from "@/redux/stores/screenSettStore";
import Navbar from "@/components/navbar";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

function AppWrapper({ Component, pageProps }: { Component: any; pageProps: any }) {
 
  const router = useRouter();
  const dispatch=useDispatch();
  const hideNavbarOn = ["/", "/login", "/signin", "/createprofile"];
  const BasicPages = !hideNavbarOn.includes(router.pathname);
  
  const widthScreen =useSelector((state:RootState)=>state.screen.width)
 
 
  const spaceWidthmultiple=8/10

  useEffect(() => {
    dispatch(settWidth(screen.width*spaceWidthmultiple))
  }, []);
  
  
 

  const Box = styled("div")({  
      display: "flex",
    justifyContent: "center",
  });

  const Container = styled("div")({
  
  "@media (max-width: 1200px)": {
    width: widthScreen,
  },
   
  });

 
    return (
    <div >
        {BasicPages && <Navbar />}
          <Box > 
            <div style={{width: widthScreen}}>
              <Component {...pageProps} />
            </div>
          </Box>
    </div>
  )
}

export default AppWrapper
