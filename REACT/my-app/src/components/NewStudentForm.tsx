import { useState } from "react";
import axios from "axios";

export const NewStudentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setStudentAge] = useState<null | number>(null); //useState(0)
  const [newStudent, setNewStudent] = useState([]);

  //pasiklaust
  const handleStudentSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5001create-student", {
        firstName,
        lastName,
        age,
      })
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  console.log({ firstName, lastName, age });
  return (
    <form onSubmit={handleStudentSubmit}>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input
        type="number"
        //pasiklaust
        value={age ?? ""}
        onChange={(e) => setStudentAge(+e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
};
