import { useAuth } from "@/contexts/authContext";
import { Button, styled } from "@mui/material";
import React, { useState  } from "react";
import UserInfo from '../components/ProfileComps/UserInfo';
import Orders from "@/components/ProfileComps/Orders";
import Address from "@/components/ProfileComps/Address";
import MyCards from "@/components/ProfileComps/MyCards"; 
import { useSelector } from "react-redux";
import { RootState } from '../redux/configure';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { keyframes } from '@emotion/react';

function Profile() {

  const widthScreen =useSelector((state:RootState)=>state.screen.width)
  const heightScreen =useSelector((state:RootState)=>state.screen.height)

  const buttonsListWidth=widthScreen*0.2
  const compWidth=widthScreen*0.70
  


  const ContentContainer=styled('div')({
    display:"flex",
    marginTop:20,
    justifyContent:"space-between",
    width:"100%",
      [`@media (max-width: ${buttonsListWidth+compWidth}px)`]: {
        justifyContent:"center",
        }

  })

  const Menu=styled('div')({
    backgroundColor:'#f1f5f9',
    height:200,
    width:buttonsListWidth,
    position:'sticky',
          [`@media (max-width: ${buttonsListWidth+compWidth}px)`]: {
            display:'none', 

        }
  })

  const CompContainer=styled('div')({
    width:compWidth,
    alignItems:'center',
    display:'flex',
    justifyContent:'center',
    borderRadius:10,
    backgroundColor:'#f1f5f9',
      [`@media (max-width: ${compWidth*11/10}px)`]: {
        width:'95%'
        }

  })



  const [drawer,settDrawer]=useState<boolean>(false);
  const fadeInLeft= 
  keyframes`
      from { left: -190px; }
      to { left: 0; }
    `;
  const fadeOutLeft= keyframes`
      from { left: 0; }
      to { left: -190px; }
    `;
  const DrawerMenu=styled('div')({
     display:'none',
     position:'relative',
     [`@media (max-width: ${buttonsListWidth+compWidth}px)`]: {
            backgroundColor:'#456882',
            display:'block' ,
            position:'absolute',
            left:-190,
            height:"100%",
            width:200,
            zIndex:1,
            animation:drawer?`${fadeOutLeft} 0.3s forwards`:`${fadeInLeft} 0.3s forwards`

        }
  })


  const DrawerMenuButton=styled('div')({
    position:'absolute',
    display:'block',
    right:-50,
    top:heightScreen/3,
    zIndex:1
     
  })


  const auth = useAuth();
  const Logout = () => {
    auth?.setProfile(null);
  };

  const [activeComponent, setActiveComponent] = useState<React.ReactNode>(<UserInfo  />);

  const ComponentBtn = (element: React.ReactNode) => {
    setActiveComponent(element);
        settDrawer(true);

  };
  function MenuButtons({children}:{children?:React.ReactNode|null}) {
    return (
      <div>
          {children}
        <ul className=" text-center mt-3 ">
            <li>
              <Button  onClick={()=>{ComponentBtn(<UserInfo />)}} className="w-full">User Information</Button>
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
    )
  }
  return (
    <div style={{height:heightScreen}} className="relative "> 
      <DrawerMenu>
      <DrawerMenuButton>
            <Button onClick={()=>{settDrawer(!drawer)}}>
              <ArrowForwardIosIcon/>
            </Button>
      </DrawerMenuButton>
          <MenuButtons/>
      </DrawerMenu>
    <div className={`flex justify-center  `}>
      <ContentContainer >
       <Menu > 
        <MenuButtons/>
      </Menu>
        <CompContainer >
            <div className="w-[95%]  "> 
           {activeComponent}
            </div> 
        </CompContainer>
      </ContentContainer>
    </div> 
    </div>
  );
}






export default Profile;
