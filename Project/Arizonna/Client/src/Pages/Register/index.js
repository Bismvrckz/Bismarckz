import leftPhoto from "../../Assets/img/leftPhoto.jpg";
import { TextField, InputAdornment } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/esm/AccountBox";
import { useState } from "react";
import EmailIcon from "@mui/icons-material/esm/Email";
import KeyIcon from "@mui/icons-material/Key";
import { Checkbox, Button, Loading } from "@nextui-org/react";
import IconButton from "@mui/material/IconButton";
import { OutlinedInput } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Navigate, Link } from "react-router-dom";

export function Register() {
  const [click, setClick] = useState(0);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  function afterSignInClick() {
    setTimeout(() => {
      setClick(0);
    }, 3000);
  }

  function onSignInClick() {
    setClick(1);
  }

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
          <p className="font-[montserrat]">Create your account</p>
          <p className="font-[montserrat]">
            Created for developers by developers
          </p>
          <TextField
            color="info"
            sx={{ m: 0, width: "50%" }}
            id="outlined-basic"
            label="Username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBoxIcon sx={{ color: "white", opacity: "0.7" }} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <TextField
            color="info"
            sx={{ m: 0, width: "50%" }}
            id="outlined-basic"
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "white", opacity: "0.7" }} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <TextField
            color="info"
            sx={{ m: 0, width: "50%" }}
            id="outlined-basic"
            label="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon sx={{ color: "white", opacity: "0.7" }} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <FormControl
            sx={{ mt: 0, width: "50%" }}
            variant="outlined"
            color="info"
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
                  <KeyIcon sx={{ color: "white", opacity: "0.7" }} />
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <div className="flex flex-col w-[50%]">
            <Checkbox.Group defaultValue={["Remember_me"]}>
              <Checkbox value="Remember_me" color="gradient" className="flex ">
                <p className="flex justify-start items-center text-white font-[montserrat] text-[2vh] w-[50vh] h-[5vh] my-[0.1vh]">
                  I aggre to the Terms & Conditions
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
