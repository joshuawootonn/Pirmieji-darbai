import { useState } from "react";
import "./App.css";

function App() {
  const [i, setI] = useState(0);
  const [description, setDescription] = useState("");

  console.log(i);

  return (
    <div className="App">
      <input
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={
          () => setI(i + 1) //naudoti tik pradiniams projektams
        }
      >
        Submit
      </button>

      <p>i antruoju {i ** 2}</p>

      <p>{description}</p>
    </div>
  );
}

export default App;
