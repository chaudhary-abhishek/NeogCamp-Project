import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    setCart((cart) => [...cart, item])
  }
  function removeFromCart(item) {
    const newCart = cart.filter(({ _id }) => _id !== item._id);
    setCart((cart) => newCart);
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
