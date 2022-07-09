import * as React from "react";
import NextLink from "next/link";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import MainLogo from "../mainLogo";
import Link from "next/link";
import { Navigate } from "react-router-dom";

function Navbar({ collapsedState, setcollapsedState, setmainPageContent }) {
  return (
    <ProSidebar
      width={"22vw"}
      collapsedWidth={"5.7vw"}
      className={"relative ease-in-out duration-300"}
      collapsed={collapsedState}
      onMouseOver={() => {
        setcollapsedState(false);
      }}
      onMouseLeave={() => {
        setcollapsedState(true);
      }}
    >
      <div className="absolute -z-[2] bg-gradient-to-r from-gray-900 to-teal-900 w-[100%] h-[100vh] opacity-[1]"></div>
      <div className="absolute blur-2xl -z-[1] bg-white opacity-[.1] w-[100%] h-[100vh] opacity-[1]"></div>

      <Menu className="flex flex-col w-[15vw] pl-[2vw] h-[30vh] absolute z-10">
        <div className="w-[100%] ml-[-2.5vw] mt-[2vh]">
          <MainLogo collapsedState={collapsedState} />
        </div>
        <MenuItem
          className="my-[3vh]"
          onClick={() => {
            setmainPageContent("Explore");
          }}
        >
          <i class="fa-solid fa-compass">{collapsedState ? "" : " Explore"}</i>
        </MenuItem>
        <MenuItem
          className="my-[3vh]"
          onClick={() => {
            setmainPageContent("");
          }}
        >
          <i class="fa-solid fa-house-chimney-user">
            {collapsedState ? "" : " My Profile"}
          </i>
        </MenuItem>
        <MenuItem className="my-[3vh]">
          <a href="/signin">
            <i class="fa-solid fa-arrow-right-to-bracket">
              {collapsedState ? "" : " Sign In"}
            </i>
          </a>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
}

export default Navbar;
