import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";
import { ThemeProvider } from "../../context/ThemeContext";
import { CartProvider } from "../../context/CartContext.jsx";




const RootLayout = () => {
  return (
    <>
      <ThemeProvider>
        <CartProvider>
          <Header />
          <Outlet />
          <Footer />
        </CartProvider>
      </ThemeProvider>
    </>
  );
};

export default RootLayout;
