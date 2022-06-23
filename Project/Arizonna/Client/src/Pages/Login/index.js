import { Checkbox, Button, Loading } from "@nextui-org/react";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import { OutlinedInput } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Navigate, Link } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/esm/AccountBox";
import KeyIcon from "@mui/icons-material/Key";
import MainLogo from "../../Components/ArizonnaLogo";
import axiosInstance from "../../services/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slices/authSlice";

export function Login() {
  const [currentUser, setCurrentUser] = useState();
  const globalstateUser = useSelector((state) => state.auth.userName);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    setCurrentUser(user);
  }, []);

  const [click, setClick] = useState(0);
  const [inputs, setInputs] = useState({
    nameOrEmail: "",
    password: "",
    showPassword: false,
  });

  const dispatch = useDispatch();

  const handleChange = (prop) => (event) => {
    setInputs({ ...inputs, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setInputs({
      ...inputs,
      showPassword: !inputs.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function afterSignInClick() {
    setTimeout(() => {
      setClick(0);
    }, 3000);
  }

  async function onSignInClick() {
    setClick(1);
    try {
      const usersCred = await axiosInstance.get("/users");
      const { nameOrEmail, password } = inputs;

      const filterRes = usersCred.data.filter((user) => {
        return user.userName == nameOrEmail || user.email == nameOrEmail;
      });

      if (!filterRes.length) {
        return alert("User tidak ditemukan");
      }

      if (filterRes[0].password != password) {
        return alert("password salah");
      }

      const user = filterRes[0];
      dispatch(login(user));

      const localStorageUserInfo = JSON.stringify({
        id: user.id,
        userName: user.userName,
      });
      localStorage.setItem("userInfo", localStorageUserInfo);
    } catch (error) {
      console.log(error);
      alert("Gagal, coba cek API");
    }
  }

  if (currentUser || globalstateUser) return <Navigate to="/" replace />;

  return (
    <div className="h-[100vh] bg-gradient-to-r from-blue-900 to-green-800 flex justify-center items-center flex-col relative z-[1]">
      <div className="flex justify-start pl-[15vh] w-[30%]">
        <MainLogo />
      </div>
      <div className="absolute z-[2] w-[30%]  rounded-[2vh] opacity-25 bg-black h-[60%]"></div>
      <div className="w-[30%] z-[3]  rounded-[2vh bg-transparent font-[montserrat] flex flex-col items-center justify-center h-[60%] ">
        <div className="flex flex-col justify-center w-[80%]">
          <div className="text-[3vh] mb-[1vh] font-[500] text-white">
            Sign in
          </div>
          <p className="text-[2vh] font-[200] text-white">Login to Arizonna</p>

          <TextField
            autoComplete="off"
            color="info"
            sx={{ m: 0, width: "100%" }}
            id="outlined-basic"
            label="Username or Email"
            onChange={handleChange("nameOrEmail")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBoxIcon sx={{ color: "white", opacity: "0.7" }} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <FormControl
            sx={{ mt: 1, width: "100%" }}
            variant="outlined"
            color="info"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              autoComplete="off"
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

          <div className="flex flex-col">
            <Checkbox.Group defaultValue={["Remember_me"]}>
              <Checkbox value="Remember_me" color="gradient" className="flex ">
                <p className="flex justify-start items-center text-white font-[montserrat] text-[2vh] w-[20vh] h-[5vh] my-[0.1vh]">
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
