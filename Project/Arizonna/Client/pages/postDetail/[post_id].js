import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, TextField } from "@mui/material";
import { getSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../services/axiosinstance";

function postDetail(props) {
  const { accessToken } = props;
  const { postDetail } = props;
  const { userData } = props;
  const { poster } = props;
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState(postDetail.postComments);
  const [likesCount, setLikesCount] = useState(postDetail.postLikes.length);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const isLikedByCurrentUser = postDetail.postLikes.find((postLike) => {
      return postLike.user_id == userData.user_id;
    });

    if (isLikedByCurrentUser) {
      return setLiked(true);
    }
  }, []);

  const getComments = async () => {
    const session = await getSession();
  };

  const commentsMap = comments.map((comment) => {
    return (
      <div className="w-[90%] flex items-center my-[1vh]">
        <img
          src={comment.user_avatar}
          className="w-[2.5vw] h-[2.5vw] rounded-[50%] mr-[1vw]"
        />
        <div>
          <p className="font-[600]">{comment.username}</p>
          <p className="text-[.9rem]">-{comment.commentPhrase}</p>
        </div>
      </div>
    );
  });

  commentsMap.reverse();

  // const sortedComments = postDetail.postComments.sort((first, second) => {
  //   const firstDate = first.createdAt.slice(0,10) + first.createdAt.slice(12,19)
  //   const secondDate = second.createdAt.slice(0,10) + second.createdAt.slice(12,19)
  //
  // });

  console.log(postDetail.postComments);
  console.log(postDetail);

  function onImageDoubleClick() {
    if (liked) {
      setLikesCount(likesCount - 1);
      setLiked(false);
    } else if (!liked) {
      setLikesCount(likesCount + 1);
      setLiked(true);
    }
    //   liked
    //     ? () => {
    //         setLikesCount(likesCount - 1);
    //         setLiked(false);
    //         return;
    //       }
    //     : () => {
    //         setLikesCount(likesCount + 1);
    //         setLiked(true);
    //         return;
    //       };
  }

  function onCommentInputChange(event) {
    setCommentInput(event.target.value);
  }

  async function onClickAddComment() {
    try {
      if (!commentInput) return;

      const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
      };

      const body = { postDetail, userData, commentInput };

      const resPostComments = await axiosInstance.post(
        "/comments",
        body,
        config
      );

      console.log({ resPostComments });
      setComments([
        ...comments,
        {
          username: userData.username,
          user_avatar: userData.user_avatar,
          commentPhrase: commentInput,
        },
      ]);
    } catch (error) {
      console.log({ error });
    } finally {
      setCommentInput("");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-teal-900 to-cyan-900 w-[100vw] h-[100vh] relative">
      <div className="w-[98%] h-[98%] flex z-[2] rounded-[1vh] overflow-hidden">
        <div id="bagian-kiri" className="flex flex-col">
          <img
            onDoubleClick={onImageDoubleClick}
            src={postDetail.postImage}
            className="rounded-[1vh] w-[45vw] h-[45vw] hover:cursor-pointer"
          />
          <div className="ml-[1vw]">
            <p className="font-[600] text-[1.5rem]">{poster.username}</p>
            <p className="font-[200]">{likesCount} Likes</p>
          </div>
        </div>
        <div id="bagian-kanan" className="flex flex-col w-[51vw] mx-[2vw]">
          <div className="flex my-[2vh] h-[10vh] items-center">
            <img
              className="w-[2.5vw] h-[2.5vw] rounded-[50%]"
              src={poster.user_avatar}
            />
            <div className="flex flex-col pl-[1vw]">
              <div className="flex">
                <p className="font-[600] mr-[0.3vw]">{poster.username}</p> -
                <p className="mx-[0.3vw]">"{postDetail.caption}"</p>
              </div>
              <p>{postDetail.createdAt.slice(0, 10)}</p>
            </div>
          </div>
          <div className="w-[100%] flex">
            <TextField
              onChange={onCommentInputChange}
              value={commentInput}
              sx={{ width: "75%" }}
              variant="outlined"
              label="Add a comment"
            />
            <Button
              onClick={onClickAddComment}
              sx={{ width: "20%", ml: "1vw" }}
              variant="contained"
            >
              Post comment
            </Button>
          </div>
          <div className="w-[51vw] h-[65.6vh] flex flex-col border border-gray-500 rounded-[1vh] items-center justify-start mt-[3vh] overflow-auto scrollbar">
            {/* {comments.length ? (
              commentsMap
            ) : (
              <p className="mt-[3vh]">"Nobody has commented yet."</p>
            )} */}
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

    const resGetPostDetail = await axiosInstance.get(
      `/posts/${post_id}`,
      config
    );

    const userData = resGetUser.data.dataValues;
    const postDetail = resGetPostDetail.data.detail[0];

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
