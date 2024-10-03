import { useSelector } from "react-redux";
import Header from "./Header";
import { RootState } from "./redux/store";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const user = useSelector((state: RootState) => state.user.user[0]);
  const navigate = useNavigate()
  useEffect(() => {
    if (user === undefined) {
      navigate("/signin")
    }
  }, [])
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
        {/* <Post>
        </Post> */}
        <div className="content">
          <div className="post">
            <div className="icon red"></div>
            <div className="details">
              <p className="title">r/abc</p>
              <p>This is a title</p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Interdum elementum odio
                non lectus neque eu. Iaculis tincidunt ut nulla nibh nam id
                tortor. Sagittis hendrerit eu quis commodo sed rhoncus.
              </p>
              <div className="comments">
                <span>⬆ 146</span>
                <span>⬇</span>
                <span>💬 Comments</span>
                <span>🔗 Share</span>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="icon blue"></div>
            <div className="details">
              <p className="title">r/def</p>
              <p>This is a title</p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Interdum elementum odio
                non lectus neque eu. Iaculis tincidunt ut nulla nibh nam id
                tortor. Sagittis hendrerit eu quis commodo sed rhoncus.
              </p>
              <div className="comments">
                <span>⬆ 146</span>
                <span>⬇</span>
                <span>💬 Comments</span>
                <span>🔗 Share</span>
              </div>
            </div>
          </div>
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
