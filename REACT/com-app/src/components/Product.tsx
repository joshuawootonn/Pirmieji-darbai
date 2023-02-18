import { useContext } from "react";
import { CartContext } from "./Cart";

export const Product = (props: any) => {
  const { setLineItems } = useContext(CartContext);

  return (
    <div key={props.product.name}>
      <p>{props.product.name}</p>
      <p>{props.product.price}</p>
      <button
        onClick={() => {
          setLineItems([{ quantity: 1, product: props.product }]);
        }}
      >
        +
      </button>
      <button>-</button>
    </div>
  );
};
