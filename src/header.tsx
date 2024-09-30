import { useSelector } from "react-redux"
import { RootState } from "./redux/store";

const Header = () => {
    const user = useSelector((state: RootState)=>state.user.user[0])
    console.log(user);
    
    return(
        <>
            <header>
            <div className="logo">LOGO</div>
            <div className="search-bar">
                <input type="text" placeholder="Search..."></input>
            </div>
            <div className="username">
                <img className="icon" src={user.avatar} alt="" />
                <span>{user.username}</span>
            </div>
            </header>
        </>
    )
}

export default Header