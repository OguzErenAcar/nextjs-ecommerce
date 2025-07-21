 import {  useDispatch, useSelector } from "react-redux";
import {   RootState } from '../redux/configure';
import { styled } from "@mui/material";
import { settWidth,settHeight   } from "@/redux/stores/screenSettStore";
import Navbar from "@/components/navbar";
import React, { useEffect} from "react";
import { useRouter } from "next/router";

function AppWrapper({ Component, pageProps }: { Component: any; pageProps: any }) {
 
  const router = useRouter();
  const dispatch=useDispatch();
  const hideNavbarOn = ["/", "/login", "/signin", "/createprofile"];
  const BasicPages = !hideNavbarOn.includes(router.pathname);
  
  const widthScreen =useSelector((state:RootState)=>state.screen.width)
  const isFlexPage=true
 
  const spaceWidthmultiple=9/10

  useEffect(() => {
    dispatch(settWidth(screen.width*spaceWidthmultiple))
    
    dispatch(settHeight(screen.height)) 

  }, []);
   

  const FlexBox = styled("div")({  
      width:"100%",
      display: "flex",
    justifyContent: "center",
  });  
 
    return (
    <div   >
        {BasicPages && <Navbar />}
          <FlexBox >  
            <div style={{width:widthScreen}}>
              <Component {...pageProps} /> 
            </div>
          </FlexBox>
    </div>
  )
}

export default AppWrapper
