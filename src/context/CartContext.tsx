import React, { createContext, useContext, useState } from 'react';

const cartContext = createContext(null);
export const useCartContext = () => useContext(cartContext);

export const CartProvider = ({ children }) => {
  const [cartlist, setCartlist] = useState([]);

  const addProduct = (newProduct: any) => {
    const existingProductIndex = cartlist.findIndex(product => product.id === newProduct.id);

    if (existingProductIndex !== -1) {
      const updatedCartlist = [...cartlist];
      updatedCartlist[existingProductIndex].cantidad += newProduct.cantidad;
      setCartlist(updatedCartlist);
    } else {
      setCartlist([...cartlist, newProduct]);
    }
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
