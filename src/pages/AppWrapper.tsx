import CartContext from "../contexts/cartContext";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store, RootState } from '../redux/configure';
import { styled } from "@mui/material";
import { settWidth,settHeight,settWidthUpdated } from "@/redux/stores/screenSettStore";
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

    const handleResize=()=>{
      dispatch(settWidthUpdated(window.innerWidth*spaceWidthmultiple))
    }

    window.addEventListener('resize',handleResize);
    return ()=>{
      window.removeEventListener('resize',handleResize)
    }

  }, []);
   

  const FlexBox = styled("div")({  
      width:"100%",
      display: "flex",
    justifyContent: "center",
  });  
 
    return (
    <div style={{width:isFlexPage?"":(widthScreen/spaceWidthmultiple)*10.9/10}} >
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
