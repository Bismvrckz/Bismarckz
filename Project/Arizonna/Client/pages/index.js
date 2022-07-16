import { useState } from "react";
import Navbar from "../components/navbar";
import ExplorePage from "./explore/index.js";
import MyProfilePage from "./myprofile/index.js";

export default function Home() {
  const [collapsedState, setcollapsedState] = useState(true);

  const [mainPageContent, setmainPageContent] = useState("Explore");

  function mainPageClass() {
    return collapsedState
      ? "w-[94.3vw] z-[20] bg-gradient-to-r from-teal-900 to-cyan-900 flex justify-center items-center absolute top-0 right-0 h-[100vh] ease-in-out duration-300"
      : "w-[78vw] z-[20] bg-gradient-to-r from-teal-900 to-cyan-900 flex justify-center items-center absolute top-0 right-0 h-[100vh] ease-in-out duration-300";
  }
  return (
    <div className="flex text-white font-[montserrat]">
      <Navbar
        setcollapsedState={setcollapsedState}
        collapsedState={collapsedState}
        setmainPageContent={setmainPageContent}
      />
      <div className={mainPageClass()}>
        {mainPageContent == "Explore" ? <ExplorePage /> : <MyProfilePage />}
      </div>
    </div>
  );
}
