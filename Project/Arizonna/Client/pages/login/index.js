import React, { useState } from "react";
import NextLink from "next/link";
import MainLogo from "../../components/mainLogo";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyIcon from "@mui/icons-material/Key";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

function Login() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
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

  return (
    <div className="h-[100vh] font-[montserrat] bg-gradient-to-r from-blue-900 to-green-800 flex justify-center items-center flex-col relative ">
      <div className="z-10 flex flex-col w-[35%] items-center h-[100%]">
        <div className="flex mt-[6vh] justify-start pl-[14vh] w-[100%]">
          <MainLogo />
        </div>
        <div className="text-[5vh] mb-[1vh] font-[500] ml-[1vh] self-start text-white mt-[3vh]">
          Sign in
        </div>
        <p className="text-[3.4vh] font-[200] ml-[1vh] self-start text-gray-400">
          Sign in to Arizonna
        </p>
        <TextField
          color="info"
          id="outlined-basic"
          label="Username"
          variant="outlined"
          className="w-[95%] mt-[5vh]"
          autoComplete="off"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountBoxIcon sx={{ color: "white", opacity: "0.7" }} />
              </InputAdornment>
            ),
          }}
        />{" "}
        <FormControl variant="outlined" className="my-[1vh] w-[95%]">
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
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? (
                    <VisibilityOff sx={{ color: "white", opacity: "0.7" }} />
                  ) : (
                    <Visibility sx={{ color: "white", opacity: "0.7" }} />
                  )}
                </IconButton>
              </InputAdornment>
            }
            startAdornment={
              <InputAdornment position="start">
                <KeyIcon sx={{ color: "white", opacity: "0.7" }} />
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <div className="flex items-center text-white self-start h-[2rem] mt-[2vh]">
          <Checkbox color="info" />
          <p>Remember me</p>
        </div>
        <Button className="w-[95%] my-[3vh] h-[7vh]" variant="contained">
          <p className="text-[2vh]">Sign In</p>
        </Button>
        <p className="mt-[10vh] text-[white]">
          Don't have an account? <span> </span>
          <NextLink href="/">
            <a className="no-underline text-sky-500">Sign up</a>
          </NextLink>
        </p>
        <p className="mt-[2vh] text-[white]">
          <NextLink href="/">
            <a className="no-underline text-sky-500">Forgot password?</a>
          </NextLink>
        </p>
      </div>
      <div className="absolute z-[2] w-[40%]  rounded-[2vh] opacity-25 bg-black h-[70%]" />
    </div>
  );
}

export default Login;
