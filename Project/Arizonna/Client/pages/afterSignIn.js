import React from "react";

function afterSignIn() {
  return (
    <div className="h-[100vh] text-[5rem] font-[500] font-[montserrat] bg-gradient-to-r from-blue-900 to-green-800 flex justify-center items-center flex-col relative ">
      Welcome!
      <a href="/" className="text-[1rem] hover:text-blue-500">
        Continue to Arizonna
      </a>
    </div>
  );
}

export default afterSignIn;
