import { createAction, createReducer } from "@reduxjs/toolkit";
import { User } from "../type/user.type";


interface userState{
    user: User[]
}

const initialState: userState = {
    user: [
        {
            id: -1,
            username: "",
            email: "",
            phone_number: "",
            age: "",
            avatar: ""
        }
    ]
}

export const addUser = createAction<User>('user/addUser');

const userReducer = createReducer(initialState, builder => {
    builder.addCase(addUser, (state, action) => {
        const user = action.payload;
        state.user[0] = user;
    })
})

export default userReducer; 