import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login(props) {
  const { isThereLoggedUser, setThereLoggedUser } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState(true);
  const users = [];

  const handleSubmit = (event) => {
    if (email !== "" && password !== "") {
      alert("A name was submitted:");
      setThereLoggedUser(email);
      setValidate(true);
      users.push(createUser(email, password));
      console.log(users);
    } else {
      alert("Some fields are empty");
      setValidate(false);
    }

    event.preventDefault();
  };

  const createUser = (email, password) => {
    const user = {
      email: email,
      password: password,
    };

    return user;
  };

  return (
    <>
      <form
        style={{ padding: "100px" }}
        onSubmit={(event) => handleSubmit(event)}
      >
        <h1 className="display-5 fw-bolder  mb-2">Login</h1>
        <div className="mb-3" style={{ width: "500px" }}>
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {validate ? (
            <div></div>
          ) : (
            <div
              id="emailValidation"
              className="form-text"
              style={{ color: "red" }}
            >
              This field is required!
            </div>
          )}
        </div>

        <div className="mb-3" style={{ width: "500px" }}>
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {validate ? (
          <div></div>
        ) : (
          <div
            id="passwordValidation"
            className="form-text"
            style={{ color: "red" }}
          >
            This field is required!
          </div>
        )}
        <div className="mb-3">
          <label>
            You don't have an account yet? <Link to="/register">Register</Link>
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </>
  );
}

export default Login;
