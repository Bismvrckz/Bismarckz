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
      <Menu className={sidebarIconToggle()}>
        <MenuItem>
          {collapsedState ? (
            <div className="">
              <i class="fa-solid fa-compass ml-[2.5vh] ease-in-out duration-[2000]"></i>
            </div>
          ) : (
            <i class="fa-solid fa-compass  ease-in-out duration-[2000]">
              {" "}
              Dashboard
            </i>
          )}
        </MenuItem>
        <MenuItem>
          {collapsedState ? (
            <div className="">
              <i class="fa-solid fa-house-user ml-[2.5vh] ease-in-out duration-[2000]"></i>
            </div>
          ) : (
            <i class="fa-solid fa-house-user  ease-in-out duration-[2000]">
              {" "}
              My Page
            </i>
          )}
        </MenuItem>
        <MenuItem>
          {collapsedState ? (
            <div className="">
              <i class="fa-solid fa-gears ml-[2.5vh] ease-in-out duration-[2000]"></i>
            </div>
          ) : (
            <i class="fa-solid fa-gears  ease-in-out duration-[2000]">
              {" "}
              Settings
            </i>
          )}
        </MenuItem>
        <MenuItem>
          {collapsedState ? (
            <div className="">
              <i class="fa-solid fa-power-off ml-[2.5vh] ease-in-out duration-[2000]"></i>
            </div>
          ) : (
            <i class="fa-solid fa-power-off  ease-in-out duration-[2000]">
              {" "}
              Logout
            </i>
          )}
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
}
