import { getSession } from "next-auth/react";
import React from "react";
import axiosInstance from "../services/axiosinstance";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function editProfile(props) {
  const { bio, username, createdAt, isVerified, fullname, email, user_avatar } =
    props.user.dataValues;

  return (
    <div className="bg-gradient-to-r flex items-center justify-center from-teal-900 to-cyan-900 w-[100vw] h-[100vh] relative">
      <div className="w-[95%] h-[95%] flex flex-col justify-evenly items-start z-[2]">
        <div id="changeUserImage" className="flex items-center">
          <img className="rounded-[50%] w-[10vw] h-[10vw]" src={user_avatar} />
          <label
            for="imageInput"
            className="font-[montserrat] cursor-pointer hover:bg-cyan-500 ml-[3vw] flex items-center justify-center bg-cyan-800 h-[5vh] w-[10vw] rounded-[3vh]"
          >
            <a className="cursor-pointer">Change Image</a>
            <input id="imageInput" className="hidden" type={"file"} />
          </label>
        </div>
        <TextField
          className="w-[20vw]"
          label="Username"
          variant="outlined"
          value={username}
          autoComplete="off"
          color="info"
        />
        <TextField
          className="w-[20vw]"
          label="Fullname"
          variant="outlined"
          value={fullname}
          autoComplete="off"
          color="info"
        />
        <TextField
          className="w-[50vw]"
          label="Bio"
          variant="outlined"
          value={bio}
          autoComplete="off"
          color="info"
        />
        <Button variant="contained">Save Changes</Button>
      </div>
      <div className="bg-black z-[1] w-[98vw] h-[98vh] opacity-[.3] rounded-[1vh] absolute" />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await getSession({ req: context.req });

    if (!session) return { redirect: { destination: "/login" } };
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

export default editProfile;
