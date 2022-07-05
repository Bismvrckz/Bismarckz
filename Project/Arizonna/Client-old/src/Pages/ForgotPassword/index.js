import MainLogo from "../../Components/ArizonnaLogo";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import mailPhoto from "../../Assets/img/mailbox_mailbox.svg";
import { Button, Loading } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [click, setClick] = useState(0);
  const [inputs, setInputs] = useState({
    Email: "",
  });

  function afterButtonClick() {
    setTimeout(() => {
      setClick(0);
    }, 3000);
  }

  function onButtonClick() {
    setClick(1);
  }

  const handleChange = (prop) => (event) => {
    setInputs({ ...inputs, [prop]: event.target.value });
  };

  return (
    <div className="h-[100vh] bg-gradient-to-r from-blue-900 to-green-800 flex justify-start items-center flex-col relative">
      <div className="flex justify-start mt-[10vh] pl-[15vh] mb-[3vh] w-[30%]">
        <MainLogo />
      </div>

      <img src={mailPhoto} className="rounded-[50%] w-[15%] z-[2] m-[0vh]" />

      <div className="w-[30%] z-[3] mt-[-18vh] rounded-[2vh bg-transparent font-[montserrat] flex flex-col items-center justify-center h-[60%] ">
        <div className="flex flex-col justify-center w-[80%]">
          <div className="text-[3vh] mb-[1vh] font-[500] text-white">
            Forgot password ?
          </div>
          <p className="text-[1.5vh] font-[200] text-gray-400">
            Please enter your registered email address. <br />
            We'll send instructions to help reset your <br />
            password.
          </p>

          <TextField
            color="info"
            autoComplete="off"
            id="outlined-basic"
            label="Email"
            sx={{ m: 0, width: "100%" }}
            onChange={handleChange("Email")}
            variant="outlined"
          />
        </div>
      </div>

      <div className="mt-[-18vh] z-[3] w-[24%] flex flex-col">
        {click ? (
          <Button clickable={false} size="xl">
            <Loading type="spinner" color="white" size="xl" />
            {afterButtonClick()}
          </Button>
        ) : (
          <Button onPress={onButtonClick} size="xl">
            Send reset instructions
          </Button>
        )}
      </div>

      <Link
        to="/login"
        className="hover:text-white no-underline absolute left-[8vh] top-[3vh]"
      >
        <i class="fa-solid fa-arrow-left-long" /> Back to Login
      </Link>

      <div className="absolute z-[1]  w-[30%] mt-[20vh] rounded-[2vh] opacity-25 bg-black h-[60%]" />
    </div>
  );
}
