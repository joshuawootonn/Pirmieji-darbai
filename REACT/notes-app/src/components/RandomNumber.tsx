import { useEffect, useState } from "react";

export const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const isImportantValue = randomNumber > 50;

  useEffect(() => {
    // alert("Welcome!");
    // setIsLoading(true);

    const products = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
      (result) => result.json()
    );

    setTimeout(() => {
      setIsLoading(false);
    }, 1_000);
  }, []); //Kai masyve keiciasi reiksmes- vykdyk koda funkcijoje!

  useEffect(() => {
    // alert(randomNumber);
  }, [randomNumber, description]);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <p className={isImportantValue ? "importantValue" : "boldValue"}>
            {randomNumber.toFixed()}
          </p>

          {isImportantValue && <p>Important Client</p>}

          <button
            onClick={() => {
              const magicNumber = Math.random() * 100;
              setRandomNumber(magicNumber);
            }}
          >
            Generate Number
          </button>

          <input
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </>
      )}
    </>
  );
};
