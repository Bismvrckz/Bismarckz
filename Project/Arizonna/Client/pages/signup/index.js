import React, { useState } from "react";
import MainLogo from "../../components/mainLogo";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PasswordIcon from "@mui/icons-material/Password";
import GppGoodIcon from "@mui/icons-material/GppGood";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import NextLink from "next/link";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import axiosInstance from "../../services/axiosinstance";

function SignUp() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [click, setclick] = useState(false);

  function afterSignupClick() {
    setTimeout(() => {
      setclick(false);
    }, 5000);
  }

  async function onSignupClick() {
    setclick(true);
    try {
      await axiosInstance.post("users/register", inputs);
      alert("Sukses Maszeh");
    } catch (error) {
      console.log({ error });
      alert("Gagal, cek API");
    }
  }

  const handleChange = (prop) => (event) => {
    setInputs({ ...inputs, [prop]: event.target.value });
  };

  return (
    <div className="h-[100vh] bg-gradient-to-r from-blue-900 to-green-800 flex justify-start items-start flex-col">
      <div className="flex items-start justify-start ml-[7vh] mt-[2vh]">
        <MainLogo />
      </div>
      <div className="grow grid grid-cols-2 w-[100%]">
        <div className="flex justify-center items-center ">
          <img
            src="https://www.utviklingssenter.no/aktiviteter/kompetanseutvikling/prosjektlederskolen?pid=Utviklingssenter-ArticlePage-Image&r_n_d=23103_&adjust=1&x=843&from=0"
            className="rounded-[50%] w-[80%] brightness-[.85]"
          />
          {/* <i class="fa-solid absolute z-[19] fa-feather-pointed text-gray-400 text-[40vh]"></i>
          <i class="fa-solid absolute rotate-[225deg] z-[10] fa-circle-notch text-[40vh]"></i> */}
        </div>

        <div className="flex flex-col justify-start w-[75%]">
          <p className="text-[5vh] mb-[1vh] font-[500] ml-[1vh] self-start text-white mt-[3vh]">
            Create your account
          </p>
          <p className="text-[3.4vh] font-[200] ml-[1vh] self-start text-gray-400">
            Created for developers by developers
          </p>
          <TextField
            margin="dense"
            color="info"
            id="outlined-basic"
            label="Username"
            variant="outlined"
            className="w-[95%] "
            autoComplete="off"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBoxIcon sx={{ color: "white", opacity: "0.7" }} />
                </InputAdornment>
              ),
            }}
            onChange={handleChange("username")}
          />
          <TextField
            margin="dense"
            color="info"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="w-[95%] "
            autoComplete="off"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon sx={{ color: "white", opacity: "0.7" }} />
                </InputAdornment>
              ),
            }}
            onChange={handleChange("email")}
          />
          <TextField
            margin="dense"
            color="info"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            className="w-[95%] "
            autoComplete="off"
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PasswordIcon sx={{ color: "white", opacity: "0.7" }} />
                </InputAdornment>
              ),
            }}
            onChange={handleChange("password")}
          />
          <TextField
            margin="dense"
            color="info"
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            className="w-[95%] "
            autoComplete="off"
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <GppGoodIcon sx={{ color: "white", opacity: "0.7" }} />
                </InputAdornment>
              ),
            }}
            onChange={handleChange("confirmPassword")}
          />
          <div className="flex items-center text-white self-start h-[2rem] my-[2vh]">
            <Checkbox color="info" defaultChecked />
            <p>I Agree with the Terms and Conditions</p>
          </div>
          {click ? (
            <LoadingButton
              loading
              className="w-[95%] h-[7vh]"
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="outlined"
            >
              {afterSignupClick()}
              Bentar...
            </LoadingButton>
          ) : (
            <Button
              onClick={onSignupClick}
              className="w-[95%] h-[7vh]"
              variant="contained"
            >
              <p className="text-[2vh]">Sign Up</p>
            </Button>
          )}
          <p className="mt-[3vh] self-center text-[white]">
            Already have an account? <span> </span>
            <NextLink href="/login">
              <a className="no-underline text-sky-500">Sign in</a>
            </NextLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;