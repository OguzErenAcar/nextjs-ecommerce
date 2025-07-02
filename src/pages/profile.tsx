import { useAuth } from "@/contexts/authContext";
import { Button } from "@mui/material";
import React, { useState , } from "react";
import UserInfo from '../components/ProfileComps/UserInfo';
import Orders from "@/components/ProfileComps/Orders";
import Address from "@/components/ProfileComps/Address";
import MyCards from "@/components/ProfileComps/MyCards"; 
import { useSelector } from "react-redux";
import { RootState } from '../redux/configure';


function Profile() {
  const auth = useAuth();

  const Logout = () => {
    auth?.setProfile(null);
  };
  const widthScreen =useSelector((state:RootState)=>state.screen.width)
  
  const buttonsListWidth=200
  const compWidth=900
  const spaceWidth=40
  const sumWidth=buttonsListWidth+compWidth+spaceWidth
  
  const compHeight=500;
  const [activeComponent, setActiveComponent] = useState<React.ReactNode>(<UserInfo height={compHeight} />);

  const ComponentBtn = (element: React.ReactNode) => {
    setActiveComponent(element);
  };

  return (
    
    <div className="relative    "> 
    <div className={`flex justify-center `}>
      <div style={{minWidth:sumWidth}} className={` flex  mt-20  justify-between   w-full`}>
       <div  style={{width:buttonsListWidth}} className={`h-[200px]  bg-slate-100 sticky top-0  left-0  "`}>
        <ul className=" text-center mt-3 ">
          <li>
            <Button  onClick={()=>{ComponentBtn(<UserInfo height={compHeight}/>)}} className="w-full">User Information</Button>
          </li>
          <li>
           <Button onClick={()=>{ComponentBtn(<Orders/>)}} className="w-full">Orders</Button> 
          </li>
          <li>
           <Button onClick={()=>{ComponentBtn(<Address/>)}} className="w-full">Address</Button> 
          </li>
          <li>
           <Button onClick={()=>{ComponentBtn(<MyCards/>)}} className="w-full">My Cards</Button> 
          </li>
          <li>
            <Button   onClick={Logout} sx={{   color: "black" }}>
        Logout
      </Button>
          </li> 
        </ul>
      </div>
        <div style={{width:compWidth,height:compHeight }} className={` flex justify-center  rounded-lg  bg-slate-100`}>
         <div style={{width:compWidth*95/100 }} className="">
            {activeComponent}
         </div>
        </div>
      </div>
    </div> 
    </div>
  );
}

export default Profile;
