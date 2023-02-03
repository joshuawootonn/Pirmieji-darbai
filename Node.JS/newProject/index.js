const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const PORT = 5001;

let students = [{ firstName: "Andrius", lastName: "Zažeckas", age: 31 }];

app.get("/", (_, res) => {
  res.send(students).end();
});

app.post("/create-student", (req, res) => {
  const { firstName, lastName, age } = req.body;

  const isNumber = (value) => {
    return typeof value === "number" && !Number.isNaN(value);
  };

  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    !isNumber(age)
  ) {
    res.status(400).send({ message: "Invalid user data" }).end();
    return;
  }

  const student = { firstName, lastName, age };

  students.push(student);
  res.send(students).end();
});

app.get("/student/:studentId", (req, res) => {
  const age = +req.params.age;

  const student = students.find((curStudent) => curStudent.age === age);

  if (!student) {
    return res.status(404).send("Student does not exist").end();
  }

  res.send(student).end();
});

app.delete("/student/:studentId", (req, res) => {
  const age = +req.params.age;

  console.log({ age, existingStudentId: students[0].age });

  const deleteStudent = students.find(
    (curStudent) => curStudent.studentId === studentId
  );

  if (deleteStudent) {
    students = students.filter((curStudent) => curStudent.age !== age);

    return res.send(deleteStudent).end();
  }

  res.status(404).send({ message: "Student does not exist." }).end();
});

// demo versija su netobulumais

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

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
