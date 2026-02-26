const express = require("express");

const app = express();
app.use(express.json());

const users = [
{
"studentName": "ABDUL HAQUE",
"University": "SUxCG 714",
"UniversityUID": "108444"
},
{
"studentName": "ADITYA KUMAR",
"University": "SUxCG 702",
"UniversityUID": "108716",
},
{
"studentName": "AMAN KUMAR",
"University": "SUxCG 702",
"UniversityUID":"108500"
},
{
"studentName": "AMRIT RAJ",
"University": "SUxCG 702",
"UniversityUID": "108587"
},
];

app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.get("/users", (req, res) => {
    console.log("users",users)
  res.status(200).json(users);
});

app.get("/users/cg", (req, res) => {
    console.log("users",users)
  res.status(200).json(users);
});

app.get("/users/cg/students", (req, res) => {
    console.log("users",users)
  res.status(200).json(users);
});


app.get("/users/cg/students/gr/:gr_number", (req, res) => {
  const grNumber = req.params.gr_number;
  const user = users.find(u => u.UniversityUID === grNumber);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

app.get("/users/cg/students/name/:name", (req, res) => {
  const name = req.params.name;
  const user = users.find(u => u.studentName.toLowerCase() === name.toLowerCase());

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});


app.post("/users", (req, res) => {
  const newUser = {
    studentName: req.body.studentName,
    University: req.body.University,
    UniversityUID: req.body.UniversityUID
  };

  users.push(newUser);

  res.status(201).json({
    message: "User created",
    user: newUser
  });
});


app.listen(3000, () => {
  console.log("Server started on port 3000");
});