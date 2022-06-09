import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

function Register() {
  const date = new Date();

  const [status, setStatus] = useState({
    usernameIsUsed: 0,
    emailIsUsed: 0,
    registerIsSuccessful: 0,
  });

  const [formState, setFormState] = useState({
    id: "",
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  function bottomStatusBar() {
    if (status.usernameIsUsed == 1) {
      console.log("statusbar jalan");
      return (
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          Username sudah terpakai — <strong>ganti!</strong>
        </Alert>
      );
    } else if (status.emailIsUsed == 1) {
      return (
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          Email sudah terpakai — <strong>ganti!</strong>
        </Alert>
      );
    } else if (status.registerIsSuccessful == 1) {
      return (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Register berhasil— <strong>nice!</strong>
        </Alert>
      );
    }
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const onRegisterClick = async () => {
    try {
      // cek apakah username sudah digunakan
      const resGetUserByUsername = await axios.get(
        "http://localhost:3000/users",
        {
          params: { username: formState.username },
        }
      );
      if (resGetUserByUsername.data.length) {
        setStatus({ ...status, usernameIsUsed: 1 });
        return;
      }

      const resGetUserByEmail = await axios.get("http://localhost:3000/users", {
        params: { email: formState.email },
      });
      if (resGetUserByEmail.data.length) {
        setStatus({ ...status, emailIsUsed: 1 });
        return;
      }

      setFormState({ ...formState, id: date.getTime() });
      await axios.post("http://localhost:3000/users", formState);
      setStatus({ ...status, registerIsSuccessful: 1 });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Register now!</h1>
          <p className="lead">
            Register now and start shopping in the most affordable ecommerce
            platform
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-4 offset-4">
          <div className="card">
            <div className="card-body">
              <h5 className="font-weight-bold mb-3">Register</h5>
              <input
                name="fullName"
                placeholder="Full Name"
                type="text"
                className="form-control my-2"
                value={formState.fullName}
                onChange={handleChange}
              />
              <input
                name="username"
                placeholder="Username"
                type="text"
                className="form-control my-2"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                name="email"
                placeholder="Email"
                type="text"
                className="form-control my-2"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                name="password"
                placeholder="Password"
                type="password"
                className="form-control my-2"
                value={formState.password}
                onChange={handleChange}
              />
              <div className="d-flex flex-row justify-content-between align-items-center">
                <button
                  onClick={onRegisterClick}
                  className="btn btn-primary mt-2"
                >
                  Register
                </button>
                <Link to="/login">Or login</Link>
              </div>
            </div>
            {bottomStatusBar()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
