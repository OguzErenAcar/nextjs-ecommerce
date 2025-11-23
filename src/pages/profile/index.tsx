import { useAuth } from "@/contexts/authContext";
import {
  Button,
  styled,
  useMediaQuery,
  IconButton,
  Drawer,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import UserInfo from "../../components/profile/userInfo";
import Orders from "@/components/profile/orders";
import Address from "@/components/profile/address";
import MyCards from "@/components/profile/myCards";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configure";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import CloseIcon from "@mui/icons-material/Close";
import { keyframes } from "@emotion/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Profile() {
  const auth = useAuth();
  const isMediumScreen = useMediaQuery("(min-width:900px)"); // md breakpoint

  const Logout = () => {
    auth?.setUser(null);
    const resetAuth = async () => {
      await fetch(process.env.NEXT_PUBLIC_DOMAIN + "/api/logout");
    };
    resetAuth();
  };

  const [activeComponent, setActiveComponent] = useState<React.ReactNode>(
    <UserInfo />
  );

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const ComponentBtn = (element: React.ReactNode) => {
    setActiveComponent(element);
    // Mobile'de component değişince drawer'ı kapat
    if (!isMediumScreen) {
      setDrawerOpen(false);
    }
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  function MenuButtons({ children }: { children?: React.ReactNode | null }) {
    return (
      <div className="mt-10 w-[250px]">
        {children}
        <ul className="text-center mt-3">
          <li>
            <Button
              onClick={() => {
                ComponentBtn(<UserInfo />);
              }}
              className="w-full"
            >
              User Information
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                ComponentBtn(<Orders />);
              }}
              className="w-full"
            >
              Orders
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                ComponentBtn(<Address />);
              }}
              className="w-full"
            >
              Address
            </Button>
          </li>
          <li>
            <Button
              onClick={() => {
                ComponentBtn(<MyCards />);
              }}
              className="w-full"
            >
              My Cards
            </Button>
          </li>
          <li>
            <Button onClick={Logout} sx={{ color: "black" }}>
              Logout
            </Button>
          </li>
        </ul>
      </div>
    );
  }

  // Drawer içeriği
  const drawerContent = (
    <Box
      sx={{ width: 280, padding: 2 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Menu</h3>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </div>
      <MenuButtons />
    </Box>
  );

  return (
    <div className=" min-h-[1200px] md:h-screen mt-[100px] flex justify-center">
      <div className="w-[80vw]">
        {/* Mobile için menu butonu - sadece medium'dan küçük ekranlarda gözüksün */}
        {!isMediumScreen && (
          <div className="absolute right-10 top-10 justify-end mb-4">
            <IconButton onClick={toggleDrawer(true)} sx={{}}>
              <AccountCircleIcon />
            </IconButton>
          </div>
        )}

        <div className="flex  justify-between w-full">
          <div className="w-[1000px] bg-gray-100  p-10">{activeComponent}</div>

          {/* Medium ve büyük ekranlarda normal sidebar */}
          {isMediumScreen && (
            <div className="hidden md:block  ">
              <MenuButtons />
            </div>
          )}
        </div>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 280,
            },
          }}
        >
          {drawerContent}
        </Drawer>
      </div>
    </div>
  );
}

export default Profile;
