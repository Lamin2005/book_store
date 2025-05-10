import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const stored = sessionStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev =>
      prev.some(item => item.id === product.id)
        ? prev
        : [...prev, { ...product, quantity: 1 }]
    );
  };

  const clearCart = () => {
    setCart([]);
    sessionStorage.removeItem('cart');
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }
  const updateQuantity = (id, delta) => {
    setCart(prev =>
      prev.flatMap(item =>{
        if(item.id === id){
          let newQty = Math.max(0, item.quantity + delta);
          if(newQty<=0){
            return [];
          }
          return [{...item,quantity:newQty}];
        }
        return [item];
      }
          
      )
    );
  };

 

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
