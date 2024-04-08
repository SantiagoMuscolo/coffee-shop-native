import React, { createContext, useContext, useState } from 'react';

const cartContext = createContext(null);
export const useCartContext = () => useContext(cartContext)

export const CartProvider = ({ children }) => {
    const [cartlist, setCartlist] = useState([]);

  const addProduct = (product: any) => {
    setCartlist([...cartlist, product]);
  };

  const removeProduct = (productId: number) => {
    setCartlist(cartlist.filter((product) => product.id !== productId));
  };

  return (
    <cartContext.Provider
      value={{
        cartlist,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default cartContext;
