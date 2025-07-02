import { useAuth } from "@/contexts/authContext";
import { Button, styled } from "@mui/material";
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
  
  const buttonsListWidth=widthScreen*0.2
  const compWidth=widthScreen*0.75
  const compHeight=500;

  const ContentContainer=styled('div')({
    display:"flex",
    marginTop:20,
    justifyContent:"between",
    width:"100%",
      "@media (max-width: 1200px)": {

        }

  })
  const Menu=styled('div')({
    backgroundColor:'#f1f5f9',
    height:200,
    width:buttonsListWidth,
    display:'sticky',
        "@media (max-width: 1200px)": {

        }
  })




  const [activeComponent, setActiveComponent] = useState<React.ReactNode>(<UserInfo height={compHeight} />);

  const ComponentBtn = (element: React.ReactNode) => {
    setActiveComponent(element);
  };

  return (
    
    <div className="relative    "> 
    <div className={`flex justify-center  `}>
      <ContentContainer >
       <Menu >
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
      </Menu>
        <div style={{width:compWidth,height:compHeight }} className={` flex justify-center  rounded-lg  bg-slate-100`}>
         <div style={{width:compWidth*95/100 }} className="">
            {activeComponent}
         </div>
        </div>
      </ContentContainer>
    </div> 
    </div>
  );
}

export default Profile;
