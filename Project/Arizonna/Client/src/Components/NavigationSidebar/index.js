import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import leftPhoto from "../../Assets/img/leftPhoto.jpg";
import MainLogo from "../ArizonnaLogo";

export default function SideBar({ collapsedState, toggleCollapsed }) {
  function sidebarIconToggle() {
    return collapsedState
      ? "flex justify-center flex-col"
      : "flex justify-center flex-col";
  }
  return (
    <ProSidebar
      image={leftPhoto}
      width={"20%"}
      className="relative"
      collapsed={collapsedState}
      collapsedWidth={"7%"}
    >
      <div className="ml-[4vh] mt-[2vh] w-[100%]" onClick={toggleCollapsed}>
        <MainLogo collapsedState={collapsedState} />
      </div>
      <div className="absolute -z-[1] bg-gradient-to-r from-gray-900 to-teal-900 w-[100%] h-[100%] opacity-[1]"></div>
      <Menu iconShape="square" className={sidebarIconToggle()}>
        <MenuItem>
          {collapsedState ? (
            <div className="absolute left-[5.5vh]">
              <i class="fa-solid fa-compass "></i>
            </div>
          ) : (
            <i class="fa-solid fa-compass absolute left-[5.5vh] top-[1.7vh]">
              {" "}
              Dashboard
            </i>
          )}
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
}
