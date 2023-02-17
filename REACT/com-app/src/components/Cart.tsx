import React, { useContext, useState } from "react";

export const CartContext = React.createContext<Array<any>>([]);

export const Cart = () => {
  //   const [cart, setCart] = useState<Array<any>>([]);
  const cart = useContext(CartContext);

  return <h1>Cart:{cart.length}</h1>;
};
