import React, { Component } from "react"; 
import CartItem from "@/components/cartItem";

function Cart() {
  const arr: null[] = Array(14).fill(null);
  const itemHeight = 220;
  const marginTop = 20;
  return (
    <div className="">
      <span>Favorites</span>
      <div
        style={{ height: itemHeight * arr.length + marginTop * arr.length }}
        className="flex justify-center items-center "
      >
        <div className=" w-full flex flex-col">
          <CartItem height={itemHeight} />
          {arr.slice(1, arr.length).map((el, i) => (
            <div style={{ marginTop: marginTop }} key={i}>
              <CartItem height={itemHeight} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
