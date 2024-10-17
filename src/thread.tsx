import { useEffect, useState } from "react"
import { Post } from "./type/post.type"
import { Thread } from "./type/thread.type"
import { PostExample } from "./post_example";
import Header from "./header"
import PostProp from "./props/Posts";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useCookies } from "react-cookie";

const ThreadPage = () => {
    console.log("Hi!");
    const [cookie] = useCookies(["Jwt"])
    const id = useSelector((state: RootState) => state.thread.threadId);
    const [thread, setThread] = useState<Thread|undefined>(undefined)
    let [posts, setPosts] = useState<Post[]|undefined>(undefined)
    useEffect(() => {
        axios.post("http://localhost:8000/thread", {
            id: id,
        }, {
            headers: {
                "Authorization": `Bearer ${cookie.Jwt}`
            }
        })
        .then((response) => {
            const data = response.data;
            // setThread({
            //     avatarPath: data.
            // })
        })
    },[])
    return(
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
        {
          posts.map((post) => {
            return(
              <>
                <PostProp post={post} />
              </>
            )
          })}
        </div>

        <div className="thread-thread_block">
            <div className="thread-thread_name"></div>
            <div className="thread-thread_title"></div>
            <div className="thread-thread_cake_date"></div>
            <div className="thread-category">

            </div>
            <div className="thread-rules_title">Rules</div>
            <div className="thread-rules"></div>
        </div>
    </div>
        </>
    )
}

export default ThreadPage;