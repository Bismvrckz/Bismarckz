import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axiosInstance from "../../services/axiosinstance";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import { getSession } from "next-auth/react";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

function postDetail(props) {
  const { poster } = props;
  const { userData } = props;
  const { postDetail } = props;
  const { accessToken } = props;
  const [liked, setLiked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [commentInput, setCommentInput] = useState("");
  const [commentsOffset, setCommentsOffset] = useState(1);
  const [comments, setComments] = useState(postDetail.postComments);
  const [likesCount, setLikesCount] = useState(postDetail.postLikes.length);
  const [postOwner, setPostOwner] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const isLikedByCurrentUser = postDetail.postLikes.find((postLike) => {
      return postLike.user_id == userData.user_id;
    });

    if (isLikedByCurrentUser) {
      setLiked(true);
    }

    if (postDetail.user_id == userData.user_id) {
      setPostOwner(true);
    }
  }, []);

  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const { user_id, post_id } = props;

  console.log({ props });

  const getMoreComments = async () => {
    const { accessToken } = props;

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { post_id } = props;

    const body = {
      commentLimit: 5,
      commentOffset: commentsOffset * 5,
    };

    const resGetPostComments = await axiosInstance.post(
      `/posts/${post_id}`,
      body,
      config
    );

    const moreComment = resGetPostComments.data.detail[0].postComments;

    setComments([...comments, ...moreComment]);

    setCommentsOffset(commentsOffset + 1);
  };

  const commentsMap = comments.map((comment) => {
    return (
      <div className="w-[90%] flex items-center my-[1vh]">
        {/* <img
          src={comment.user_avatar}
          className="w-[2.5vw] h-[2.5vw] rounded-[50%] mr-[1vw]"
        /> */}
        <div>
          <p className="font-[600]">{comment.username}</p>
          <p className="text-[.9rem]">-{comment.commentPhrase}</p>
        </div>
      </div>
    );
  });

  async function alterLikeTrigger() {
    if (liked) {
      const likeData = { user_id, post_id };

      const resRemoveLike = await axiosInstance.post(
        `/likes/alterLike`,
        likeData
      );

      console.log({ resRemoveLike });

      setLikesCount(likesCount - 1);
      setLiked(false);
    } else if (!liked) {
      const likeData = { user_id, post_id };

      const resAddLike = await axiosInstance.post(`/likes/alterLike`, likeData);

      console.log({ resAddLike });

      setLikesCount(likesCount + 1);
      setLiked(true);
    }
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

      setComments([
        {
          username: userData.username,
          user_avatar: userData.user_avatar,
          commentPhrase: commentInput,
        },
        ...comments,
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
            onDoubleClick={alterLikeTrigger}
            src={postDetail.postImage}
            className="rounded-[1vh] w-[45vw] h-[45vw] hover:cursor-pointer"
          />
          <div className="ml-[1vw]">
            <p className="font-[600] text-[1.5rem]">{poster.username}</p>
            <p className="font-[200]">
              <FontAwesomeIcon
                onClick={alterLikeTrigger}
                icon="fa-solid fa-heart"
                className={
                  liked
                    ? "mr-[1vw] text-red-500 hover:cursor-pointer"
                    : "mr-[1vw] hover:cursor-pointer"
                }
              />
              {likesCount} Likes
            </p>
          </div>
        </div>
        <div id="bagian-kanan" className="flex flex-col w-[51vw] mx-[2vw]">
          <div className="flex my-[2vh] h-[10vh] items-center">
            <img
              className="w-[2.5vw] h-[2.5vw] rounded-[50%]"
              src={poster.user_avatar}
            />
            <div className="flex flex-col pl-[1vw] grow">
              <div className="flex">
                <p className="font-[600] mr-[0.3vw]">{poster.username}</p> -
                <p className="mx-[0.3vw]">"{postDetail.caption}"</p>
              </div>
              <p>{postDetail.createdAt.slice(0, 10)}</p>
            </div>
            {postOwner ? (
              <FontAwesomeIcon
                onClick={handleClick}
                id="editPost"
                icon="fa-solid fa-ellipsis"
                className="text-[1.5vw] hover:cursor-pointer"
              />
            ) : (
              ""
            )}
            <Popover
              id={"editPost"}
              open={open}
              // sx={{ width: "10vw", height: "10vw" }}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 2 }}>
                <p className="hover:cursor-pointer hover:text-cyan-400">
                  Edit post
                </p>
                <p
                  onClick={handleOpenModal}
                  className="hover:cursor-pointer hover:text-cyan-400"
                >
                  Delete post
                </p>
              </Typography>
            </Popover>
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Modal>
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
            {comments.length ? (
              commentsMap
            ) : (
              <p className="mt-[3vh]">"Nobody has commented yet."</p>
            )}
            <Button onClick={getMoreComments} variant="text">
              See more
            </Button>
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

    const body = {
      commentLimit: 5,
      commentOffset: 0,
    };
    const resGetPostDetail = await axiosInstance.post(
      `/posts/${post_id}`,
      body,
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
      props: { accessToken, user_id, postDetail, userData, poster, post_id },
    };
  } catch (error) {
    console.log({ error });
    const { message } = error;
    return {
      props: { message },
    };
  }
}
