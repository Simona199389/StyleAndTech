import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function Register(props) {
  const { isThereLoggedUser, setThereLoggedUser } = props;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email !== "" && password !== "" && name !== "") {
      const user = {
        email: email,
        name: name,
        gender: gender,
        password: password,
      };

      try {
        const response = await fetch("http://localhost:5000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("User registered successfully", data);
          setThereLoggedUser(email);
        } else {
          const errorData = await response.json();
          console.error("Registration failed:", errorData.message);
          alert("Registration failed: " + errorData.message);
        }
      } catch (error) {
        console.error("Error submitting data", error);
        alert("There was an error submitting your data");
      }
      setValidate(true);
    } else {
      alert("Some fields are empty");
      setValidate(false);
    }
  };

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <>
      <form style={{ padding: "100px" }} onSubmit={handleSubmit}>
        <h1 className="display-5 fw-bolder mb-2">Register</h1>
        <div className="mb-3" style={{ width: "500px" }}>
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {validate ? null : (
            <div id="emailValidation" className="form-text" style={{ color: "red" }}>
              This field is required!
            </div>
          )}
        </div>
        <div className="mb-3" style={{ width: "500px" }}>
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="NameHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {validate ? null : (
            <div id="nameValidation" className="form-text" style={{ color: "red" }}>
              This field is required!
            </div>
          )}
        </div>
        <div className="mb-3" style={{ width: "500px" }}>
          <label className="form-label">Gender</label>
          <div>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              onChange={handleChange}
              style={{ width: "500px", height: "37.6px" }}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </div>
        </div>
        <div className="mb-3" style={{ width: "500px" }}>
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {validate ? null : (
          <div id="passwordValidation" className="form-text" style={{ color: "red" }}>
            This field is required!
          </div>
        )}
        <div className="mb-3">
          <label>
            You already have an account? <Link to="/login">Login</Link>
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
      </form>
    </>
  );
}

export default Register;
