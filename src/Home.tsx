import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./header";
import { PostExample } from "./post_example";
import { useCookies } from "react-cookie";
import { addPosts } from "./redux/reducers/post.reducer";
import { Post } from "./type/post.type";
import PostProp from "./props/Posts";
import {
  useAddUserMutation,
  useGetUserQuery,
} from "./redux/service/user.service";
import { User } from "./type/user.type";
import { addUser } from "./redux/slices/user.slice";
import { userGen } from "./datagen/user";
import { threadData } from "./datagen/thread";
import { useAddThreadMutation } from "./redux/service/thread.service";
import { useAddPostMutation } from "./redux/service/post.service";
import { postData } from "./datagen/post";
import { useAddCommentMutation } from "./redux/service/comment.service";
import { commentList } from "./datagen/comment";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookie] = useCookies(["JWTToken"]);
  const [isUserLoaded, setIsUserLoaded] = useState(false); // State để theo dõi việc tải dữ liệu người dùng

  const posts: Post[] = useSelector((state: RootState) => state.posts.post);
  const { data } = useGetUserQuery(cookie.JWTToken);
  const [addUserToServer, addUserResult] = useAddUserMutation();
  const [addThreadToServer, addThreadResult] = useAddThreadMutation()
  const [addPostToServer, addPostResult] = useAddPostMutation();
  const [addCommentToServer, addCommentResult] = useAddCommentMutation()
  let user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    if (data !== undefined && data !== null) {
      console.log("Hi!");
      console.log(data);
      dispatch(addUser(data));
      setIsUserLoaded(true);
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (cookie.JWTToken === null || cookie.JWTToken === undefined) {
      navigate("/signin");
    }
  }, [cookie]);

  // Hàm để thêm bài viết vào Redux store
  function addPostsToRedux() {
    dispatch(addPosts(PostExample));
  }

  return (
     <>
      {isUserLoaded && <Header />}{" "}
      {/* Chỉ hiển thị Header khi dữ liệu người dùng đã tải xong */}
      <div className="container">
        <div className="sidebar">
          <nav className="nav">
            <ul>
              <li>
                <span className="icon">🏠</span>Home
              </li>
            </ul>
          </nav>
          <h3>Categories</h3>
          <ul>
            <li>Abc</li>
            <li>Abc</li>
            <li>Abc</li>
            <li>Abc</li>
          </ul>
        </div>
        <button
          onClick={async () => {
            try {
              await Promise.all(
                userGen.map(async (user) => {
                  await addUserToServer(user).unwrap();
                })
              );
              console.log("Users added successfully");
            } catch (error) {
              console.error("Error adding users:", error);
            }
          }}
        >
          Tạo user
        </button>
        <button
          onClick={async () => {
            try {
              await Promise.all(
                threadData.map(async (thread) => {
                  await addThreadToServer({
                    token: cookie.JWTToken,
                    body: thread
                  }).unwrap();
                })
              );
              console.log("Users added successfully");
            } catch (error) {
              console.error("Error adding users:", error);
            }
          }}
        >
          Tạo thờ rét
        </button>
        <button
          onClick={async () => {
            try {
              await Promise.all(
                postData.map(async (post) => {
                  await addPostToServer({
                    token: cookie.JWTToken,
                    post: post
                  }).unwrap();
                })
              );
              console.log("Posts added successfully");
            } catch (error) {
              console.error("Error adding users:", error);
            }
          }}
        >
          Tạo posts
        </button>
        <button
          onClick={async () => {
            try {
              await Promise.all(
                commentList.map(async (comment) => {
                  await addCommentToServer({
                    token: cookie.JWTToken,
                    comment: comment
                  }).unwrap();
                })
              );
              console.log("Posts added successfully");
            } catch (error) {
              console.error("Error adding users:", error);
            }
          }}
        >
          Tạo comment
        </button>

        <div className="content">
          {posts.map((post) => (
            <PostProp key={post.id} post={post} />
          ))}
        </div>
        <div className="popular">
          <h3>Popular</h3>
          <ul>
            <li>
              <div className="icon green"></div>r/abc 1,000,000 members
            </li>
            <li>
              <div className="icon pink"></div>r/def 1,000,000 members
            </li>
            <li>
              <div className="icon cyan"></div>r/def 1,000,000 members
            </li>
            <li>
              <div className="icon yellow"></div>r/def 1,000,000 members
            </li>
            <li>
              <a href="#">See more</a>
            </li>
            <li>
              <button onClick={() => navigate("thread/create")}>
                Create Thread
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
