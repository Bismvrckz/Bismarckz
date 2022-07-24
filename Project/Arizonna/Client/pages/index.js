import { Button } from "@mui/material";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axiosInstance from "../services/axiosinstance";
import MenuIcon from "@mui/icons-material/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home(props) {
  const [collapsedState, setcollapsedState] = useState(true);
  const [editProfileMenu, seteditProfileMenu] = useState(false);
  const [imgSource, setImgSource] = useState(
    props.user?.dataValues.user_avatar
  );
  const [mainPageContent, setmainPageContent] = useState("Explore");
  const [renderDummy, setRenderDummy] = useState(true);

  useEffect(() => {}, [renderDummy]);

  // console.log({ props });

  const { userPosts } = props;

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

  function ExplorePage() {
    if (!props.user?.dataValues) {
      return (
        <div className="w-[98%] h-[98%]">
          <div>abcd</div>
        </div>
      );
    }

    const {
      user_id,
      bio,
      username,
      createdAt,
      isVerified,
      fullname,
      email,
      user_avatar,
    } = props.user?.dataValues;

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
      </div>
    );
  }

  function MyProfilePage() {
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
      user_id,
      bio,
      username,
      createdAt,
      isVerified,
      fullname,
      email,
      user_avatar,
    } = props.user?.dataValues;

    async function addOneLike(user_id, post_id) {
      try {
        const detail = { user_id, post_id };
        const resAddNewLike = await axiosInstance.post(
          "/likes/newlike",
          detail
        );
        console.log("add new like");
        setRenderDummy(!renderDummy);
      } catch (error) {
        console.log({ error });
      }
    }

    function renderUserPosts() {
      if (!userPosts.length) {
        return (
          <div className="flex items-center justify-center w-[100%] h-[100%]">
            <p>
              {" "}
              You havent post anything yet,{" "}
              <a href="/postImage" className="text-blue-500 hover:underline">
                Post your first image!
              </a>
            </p>
          </div>
        );
      }

      const postMap = userPosts.map((post) => {
        // const { postLikes } = post;
        // const isLikedByCurrentUser = postLikes.map((like) => {
        //   return like.user_id == user_id;
        // })[0];

        return (
          <div className="w-[20vw] h-[25vw] flex flex-col items-start rounded-[1vh] border-gray-500 border my-[1vh] relative overflow-hidden">
            <a href={`/postDetail/${post.post_id}`} className="z-[2]">
              <img
                className="w-[20vw] h-[20vw] rounded-[1vh] z-[2]"
                src={post.postImage}
              />
            </a>
            <div className="flex flex-col items-between justify-between w-[100%] h-[2rem] z-[2]">
              <p className="text-[0.9rem] text-gray-400">{createdAt}</p>

              <div className="flex items-center">
                <FontAwesomeIcon
                  onClick={() => {
                    addOneLike(user_id, post.post_id);
                  }}
                  className="w-[1vw] h-[1vw] mr-[0.1vw]"
                  icon="fa-solid fa-heart"
                />
                <p>Likes: {post.postLikes.length}</p>
              </div>
              <p className="text-[1.2rem] font-[600]"> {post.caption}</p>
            </div>
            <div className="absolute w-[100%] h-[100%] bg-white blur-[60px] opacity-[.2]" />
          </div>
        );
      });

      return (
        <div className="flex flex-wrap items-start justify-evenly">
          {postMap}
        </div>
      );
    }

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
      <div className="flex items-center justify-evenly w-[98%] h-[98%]">
        <div className="w-[79%] h-[100%] overflow-auto scrollbar scrollbar-thumb-gray-500 scrollbar-track-white">
          {renderUserPosts()}
        </div>

        <div className="bg-gray-800 w-[20%] h-[100%] flex flex-col justify-end items-center rounded-[4vh] relative">
          <div className="absolute top-[3vh] w-[100%] flex flex-col items-center">
            <p className="w-[15vw] text-[2rem]">{fullname}</p>
            <p className="w-[15vw] font-[300]">{bio}</p>
          </div>

          <a
            href="/editProfile"
            className={
              editProfileMenu
                ? "bg-cyan-900 hover:bg-cyan-500 z-[1] w-[90%] h-[5vh] flex items-center mb-[1vh] rounded-[2vh] justify-center ease-in-out duration-300"
                : "bg-cyan-900 hover:bg-cyan-500 -z-[1] w-[90%] h-[0vh] flex items-center mb-[1vh] rounded-[2vh] justify-center ease-in-out duration-300"
            }
          >
            Edit Profile
          </a>
          <a
            href="/postImage"
            className={
              editProfileMenu
                ? "bg-green-900 hover:bg-green-500 z-[1] w-[90%] h-[5vh] flex items-center mb-[1vh] rounded-[2vh] justify-center ease-in-out duration-300"
                : "bg-green-900 hover:bg-green-500 -z-[1] w-[90%] h-[0vh] flex items-center mb-[1vh] rounded-[2vh] justify-center ease-in-out duration-300"
            }
          >
            New Post
          </a>
          <div className="border-t-[0.1vh] h-[8vh] border-cyan-500 flex flex-col items-center justify-end rounded-[4vh] w-[100%] ease-in-out duration-100">
            <div className="flex justify-between items-center w-[100%]">
              <img src={imgSource} className="w-[4vw] h-[4vw] rounded-[50%]" />
              <div>
                <p className="font-[600] text-[0.7rem]">{username}</p>
                <p className="font-[400] text-[0.7rem]">{email}</p>
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

    const { accessToken, user_id } = session.user;

    // resultSession
    // accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNjU3OTczODQ1NTE3LCJ1c2VybmFtZSI6IjEyMyIsImlhdCI6MTY1Nzk3NDcwNX0.P3sxGVgKGbIRzGVHAPrkC8Lc6moegAFRObd-MiNuk5s";
    // user_id: 1657973845517;
    // username: "123";

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const resGetUser = await axiosInstance.get(`/users/${user_id}`, config);

    const resGetUserPersonalPost = await axiosInstance.get(`/posts`, config);

    return {
      props: {
        user: resGetUser.data,
        accessToken,
        userPosts: resGetUserPersonalPost.data.data,
      },
    };
  } catch (error) {
    const errorMessage = error.message;
    return { props: { errorMessage } };
  }
}

export default Home;
