import { useAuth } from "@/contexts/authContext";
import { Button } from "@mui/material";
import React, { useRef, useEffect } from "react";
import UserInfo from '../components/ProfileComps/UserInfo';
import { createRoot,Root } from 'react-dom/client';
import Orders from "@/components/ProfileComps/Orders";
import Address from "@/components/ProfileComps/Address";
import MyCards from "@/components/ProfileComps/MyCards"; 


function Profile() {
  const auth = useAuth();

  const Logout = () => {
    auth?.setProfile(null);
  };
  
  const container= useRef<HTMLDivElement | null>(null); 
  const rootRef = useRef<Root|null>(null);
  
  useEffect(()=>{
    if(container.current&&!rootRef.current)
      rootRef.current=createRoot(container.current)
  },[])

  const ComponentBtn=(element:React.JSX.Element)=>{
       if(rootRef.current) rootRef.current.render(element)
  } 

  return (
    
    <div className="relative  "> 
    <div className="flex justify-center   ">
      <div className="  flex    mt-20  justify-between w-full">
       <div className="w-[25%] h-[200px] sticky top-0   overflow-auto">
        <ul className=" text-center mt-3 ">
          <li>
            <Button  onClick={()=>{ComponentBtn(<UserInfo/>)}} className="w-full">User Information</Button>
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
        <div className="w-[70%] h-[500px] relative rounded-lg  top-0    bg-slate-100">
         <div ref={container} className=" absolute left-5 w-[95%]"> 
         </div>
        </div> 
      </div>
    </div> 
    </div>
  );
}

export default Profile;
