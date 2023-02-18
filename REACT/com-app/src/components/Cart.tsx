import React, { useContext } from "react";

export type LineItem = {
  quantity: number;
  product: { name: string; price: number };
};

export const CartContext = React.createContext<{
  lineItems: Array<LineItem>;
  setLineItems: (product: LineItem[]) => void;
}>({
  lineItems: [],
  setLineItems: () => {
    console.log("Cart context was used outside of a provider");
  },
});

export const Cart = () => {
  //   const [cart, setCart] = useState<Array<any>>([]);
  const cart = useContext(CartContext);

  console.log(cart.lineItems);

  return <h1>Cart:{cart.lineItems.length}</h1>;
};
