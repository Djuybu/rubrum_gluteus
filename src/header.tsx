import { useSelector } from "react-redux"
import { RootState } from "./redux/store";
import { User } from "./type/user.type";
import { useEffect, useState } from "react";
import { useGetThreadSearchResultQuery } from "./redux/service/thread.service";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Header = () => {
    const user: User = useSelector((state: RootState) => state.user.user);
    const [input, setInput] = useState<string | null>(null);
    const [debouncedInput, setDebouncedInput] = useState<string | null>(null);
    const navigate = useNavigate();
    const [token] = useCookies(['JWTToken'])

    // Debounce mechanism to limit API calls
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedInput(input);
        }, 500); // Adjust delay (500 ms) as needed

        return () => {
            clearTimeout(handler); // Clear the timeout if the input changes before 500 ms
        };
    }, [input]);

    // Call the API using the debounced input
    const {data} = useGetThreadSearchResultQuery(
        debouncedInput ? { keyword: debouncedInput, token: token.JWTToken } : skipToken,
        { skip: !debouncedInput } // Skip the query if debouncedInput is null
    );

    return(
        <>
            <header>
            <div className="logo">LOGO</div>
            <div className="search-bar">
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setInput(e.target.value)
                }} type="text" placeholder="Search..."></input>
                <button>Submit</button>
            </div>
            <div className="username">
                <img className="icon" src={user.avatarPath} alt="" /> 
                <span>{user.username}</span>
            </div>
            </header>
        </>
    )
}

export default Header