import React, { useEffect } from "react";
import AddressCard from "../addressCard";
import { useWindowSize } from "usehooks-ts";

function Address() {
  const { width, height } = useWindowSize();


  const onClick = () => {
    const body = document.querySelector("body") as HTMLBodyElement;
    body.style.filter='blur(5px)';
  };

  return (
    <div style={{ height: (screen.height * 3) / 5 }} className="w-[100%]">
      <div
        className="grid 
        grid-cols-[repeat(auto-fill,_minmax(270px,_1fr))]
        place-items-center w-full"
      > 
        <AddressCard onClick={onClick}/> 
      </div>
    </div>
  );
}

export default Address;
Address;
