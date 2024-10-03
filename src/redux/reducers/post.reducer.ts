import { createAction, createReducer } from "@reduxjs/toolkit";
import { Post } from "../../type/post.type";


interface postState{
    post: Post[]
}

const initialState: postState = {
    post: []
}

export const addUser = createAction<Post>('post/addPost');

const userReducer = createReducer(initialState, builder => {
    builder.addCase(addUser, (state, action) => {
        const post = action.payload;
        state.post.push(post);
    })
})

export default userReducer; 