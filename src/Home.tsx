import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "./header";
import { PostExample } from "./post_example";
import axios from "axios";
import { useCookies } from "react-cookie";
import { addPosts } from "./redux/reducers/post.reducer";
import { Post } from "./type/post.type";
import PostProp from "./props/Posts";

const Home = () => {
  function addPostsToRedux() {
      // wait API from BE
    // axios.get("http://localhost:5000/posts", {
    //   headers: {
    //     "Authorization": `Bearer ${cookie.Jwt}`
    //   }
    // }).then((response) => {
    //   dispatch(addPosts(response.data));
    // })
    console.log("Here");
    
    dispatch(addPosts(PostExample))
    console.log(posts);
  }
  const user = useSelector((state: RootState) => state.user.user[0]);
  let posts: Post[] = useSelector((state: RootState) => state.posts.post)
  useEffect(() => {
    
    if (user.id === undefined) {
      navigate("/signin")
      return;
    }

    if (posts.length === 0 && user.id !== undefined) {
      addPostsToRedux();
    }
  }, [user])
  // add post when user load for the first time 
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookie] = useCookies(['Jwt'])
  return (
    <>
    <Header></Header>
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
        <div className="content">
          {posts.map((post) => {
            return(
              <>
                <PostProp post={post} />
              </>
            )
          })}
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
              <button onClick={() => {
                navigate("thread/create")
              }}></button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
