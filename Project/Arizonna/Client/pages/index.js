import { Button } from "@mui/material";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axiosInstance from "../services/axiosinstance";
import MenuIcon from "@mui/icons-material/Menu";

function Home(props) {
  const [collapsedState, setcollapsedState] = useState(true);
  const [editProfileMenu, seteditProfileMenu] = useState(false);

  const { accessToken } = props;

  function editProfileOption() {
    seteditProfileMenu(!editProfileMenu);
  }

  async function resendVerificationMail() {
    try {
      console.log(props);
      await axiosInstance.post("users/resendVerificationMail", props);
      alert("kirim");
    } catch (error) {
      console.log({ error });
    }
  }

  // console.log(props.user?.dataValues);
  // console.log(props);
  // bio: "";
  // createdAt: "2022-07-17T01:21:51.000Z";
  // email: "123@mail.com";
  // fullname: "";
  // isVerified: false;
  // updatedAt: "2022-07-17T01:21:51.000Z";
  // user_avatar: "C:/Users/Wicked Wench/Documents/GitHub/GeneralRepo/Project/Arizonna/Api/public/userAvatar/default-avatar.png";
  // user_id: 1658020911881;
  // user_password: "$2a$10$/5aXe7bp4PnwUNQHPK7cIeCIHik1Ce90lwsQJ6dOIG5ImJAongJ5C";
  // username: "07M@r200412430";

  // async function asyncGetSession() {
  //   try {
  //     const a = await getSession();
  //     console.log(a.user.accessToken);
  //     return;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   asyncGetSession();
  // }, []);

  function ExplorePage() {
    if (!props.user?.dataValues) {
      return (
        <div className="w-[98%] h-[98%]">
          <div>abcd</div>
          <img src={require("../public/static/user.png")} />
        </div>
      );
    }

    const { bio, username, createdAt, isVerified } = props.user.dataValues;

    if (!isVerified)
      return (
        <div className="relative w-[100%] h-[100%] flex items-center justify-center">
          <div className=" flex flex-col flex items-center justify-center w-[98%] h-[98%]">
            <p>Please verify your email first.</p>
            <Button
              variant="contained"
              className="font-[montserrat] mt-[1vh]"
              onClick={resendVerificationMail}
            >
              Resend verification mail
            </Button>
          </div>
          <div className="bg-gray-500 opacity-[.8] rounded-[1vw] blur-sm absolute w-[98%] h-[98%] -z-[3]" />
        </div>
      );

    return (
      <div className="bg-cyan-500 opacity-[.2] w-[98%] h-[98%]">
        <div>abcd</div>
        <img src={require("../public/static/user.png")} />
      </div>
    );
  }

  function MyProfilePage() {
    // console.log(props);
    if (!props.user?.dataValues) {
      return (
        <div className="w-[98%] flex flex-col items-center justify-center h-[98%]">
          <p className="text-[2rem] mb-[3vh]">You are not Signed In</p>
          <Button variant="outlined" className="w-[6vw] h-[2vw] ">
            <a href="/signin">Sign In</a>
          </Button>
        </div>
      );
    }
    const {
      bio,
      username,
      createdAt,
      isVerified,
      fullname,
      email,
      user_avatar,
    } = props.user.dataValues;

    if (!isVerified)
      return (
        <div className="relative w-[100%] h-[100%] flex items-center justify-center">
          <div className=" flex flex-col flex items-center justify-center w-[98%] h-[98%]">
            <p>Please verify your email first.</p>
            <Button
              variant="contained"
              className="font-[montserrat] mt-[1vh]"
              onClick={resendVerificationMail}
            >
              Resend verification mail
            </Button>
          </div>
          <div className="bg-gray-500 opacity-[.8] rounded-[1vw] blur-sm absolute w-[98%] h-[98%] -z-[3]" />
        </div>
      );

    return (
      <div className="flex items-center justify-center w-[98%] h-[98%]">
        <div className="w-[80%] h-[100%] border-solid border-2 border-sky-500">
          posts
        </div>
        <div className="bg-gray-800 w-[20%] h-[100%] flex flex-col justify-end items-center rounded-[3vh] relative">
          <div className="absolute top-[3vh] w-[100%] flex flex-col items-center">
            <p className="w-[15vw] text-[2rem]">{fullname}</p>
            <p className="w-[15vw] font-[300]">{bio}</p>
          </div>

          <a
            href="/editProfile"
            className={
              editProfileMenu
                ? "bg-cyan-600 z-[1] w-[90%] h-[5vh] flex items-center mb-[1vh] rounded-[2vh] justify-center ease-in-out duration-300"
                : "bg-cyan-600 -z-[1] w-[90%] h-[0vh] flex items-center mb-[1vh] rounded-[2vh] justify-center ease-in-out duration-300"
            }
          >
            Edit Profile
          </a>
          <div className="border-t-[0.1vh] h-[8vh] border-cyan-500 flex flex-col items-center justify-end rounded-[3vh] w-[100%] ease-in-out duration-100">
            <div className="flex justify-between items-center w-[100%]">
              <img
                src={user_avatar}
                className="w-[4vw] h-[4vw] rounded-[50%]"
              />
              <div>
                <p className="font-[600]">{username}</p>
                <p className="font-[400]">{email}</p>
              </div>
              <button onClick={editProfileOption}>
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
        {mainPageContent == "Explore" ? ExplorePage() : MyProfilePage(props)}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await getSession({ req: context.req });

    const noSession = "Fuckoff";

    if (!session) return { props: { noSession } };
    // console.log("jalan");

    const { accessToken, user_id, username } = session.user;

    // resultSession
    // accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNjU3OTczODQ1NTE3LCJ1c2VybmFtZSI6IjEyMyIsImlhdCI6MTY1Nzk3NDcwNX0.P3sxGVgKGbIRzGVHAPrkC8Lc6moegAFRObd-MiNuk5s";
    // user_id: 1657973845517;
    // username: "123";

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const res = await axiosInstance.get(`/users/${user_id}`, config);

    // console.log(res);

    return { props: { user: res.data, accessToken } };
  } catch (error) {
    const errorMessage = error.message;
    return { props: { errorMessage } };
  }
}

export default Home;
