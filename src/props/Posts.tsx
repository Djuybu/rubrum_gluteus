import { useEffect, useState } from "react";
import { Post } from "../type/post.type";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useCookies } from "react-cookie";
import { setThread } from "../redux/reducers/threadId.reducer";
export type PostProp = {
  post: Post;
};
const PostProp = (postProp: PostProp) => {
  const post = postProp.post;
  const navigateToThread = () => {
    dispatch(setThread(post.subredditid));
  };
  const [userReaction, setUserReaction] = useState<
    "upvote" | "downvote" | "remove" | undefined
  >(undefined);
  useEffect(() => {
    if (userReaction === undefined) return;
    axios.post(
      "http://localhost:5000/setActivity",
      {
        userID: user.id,
        postID: post.id,
        action: userReaction,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookie.Jwt},`,
        },
      }
    );
  }, [userReaction]);
  const handleUpvote = () => {
    if (userReaction === "upvote") {
      setUserReaction("remove");
    }
    setUserReaction("upvote");
  };
  const handleDownvote = () => {
    if (userReaction === "downvote") {
      setUserReaction("remove");
    }
    setUserReaction("downvote");
  };
  const [cookie] = useCookies(["Jwt"]);
  const user = useSelector((state: RootState) => state.user.user[0]);
  const dispatch = useDispatch()
  return (
    <>
      <div className="post">
        <img src={post.avatarPath} alt="" />
        <div className="details">
          <p className="title" onClick={navigateToThread}>
            {post.subreddit}
          </p>
          <p>{post.title}</p>
          <p>{post.content}</p>
          <div className="comments">
            <button onClick={handleUpvote}>⬆ {post.upvotes}</button>
            <button onClick={handleDownvote}>⬇{post.downvotes}</button>
            <span>💬 Comments</span>
            <span>🔗 Share</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostProp;
