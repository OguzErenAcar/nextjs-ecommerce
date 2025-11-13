import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/configure";
import { styled } from "@mui/material";
import { settWidth, settHeight } from "@/redux/stores/screenSettStore";
import Navbar from "@/components/navbar";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import NavBar from "@/components/appbar";
import { pages } from "@/utils/router";

function AppWrapper({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  const path = useRouter().pathname;
  const basePagePath = path.substring(1).split("/")[0] || "";
  const page =
    path == "/"
      ? pages[0]
      : pages.filter(
          (el, i) =>
            el.hasNavbar && el.path && el.path != "/" && path.includes(el.path)
        )[0];
  console.log(page);
  const dispatch = useDispatch();
  const widthScreen = useSelector((state: RootState) => state.screen.width);
  const isFlexPage = true;

  const spaceWidthmultiple = 9 / 10;

  // useEffect(() => {
  //   dispatch(settWidth(screen.width*spaceWidthmultiple))

  //   dispatch(settHeight(screen.height))

  // }, []);
  return (
    <div>
      {page && (
        <div className="h-[70px]">
          <NavBar />
        </div>
      )}
          <Component {...pageProps} />
       
    </div>
  );
}

export default AppWrapper;
