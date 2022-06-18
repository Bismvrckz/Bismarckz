import { Link } from "react-router-dom";
import leftPhoto from "../../Assets/img/leftPhoto.jpg";
import { TextField, InputAdornment } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Checkbox } from "@nextui-org/react";
import { Button, Loading } from "@nextui-org/react";
import { useState } from "react";

export function Register() {
  const [click, setClick] = useState(0);

  function afterSignInClick() {
    setTimeout(() => {
      setClick(0);
    }, 3000);
  }

  function onSignInClick() {
    setClick(1);
  }

  return (
    <div className="h-[100vh] bg-gradient-to-r from-blue-800 to-green-700 flex justify-start items-start flex-col">
      <div className="flex items-start justify-start ml-[7vh] mt-[2vh]">
        <Link
          to="/login"
          className="text-white text-[5vh] font-[300] no-underline mb-[2vh] "
        >
          <i class="fa-brands fa-atlassian text-cyan-400"></i> Arizonna
        </Link>
      </div>
      <div className="grow grid grid-cols-2 w-[100%]">
        <div className="flex justify-center items-center">
          <img src={leftPhoto} className="rounded-[50%]" />
        </div>
        <div className="flex flex-col">
          <p>Create your account</p>
          <p>Created for developers by developers</p>
          <TextField
            color="info"
            sx={{ m: 0, width: "50%" }}
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
          <TextField
            color="info"
            sx={{ m: 0, width: "50%" }}
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
          <TextField
            color="info"
            sx={{ m: 0, width: "50%" }}
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
          <div className="flex flex-col w-[50%]">
            <Checkbox.Group defaultValue={["Remember_me"]}>
              <Checkbox value="Remember_me" color="gradient">
                <p className="text-white font-[montserrat] my-[3vh]">
                  I agree to the terms & conditions
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
    </div>
  );
}
