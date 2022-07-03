import { useState } from "react";
import SideBar from "../../Components/NavigationSidebar";
import Explore from "./Explore";
import MyProfile from "./Myprofile";
import Settings from "./Settingspage";

export default function Home() {
  const [collapsedState, setCollapsedState] = useState(true);
  const [page, setPage] = useState("explore");

  function setCollapsedTrue() {
    setCollapsedState(true);
  }

  function setRightPage(page) {
    setPage(page);
  }

  function renderPage() {
    switch (page) {
      case "explore":
        return <Explore />;
      case "myprofile":
        return <MyProfile />;
      case "settings":
        return <Settings />;
    }
  }
  function setCollapsedFalse() {
    setTimeout(setCollapsedState(false), 3000);
  }

  function ifSideCollapsed() {
    return collapsedState
      ? "bg-gradient-to-r from-teal-900 to-cyan-900 flex justify-start items-start w-[93%] absolute top-0 right-[0vh]  h-[100%] ease-in-out duration-100"
      : "bg-gradient-to-r from-teal-900 to-cyan-900 flex justify-start items-start w-[80%] absolute top-0 right-[0vh]  h-[100%] ease-in-out duration-300";
  }

  return (
    <div className="h-[100%] w-[100%] flex relative">
      <SideBar
        setRightPage={setRightPage}
        setCollapsedFalse={setCollapsedFalse}
        setCollapsedTrue={setCollapsedTrue}
        collapsedState={collapsedState}
      />
      <div className={ifSideCollapsed()}>{renderPage()}</div>
    </div>
  );
}
