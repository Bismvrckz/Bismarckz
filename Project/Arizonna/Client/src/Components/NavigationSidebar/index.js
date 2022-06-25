import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import leftPhoto from "../../Assets/img/leftPhoto.jpg";
import MainLogo from "../ArizonnaLogo";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { Link } from "react-router-dom";

export default function SideBar({ collapsedState, toggleCollapsed }) {
  const dispatch = useDispatch();
  let user = JSON.parse(localStorage.getItem("userInfo"));
  console.log(user);
  let userGlobalstate = useSelector((state) => state.auth);
  console.log(userGlobalstate);
  if (userGlobalstate.id) {
    user = userGlobalstate;
  }
  console.log(user);

  const [dummy, setdummy] = useState(0);

  function logOutClick() {
    dispatch(logout());
    localStorage.removeItem("userInfo");
    setdummy(1);
  }

  function sidebarIconToggle() {
    return collapsedState
      ? "flex justify-end items-start ml-[1.5vh] flex-col"
      : "flex justify-end items-start flex-col";
  }

  return (
    <ProSidebar
      onMouseEnter={toggleCollapsed}
      onMouseLeave={toggleCollapsed}
      image={leftPhoto}
      width={"20%"}
      className="relative"
      collapsed={collapsedState}
      collapsedWidth={"7%"}
    >
      <div className="ml-[4vh] mt-[2vh] w-[100%]">
        <MainLogo collapsedState={collapsedState} />
      </div>
      <div className="absolute -z-[1] bg-gradient-to-r from-gray-900 to-teal-900 w-[100%] h-[100%] opacity-[1]"></div>
      <Menu className={sidebarIconToggle()}>
        <MenuItem>
          {collapsedState ? (
            <div className="">
              <i class="fa-solid fa-compass ml-[2.5vh] "></i>
            </div>
          ) : (
            <i class="fa-solid fa-compass ml-[4vh] "> Dashboard</i>
          )}
        </MenuItem>
        <MenuItem>
          {collapsedState ? (
            <div className="">
              <i class="fa-solid fa-house-user ml-[2.5vh]"></i>
            </div>
          ) : (
            <i class="fa-solid fa-house-user ml-[4vh]"> My Page</i>
          )}
        </MenuItem>
        <MenuItem>
          {collapsedState ? (
            <div className="">
              <i class="fa-solid fa-gear ml-[2.5vh]"></i>
            </div>
          ) : (
            <i class="fa-solid fa-gear ml-[4vh]"> Settings</i>
          )}
        </MenuItem>
        {user ? (
          <MenuItem onClick={logOutClick}>
            {collapsedState ? (
              <i class="fa-solid fa-power-off ml-[2.5vh]"></i>
            ) : (
              <i class="fa-solid fa-power-off ml-[4vh]"> Logout</i>
            )}
          </MenuItem>
        ) : (
          <MenuItem>
            {collapsedState ? (
              <Link to="/login" className="no-underline text-sky-500">
                <i class="fa-solid fa-power-off ml-[2.5vh] "></i>
              </Link>
            ) : (
              <i class="fa-solid fa-power-off ml-[4vh]">
                <Link to="/login" className="no-underline text-sky-500">
                  {""} login
                </Link>
              </i>
            )}
          </MenuItem>
        )}
        {collapsedState ? (
          <MenuItem></MenuItem>
        ) : (
          <MenuItem>
            {user ? <i className="ml-[4vh]">"Halo {user.userName}"</i> : ""}
          </MenuItem>
        )}
      </Menu>
    </ProSidebar>
  );
}
