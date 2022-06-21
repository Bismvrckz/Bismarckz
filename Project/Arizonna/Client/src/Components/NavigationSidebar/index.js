import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import leftPhoto from "../../Assets/img/leftPhoto.jpg";
import MainLogo from "../ArizonnaLogo";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";

export default function SideBar({ collapsedState, toggleCollapsed }) {
  return (
    <ProSidebar
      image={leftPhoto}
      width={"20%"}
      c
      className="relative"
      collapsed={collapsedState}
      collapsedWidth={"7%"}
    >
      <div className="ml-[4vh] mt-[2vh] w-[100%]" onClick={toggleCollapsed}>
        <MainLogo collapsedState={collapsedState} />
      </div>
      <div className="absolute -z-[1] bg-gradient-to-r from-gray-900 to-teal-900 w-[100%] h-[100%] opacity-[1]"></div>
      <Menu iconShape="square" className="flex justify-center">
        <MenuItem>
          <i class="fa-solid fa-compass"></i>
        </MenuItem>
        <SubMenu title={<i class="fa-solid fa-compass w-[30vh]"> Explore</i>}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
}
