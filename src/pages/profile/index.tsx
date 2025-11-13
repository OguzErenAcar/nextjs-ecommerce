import { useAuth } from "@/contexts/authContext";
import { Button, styled, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserInfo from "../../components/profile/userInfo";
import Orders from "@/components/profile/orders";
import Address from "@/components/profile/address";
import MyCards from "@/components/profile/myCards";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configure";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { keyframes } from "@emotion/react";

function Profile() {
  const auth = useAuth();
  const Logout = () => {
    auth?.setProfile(null);
  };

  const [activeComponent, setActiveComponent] = useState<React.ReactNode>(
    <UserInfo />
  );

  const ComponentBtn = (element: React.ReactNode) => {
    setActiveComponent(element);
  };
  function MenuButtons({ children }: { children?: React.ReactNode | null }) {
    return (
      <div className="">
        {children}
        {/* you can use router */}
        <ul className=" text-center mt-3 ">
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

  function Drawer(): React.ReactNode {
    return (
    <div className="h-full lg:hidden fixed left-0 bg-gray-100  z-[2]">
      <MenuButtons/>
    </div>
  );
  }

  return (
    <div className="flex justify-center mt-[40px]">
          <div className="relative w-[80vw]">
      <Drawer/>
    <div className=" flex  justify-between w-full ">
        <div className="hidden lg:block">
        <MenuButtons />
        </div>
        <div className="w-md flex justify-center">
          <div>{activeComponent}</div>
        </div>
      </div> 
    </div>
    </div>
  );
}

export default Profile;
