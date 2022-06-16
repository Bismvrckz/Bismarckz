import { Checkbox, Button, Loading } from "@nextui-org/react";
import { useState, useEffect } from "react";

export function Home() {
  const [click, setClick] = useState(0);

  // useEffect(setTimeout(afterSignInClick, 2000), [click]);

  function afterSignInClick() {
    setTimeout(() => {
      setClick(0);
    }, 3000);
  }

  function onSignInClick() {
    setClick(1);
  }

  function abc() {}

  return (
    <div className="h-[100vh] bg-gradient-to-r from-blue-800 to-green-800 flex justify-center items-center flex-col">
      <p className="text-white text-[5vh] font-[300]">
        <i class="fa-brands fa-atlassian text-cyan-500"></i> Arizonna
      </p>
      <div className="w-[30%]  rounded-[2vh] opacity-100 bg-[#1E1E1E] font-[montserrat] flex flex-col items-center justify-center h-[50%] ">
        <div className="flex flex-col justify-center w-[80%]">
          <div className="text-[3vh] mb-[1vh] font-[500] text-white">
            Sign in
          </div>
          <p className="text-[2vh] font-[200] text-white">Login to Arizonna</p>
          <input
            placeholder="Email"
            className="my-[0.5vh] bg-transparent border-solid border-cyan-500 focus:border-teal-500 focus:drop-shadow-[1px_0px_45px_-20px_rgba(93,225,247,0.75)] border-[0.1vh] rounded w-[100%] h-[5vh] text-white"
          ></input>
          <input
            placeholder="Password"
            type="password"
            className="my-[0.5vh] bg-transparent border-solid border-cyan-500 focus:border-teal-500 focus:drop-shadow-[1px_0px_45px_-20px_rgba(93,225,247,0.75)] border-[0.1vh] rounded w-[100%] h-[5vh] text-white"
          ></input>
          <div className="flex flex-col">
            <Checkbox.Group defaultValue={["Remember_me"]}>
              <Checkbox value="Remember_me" color="gradient">
                <p className="text-white font-[montserrat] mt-[1.5vh]">
                  Remember me
                </p>
              </Checkbox>
            </Checkbox.Group>
            {click ? (
              <Button clickable={false}>
                <Loading type="spinner" color="white" size="xl" />
                {afterSignInClick()}
              </Button>
            ) : (
              <Button onPress={onSignInClick} size="lg">
                Sign in
              </Button>
            )}
          </div>
        </div>
      </div>
      <p className="mt-[2vh]">
        Don't have an account?{" "}
        <a href="" className="no-underline">
          Sign up
        </a>
      </p>
      <a href="" className="no-underline">
        Forgot password?
      </a>
    </div>
  );
}
