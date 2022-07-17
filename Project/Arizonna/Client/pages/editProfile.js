import { getSession } from "next-auth/react";
import React from "react";
import axiosInstance from "../services/axiosinstance";

function editProfile(props) {
  const { bio, username, createdAt, isVerified, fullname, email, user_avatar } =
    props.user.dataValues;

  return (
    <div className="bg-gradient-to-r flex items-center justify-center from-teal-900 to-cyan-900 w-[100vw] h-[100vh]">
      <div className="w-[95%] h-[95%]">
        <img className="rounded-[50%] w-[10vw] h-[10vw]" src={user_avatar} />
        {bio}
      </div>
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
