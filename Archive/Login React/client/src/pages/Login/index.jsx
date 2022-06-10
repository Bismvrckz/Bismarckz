import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function Login() {
  const [loginStatus, setLoginStatus] = useState({
    isEmailNotFound: 0,
    isPasswordWrong: 0,
    isLoginSuccess: 0,
  });

  function loginStatusBar() {
    if (loginStatus.isEmailNotFound) {
      return (
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          Email tidak ditemukan — <strong>sus!</strong>
        </Alert>
      );
    } else if (loginStatus.isPasswordWrong) {
      return (
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          Password anda salah — <strong>sus!</strong>
        </Alert>
      );
    } else if (loginStatus.isLoginSuccess) {
      return (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Login anda berhasil — <strong>nice!</strong>
        </Alert>
      );
    }
  }

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  function onInputChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  const loginOnClick = async () => {
    try {
      const getEmail = await axios.get("http://localhost:3000/users", {
        params: { email: state.email },
      });
      if (!getEmail.data.length) {
        setLoginStatus({ ...loginStatus, isEmailNotFound: 1 });
        return;
      }

      const getPassword = await axios.get(
        `http://localhost:3000/users/${getEmail.data[0].id}`,
        {
          params: { password: state.password },
        }
      );
      if (!(getPassword.data.password == state.password)) {
        setLoginStatus({ ...loginStatus, isPasswordWrong: 1 });
        return;
      }

      setLoginStatus({ ...loginStatus, isLoginSuccess: 1 });
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Log in now!</h1>
          <p className="lead">
            Log in now and start shopping in the most affordable ecommerce
            platform
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-4 offset-4">
          <div className="card">
            <div className="card-body">
              <h5 className="font-weight-bold mb-3">Log in</h5>
              <input
                onChange={onInputChange}
                name="email"
                placeholder="Email"
                type="text"
                className="form-control my-2"
              />
              <input
                onChange={onInputChange}
                name="password"
                placeholder="Password"
                type="password"
                className="form-control my-2"
              />
              <div className="d-flex flex-row justify-content-between align-items-center">
                <button
                  className={`btn btn-primary mt-2 `}
                  onClick={loginOnClick}
                >
                  Login
                </button>
                <Link to="/register">Or register</Link>
              </div>
            </div>
            {loginStatusBar()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
