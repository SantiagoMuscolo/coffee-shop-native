import React, { createContext, useContext, useState } from 'react';

const cartContext = createContext(null);
export const useCartContext = () => useContext(cartContext);

export const CartProvider = ({ children }) => {
  const [cartlist, setCartlist] = useState([]);
  const [totalProductValue, setTotalProductValue] = useState(0);

  const addProduct = (newProduct: any) => {
    const existingProductIndex = cartlist.findIndex(product => product.product.id === newProduct.product.id);
    if (existingProductIndex !== -1) {
      const updatedCartlist = [...cartlist];
      updatedCartlist[existingProductIndex].cantidad = parseInt(updatedCartlist[existingProductIndex].cantidad) + parseInt(newProduct.cantidad);
      setCartlist(updatedCartlist);
    } else {
      setCartlist([...cartlist, newProduct]);
    }

    const productValue = newProduct.product.price * newProduct.cantidad;
    setTotalProductValue(prevTotal => prevTotal + productValue);
  };

  const removeProduct = (productId: number) => {

    const updatedCartlist = cartlist.map(item => {
        if (item.product.id === productId) {
            return { ...item, cantidad: item.cantidad - 1 };
        }
        return item;
    }).filter(item => item.cantidad > 0); 
    
    setCartlist(updatedCartlist);

    const removedProduct = cartlist.find(item => item.product.id === productId);
    const productValue = removedProduct.product.price;
    setTotalProductValue(prevTotal => prevTotal - productValue);
};
console.log(totalProductValue)
  return (
    <cartContext.Provider
      value={{
        cartlist,
        addProduct,
        removeProduct,
        totalProductValue
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default cartContext;
