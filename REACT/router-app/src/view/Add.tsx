import axios from "axios";
import { useState } from "react";
import { Button } from "../components/Button";

export const AddData = () => {
  const [price, setPrice] = useState<null | number>(null);
  const [people, setPeople] = useState<null | number>(null);

  const resetForm = () => {
    setPrice(null);
    setPeople(null);
  };

  const addRow = () => {
    axios
      .post("https://believed-shore-vanadium.glitch.me", { price, people })
      .then(() => resetForm())
      .catch((error) => console.error(error));
  };

  return (
    <form
      onChange={(event) => {
        event.preventDefault();
        addRow();
      }}
    >
      <input
        type="number"
        placeholder="Price"
        value={price ?? ""}
        onChange={(event) => {
          let newPrice: string | null | number = event.target.value;

          if (newPrice === "") {
            newPrice = null;
          } else {
            newPrice = +newPrice;
          }
          setPrice(newPrice);
        }}
      />
      <input
        type="number"
        placeholder="People"
        value={people ?? ""}
        onChange={(event) => setPeople(+event.target.value)}
      />
      <Button />
    </form>
  );
};
