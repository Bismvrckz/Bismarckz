import { useState } from "react";
import SideBar from "../../Components/NavigationSidebar";
import leftPhoto from "../../Assets/img/leftPhoto.jpg";

export default function Home() {
  const [collapsedState, setCollapsedState] = useState(false);

  function toggleCollapsed() {
    setCollapsedState(!collapsedState);
  }

  function a() {
    return "bg-gradient-to-r from-teal-900  to-cyan-900 w-[80%] opacity-[1] absolute top-0 right-[0vh]  h-[100%] ease-in-out duration-300";
  }

  function ifSideCollapsed() {
    return collapsedState
      ? "bg-gradient-to-r from-teal-900  to-cyan-900  w-[93%] opacity-[1] absolute top-0 right-[0vh]  h-[100%] ease-in-out duration-100"
      : a();
  }

  return (
    <div className="h-[100%] w-[100%] flex relative">
      <SideBar
        toggleCollapsed={toggleCollapsed}
        collapsedState={collapsedState}
      />
      <div className="border-l-[1px] z-[1] border-gray-600"></div>
      <div className={ifSideCollapsed()}>
        <img className="h-[10vh]" src={leftPhoto} />
        dawdawdasdw dwawwdawd wdawdwad wdawd
      </div>
      <div className="bg-black absolute w-[100%] -z-[1] h-[100%]"></div>
    </div>
  );
}
