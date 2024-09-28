import { createAction, createReducer } from "@reduxjs/toolkit";
import { User } from "../type/user.type";


interface userState{
    user: User[]
}

const initialState: userState = {
    user: []
}

export const addUser = createAction<User>('user/addUser');

const userReducer = createReducer(initialState, builder => {
    builder.addCase(addUser, (state, action) => {
        const user = action.payload;
        state.user.push(user);
    })
})

export default userReducer; 