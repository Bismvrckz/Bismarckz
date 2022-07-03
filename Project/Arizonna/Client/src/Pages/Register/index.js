import leftPhoto from "../../Assets/img/leftPhoto.jpg";
import { TextField, InputAdornment } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/esm/AccountBox";
import { useEffect, useState } from "react";
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
import MainLogo from "../../Components/ArizonnaLogo";
import axiosInstance from "../../services/axiosInstance";
import { useSelector } from "react-redux";

export function Register() {
  const [click, setClick] = useState(0);
  const [inputs, setInputs] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
  });
  const [currentUser, setCurrentUser] = useState();
  const [emailErr, setEmailErr] = useState({ invalid: false, used: false });
  const [passwordErr, setPasswordErr] = useState({
    invalid: false,
    dontMatch: false,
  });
  const [userNameErr, setUserNameErr] = useState({
    empty: false,
    used: false,
  });
  const globalstateUser = useSelector((state) => state.auth.userName);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (globalstateUser.id) {
      user = globalstateUser;
    }
    setCurrentUser(user);
  }, []);

  const handleChange = (prop) => (event) => {
    setInputs({ ...inputs, [prop]: event.target.value });
  };

  function afterSignInClick() {
    setTimeout(() => {
      setClick(0);
    }, 3000);
  }

  async function onSignUpClick() {
    setClick(1);
    const errors = 0;
    try {
      const { userName, email, password, confirmPassword } = inputs;

      if (!userName) {
        setUserNameErr({ ...userNameErr, empty: true });
        errors++;
      } else {
        const foundUsername = await axiosInstance.get("/users", {
          params: { userName },
        });
        if (foundUsername.data.result.length) {
          return setUserNameErr({ ...userNameErr, used: true });
        }
      }

      if (!email) {
        setEmailErr({ ...emailErr, invalid: true });
      } else {
        let validator = require("email-validator");
        let validEmailFormat = validator.validate(email);
        if (!validEmailFormat) {
          setEmailErr({ ...emailErr, invalid: true });
        }
        const foundEmail = await axiosInstance.get("/users", {
          params: { email },
        });
        if (foundEmail.data.result.length) {
          setEmailErr({ ...emailErr, used: true });
        }
      }

      if (!password) {
        setPasswordErr({ ...passwordErr, invalid: true });
      }
      if (password != confirmPassword) {
        setPasswordErr({ ...passwordErr, dontMatch: true });
      }

      if (!userName || !email || !password || !confirmPassword) return;

      const idMaker = new Date();
      const user_id = idMaker.getTime();
      let postFormat = {
        user_id,
        userName,
        email,
        password,
      };

      await axiosInstance.post("/users", { postFormat });
      alert("Berhasil Register");
    } catch (error) {
      console.log({ error });
      alert("Gagal, coba cek API");
    }
  }

  const handleClickShowPassword = () => {
    setInputs({
      ...inputs,
      showPassword: !inputs.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  if (currentUser) return <Navigate to="/" replace />;

  return (
    <div className="h-[100vh] bg-gradient-to-r from-blue-900 to-green-800 flex justify-start items-start flex-col">
      <div className="flex items-start justify-start ml-[7vh] mt-[2vh]">
        <MainLogo />
      </div>
      <div className="grow grid grid-cols-2 w-[100%]">
        <div className="flex justify-center items-center">
          <img
            alt=""
            src={leftPhoto}
            className="rounded-[50%] w-[80%] brightness-[.85]"
          />
        </div>
        <div className="flex flex-col justify-start">
          <p className="font-[montserrat] text-white text-[3vh] font-[500] mt-[10vh]">
            Create your account
          </p>
          <p className="font-[montserrat] text-gray-400 text[1.5vh] font-[300]">
            Created for developers by developers
          </p>

          <TextField
            error={userNameErr.empty || userNameErr.used}
            onFocus={() => {
              setUserNameErr({ empty: false, used: false });
            }}
            autoComplete="off"
            color="info"
            onChange={handleChange("userName")}
            sx={{ my: 0.5, width: "50%" }}
            id="outlined-basic"
            label="Username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBoxIcon sx={{ color: "white", opacity: "0.7" }} />
                </InputAdornment>
              ),
            }}
            helperText={userNameErr.used ? "Username already used" : ""}
            variant="outlined"
          />
          <TextField
            error={emailErr.invalid || emailErr.used}
            onFocus={() => {
              setEmailErr({ invalid: false, used: false });
            }}
            autoComplete="off"
            color="info"
            onChange={handleChange("email")}
            sx={{ my: 0.5, width: "50%" }}
            id="outlined-basic"
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "white", opacity: "0.7" }} />
                </InputAdornment>
              ),
            }}
            helperText={emailErr.used ? "Email already used" : ""}
            variant="outlined"
          />
          <FormControl
            sx={{ my: 0.5, width: "50%" }}
            variant="outlined"
            color="info"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={inputs.showPassword ? "text" : "password"}
              value={inputs.password}
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
                    {inputs.showPassword ? <VisibilityOff /> : <Visibility />}
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
          <TextField
            autoComplete="off"
            color="info"
            onChange={handleChange("confirmPassword")}
            sx={{ my: 0.5, width: "50%" }}
            id="outlined-basic"
            type="password"
            label="Confirm Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon sx={{ color: "white", opacity: "0.7" }} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />

          <div className="flex flex-col w-[50%]">
            <div className="flex items-center my-[2vh]">
              <Checkbox.Group defaultValue={["Remember_me"]}>
                <Checkbox value="Remember_me" color="gradient" S></Checkbox>
              </Checkbox.Group>
              <p className="text-white font-[montserrat] mb-0 ml-[1vh]">
                I aggre to the
              </p>
              <a href="" className="ml-[1vh] font-[montserrat] ">
                Terms & Conditions
              </a>
            </div>

            {click ? (
              <Button clickable={false} size="xl">
                <Loading type="spinner" color="white" size="xl" />
                {afterSignInClick()}
              </Button>
            ) : (
              <Button onPress={onSignUpClick} size="xl">
                Sign up
              </Button>
            )}

            <div className="flex justify-center mt-[2vh]">
              <p className="mt-[2vh] text-[white]">
                Already have an account? <span> </span>
                <Link to="/login" className="no-underline text-sky-500">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
