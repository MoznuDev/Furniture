
// src/Context/CartContext.jsx
import React, { createContext, useState } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Holds all products in cart

  const addToCart = (product) => {
    if (cartItems.some(item => item.id === product.id)) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'This product is already in your cart!',
        confirmButtonColor: '#3085d6',
      });
    } else {
      setCartItems(prev => [...prev, product]);
      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: 'Product has been added to your cart.',
        confirmButtonColor: '#3085d6',
      });
    }
  };

  const cartCount = cartItems.length; // Number of products in cart

  return (
    <CartContext.Provider value={{ cartItems, cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
