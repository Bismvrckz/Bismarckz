import { Checkbox, Button, Loading } from "@nextui-org/react";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { OutlinedInput } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Navigate, Link } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LockIcon from "@mui/icons-material/Lock";
import { cyan } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material";

export function Login() {
  const [click, setClick] = useState(0);

  const whiteTheme = createTheme({
    palette: {
      primary: {
        main: cyan[50],
      },
    },
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  function afterSignInClick() {
    setTimeout(() => {
      setClick(0);
    }, 3000);
  }

  function onSignInClick() {
    setClick(1);
  }

  return (
    <div className="h-[100vh] bg-gradient-to-r from-blue-800 to-green-700 flex justify-center items-center flex-col relative z-[1]">
      <Link
        to="/login"
        className="text-white text-[5vh] font-[300] no-underline mb-[2vh]"
      >
        <i class="fa-brands fa-atlassian text-cyan-400"></i> Arizonna
      </Link>
      <div className="absolute z-[2] w-[30%]  rounded-[2vh] opacity-25 bg-black h-[60%]"></div>
      <div className="w-[30%] z-[3]  rounded-[2vh bg-transparent font-[montserrat] flex flex-col items-center justify-center h-[60%] ">
        <div className="flex flex-col justify-center w-[80%]">
          <div className="text-[3vh] mb-[1vh] font-[500] text-white">
            Sign in
          </div>
          <p className="text-[2vh] font-[200] text-white">Login to Arizonna</p>

          <TextField
            color="info"
            sx={{ m: 0, width: "100%" }}
            id="outlined-basic"
            label="Username or Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBoxIcon sx={{ color: "white", opacity: "0.7" }} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            focused
          />
          <FormControl
            sx={{ mt: 1, width: "100%" }}
            variant="outlined"
            color="info"
            focused
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    sx={{ color: "white", opacity: "0.7" }}
                    color="warning"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              startAdornment={
                <InputAdornment position="start">
                  <LockIcon sx={{ color: "white", opacity: "0.7" }} />
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <div className="flex flex-col">
            <Checkbox.Group defaultValue={["Remember_me"]}>
              <Checkbox value="Remember_me" color="gradient">
                <p className="text-white font-[montserrat] my-[3vh]">
                  Remember me
                </p>
              </Checkbox>
            </Checkbox.Group>
            {click ? (
              <Button clickable={false} size="xl">
                <Loading type="spinner" color="white" size="xl" />
                {afterSignInClick()}
              </Button>
            ) : (
              <Button onPress={onSignInClick} size="xl">
                Sign in
              </Button>
            )}
          </div>
        </div>
      </div>
      <p className="mt-[2vh] text-[white]">
        Don't have an account? <span> </span>
        <Link to="/register" className="no-underline text-sky-500">
          Sign up
        </Link>
      </p>
      <a href="" className="no-underline text-sky-500">
        Forgot password?
      </a>
    </div>
  );
}
