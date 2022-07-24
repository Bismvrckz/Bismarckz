import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, TextField } from "@mui/material";
import { getSession } from "next-auth/react";
import React, { useState } from "react";
import axiosInstance from "../../services/axiosinstance";

function postDetail(props) {
  const { userData } = props;
  const { postDetail } = props;
  const { poster } = props;
  const [comments, setComments] = useState(postDetail.postComments);

  console.log({ props });
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-teal-900 to-cyan-900 w-[100vw] h-[100vh] relative">
      <div className="w-[98%] h-[98%] flex z-[2] rounded-[1vh] overflow-hidden">
        <div id="bagian-kiri" className="flex flex-col">
          <img
            src={postDetail.postImage}
            className="rounded-[1vh] w-[45vw] h-[45vw]"
          />
          <div className="ml-[1vw]">
            <p className="font-[600] text-[1.5rem]">{poster.username}</p>
            <p className="font-[200]">{postDetail.postLikes.length} Likes</p>
          </div>
        </div>
        <div id="bagian-kanan" className="flex flex-col w-[51vw] mx-[2vw]">
          <div className="flex my-[2vh] h-[10vh] items-center">
            <img
              className="w-[2vw] h-[2vw] rounded-[50%]"
              src={poster.user_avatar}
            />
            <p className="font-[600] mx-[0.3vw]">{poster.username}</p> -
            <p className="mx-[0.3vw]">"{postDetail.caption}"</p>
          </div>
          <div className="w-[100%] flex">
            <TextField
              sx={{ width: "75%" }}
              variant="outlined"
              label="Add a comment"
            />
            <Button sx={{ width: "20%", ml: "1vw" }} variant="contained">
              Post comment
            </Button>
          </div>
          <div className="w-[51vw] h-[65.6vh] flex flex-col border border-gray-500 rounded-[1vh] items-center justify-center mt-[3vh]">
            {comments.length ? comments : "Nobody has commented yet."}
          </div>
          <a
            href="/"
            className="mt-[2vh] w-[100%] flex justify-end items-center hover:text-cyan-600"
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
            <p className="mx-[0.5vw]">Back to Home</p>
          </a>
        </div>
      </div>
      <div className="w-[98%] h-[98%] bg-black absolute opacity-[.3] rounded-[1vh] z-[1]" />
    </div>
  );
}

export default postDetail;

export async function getServerSideProps(context) {
  try {
    const session = await getSession({ req: context.req });

    if (!session) return { redirect: { destination: "/" } };

    const { accessToken, user_id } = session.user;

    const { post_id } = context.params;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const resGetUser = await axiosInstance.get(`/users/${user_id}`, config);

    const resGetPostDetail = await axiosInstance.get(`/posts/${post_id}`);

    const postDetail = resGetPostDetail.data.detail[0];
    const userData = resGetUser.data.dataValues;

    const poster_id = resGetPostDetail.data.detail[0].user_id;

    const resGetPostUser = await axiosInstance.get(
      `/users/${poster_id}`,
      config
    );

    const poster = resGetPostUser.data.dataValues;

    return {
      props: { accessToken, user_id, postDetail, userData, poster },
    };
  } catch (error) {
    console.log({ error });
    const { message } = error;
    return {
      props: { message },
    };
  }
}
