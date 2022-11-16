const express = require("express");
const cors = require("cors");

const PORT = 5001;
const app = express();

const students = [
  { name: "Adomas", surname: "Kritnys", age: 21 },
  { name: "Asta", surname: "Noreika", age: 23 },
  { name: "Beata", surname: "Provaitė", age: 22 },
  { name: "Nikolė", surname: "Popova", age: 20 },
  { name: "Rita", surname: "Kvedrova", age: 23 },
];

app.use(express.json());
app.use(cors());

// app.get("/", (_, res) => {
//   res.send(students).end();
// });

app.get("/", (req, res) => {
  const { age } = req.query;

  const isSameAge = students.find((age) => student.age === age);

  if (student) {
    return student;
  } else {
    console.error(error);
  }

  students.push({ age });
  res.send(students).end();
});

app.post("/", (req, res) => {
  const { name, surname, age } = req.body;

  students.push({ name, surname, age });
  res.send(students).end();
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
