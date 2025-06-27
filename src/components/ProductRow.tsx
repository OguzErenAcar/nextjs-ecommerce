import Image from "next/image";
import React from "react";

function ProductRow() {
  return (
  
      <div className="bg-zinc-500 w-full flex items-center rounded-lg h-[200px]  ">
        <div className="flex items-start w-full justify-around h-[150px] ">
          <div className=" w-[65%] h-[50px] ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                 </p>
          </div>
          <div className=" w-[20%] text-center h-[50px] ">
            <Image
              alt=""
              width={100}
              height={100}
              src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
            />
          </div>
        </div>
      </div>
    
  );
}

export default ProductRow;
