const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;
const filePath = "users.json";

app.use(cors());
app.use(bodyParser.json());

const readUsers = () => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};

const writeUsers = (users) => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};

app.post("/register", (req, res) => {
  const { email, name, gender, password } = req.body;

  if (!email || !name || !password) {
    return res.status(400).json({ message: "Email, name, and password are required!" });
  }

  const users = readUsers();
  const userExists = users.some((user) => user.email === email);

  if (userExists) {
    return res.status(400).json({ message: "User with that email already exists." });
  }

  const newUser = { email, name, gender, password };
  users.push(newUser);

  writeUsers(users);

  res.status(201).json({ message: "User registered successfully", user: newUser });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
