import { createAction, createReducer } from "@reduxjs/toolkit";
import { User } from "../../type/user.type";


interface userState{
    user: User[]
}

const initialState: userState = {
    user: [
        {
            id: undefined,
            username: "",
            email: "",
            avatarPath: ""
        }
    ]
}

export const addUser = createAction<User>('user/addUser');

const userReducer = createReducer(initialState, builder => {
    builder.addCase(addUser, (state, action) => {
        console.log(action.payload);
        const user = action.payload;
        state.user[0] = user;
    })
})
