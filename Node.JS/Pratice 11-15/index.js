const express = require("express");
const cors = require("cors");

const PORT = 5001;
const app = express();

const students = [
  { name: "Adomas", surname: "Kritnys", age: 21, studentId: 1 },
  { name: "Asta", surname: "Noreika", age: 23, studentId: 2 },
  { name: "Beata", surname: "Provaitė", age: 22, studentId: 3 },
  { name: "Nikolė", surname: "Popova", age: 20, studentId: 4 },
  { name: "Rita", surname: "Kvedrova", age: 23, studentId: 5 },
];

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send(students).end();
});

// app.get("/", (req, res) => {
//   const { age } = req.query;

//   const isSameAge = students.find((age) => student.age === age);

//   if (student) {
//     return student;
//   } else {
//     console.error(error);
//   }

//   students.push({ age });
//   res.send(students).end();
// });

app.post("/", (req, res) => {
  const { name, surname, age, studentId } = req.body;

  students.push({ name, surname, age, studentId });
  res.send(students).end();
});

app.delete("/student/:studentId", (req, res) => {
  const studentId = +req.params.studentId;

  const deleteStudent = students.find(
    (curStudent) => curStudent.studentId === studentId
  );

  if (deleteStudent) {
    students = students.filter(
      (curStudent) => curStudent.studentId !== studentId
    );
    return res.send(deleteStudent).end();
  }
  res.status(404).send({ message: "Student does not exist" }).end();
});

app.patch("/student/:studentId", (req, res) => {
  const studentId = +req.params.studentId;
  const { firstName, lastName } = req.body;
  // console.log(req.body);

  if (!firstName && !lastName) {
    return res.status(404).send("No name was provided");
  }

  const studentToUpdate = students.find(
    (curStudent) => curStudent.studentId === studentId
  );

  if (!studentToUpdate) {
    return res.status(404).send("Student does not exist").end();
  }

  if (lastName) {
    studentToUpdate.lastName = lastName;
  }

  if (firstName) {
    studentToUpdate.firstName = firstName;
  }

  res.send(studentToUpdate).end();
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
