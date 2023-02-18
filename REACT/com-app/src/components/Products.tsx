import { useState } from "react";
import { CartContext } from "./Cart";
import { Product } from "./Product";

const knownProducts = [
  { name: "Bread", price: 1.29 },
  { name: "Cake", price: 9.99 },
  { name: "Gum", price: 0.99 },
];

export const Products = () => {
  const [lineItems, setLineItems] = useState<
    Array<{ quantity: number; product: { name: string; price: number } }>
  >([]);
  console.log(lineItems);

  //du mygtukai + ir - kiekvienam produktui, paspaudus + prideda viena produktu i krepseli, paspaudus - atima viena produktu is krepselio
  return (
    <>
      <CartContext.Provider
        value={{
          lineItems,
          setLineItems,
        }}
      >
        <div>
          {knownProducts.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </CartContext.Provider>
    </>
  );
};
