import { createReducer } from "@reduxjs/toolkit";
import { User } from "../type/user.type";


interface userState{
    user: User
}

const initialState: userState = {
    user: {
        username: "",
        email: "",
        phone_number: "",
        age: ""
    },
}

const userReducer = createReducer(initialState, builder => {})

export default userReducer;