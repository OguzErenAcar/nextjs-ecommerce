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
  
  useEffect(() => {
    dispatch(settWidth(screen.width))
  }, []); 

  const Container = styled("div")({
    width: "100vm",
    display: "flex",
    justifyContent: "center", 
  });

  const Box = styled("div")({
    width: widthScreen *8/10,
  });
 
    return (
    <div >
       {BasicPages && <Navbar />}
          <Container> 
            <Box  >
              <Component {...pageProps} />
            </Box>
          </Container>
    </div>
  )
}

export default AppWrapper
