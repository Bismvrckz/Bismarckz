import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function postImage() {
  const [imgSource, setImgSource] = useState(null);
  const [avatar, setAvatar] = useState(null);

  function onAddImage(event) {
    setAvatar(event.target.files[0]);
    setImgSource(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <div className="bg-gradient-to-r from-teal-900 to-cyan-900 h-[100vh] w-[100vw] flex items-center justify-center relative">
      <div className="z-[2] w-[98vw] h-[98vh] rounded-[1vh] flex overflow-hidden">
        <div className="w-[30%] flex justify-center ">
          {imgSource ? (
            <div>
              <img
                className="w-[40vh] h-[40vh] mt-[10vh] rounded-[3vh]"
                src={imgSource}
              />
              <label for="changeImage" className="">
                <p className="cursor-pointer flex items-center justify-center w-[100%] h-[5vh] mt-[5vh] rounded-[2vh] hover:bg-cyan-500 bg-cyan-900">
                  Change Image
                </p>
                <input
                  className="hidden"
                  onChange={onAddImage}
                  id="changeImage"
                  type={"file"}
                />
              </label>
            </div>
          ) : (
            <label
              for="inputImage"
              className="w-[40vh] h-[40vh] mt-[10vh] rounded-[3vh] border-2 cursor-pointer flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon="fa-solid fa-plus"
                className="w-[20%] h-[20%]"
              />
              <input
                className="hidden"
                onChange={onAddImage}
                id="inputImage"
                type={"file"}
              />
            </label>
          )}
        </div>
        <div className="bg-cyan-500 w-[70%]">textfield</div>
      </div>
      <div className="bg-black z-[1] w-[98vw] h-[98vh] opacity-[.1] rounded-[1vh] absolute" />
    </div>
  );
}

export default postImage;
