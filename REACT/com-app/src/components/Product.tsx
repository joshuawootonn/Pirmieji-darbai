import { useContext } from "react";
import { CartContext } from "./Cart";

export const Product = (props: any) => {
  const cart = useContext(CartContext);

  return (
    <div key={props.product.name}>
      <p>{props.product.name}</p>
      <p>{props.product.price}</p>
      <button onClick={(number) => alert(props.product)}>+</button>
      <button>-</button>
    </div>
  );
};
