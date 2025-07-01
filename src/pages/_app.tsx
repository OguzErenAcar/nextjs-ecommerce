import "@/styles/global.scss"; // yol dosya yapına göre değişebilir
import CartContext from "../contexts/cartContext";
import { Provider } from "react-redux";
import { store } from '../redux/configure';
import AuthContext from "../contexts/authContext";
import AppWrapper from "./AppWrapper";
import React from "react";

function _app({ Component, pageProps }: { Component: any; pageProps: any }) {
  
  return (
    <Provider store={store}>
      <AuthContext>
        <CartContext>
          <AppWrapper Component={Component} pageProps={pageProps} />
        </CartContext>
      </AuthContext>
    </Provider>
  );
}

export default _app;
