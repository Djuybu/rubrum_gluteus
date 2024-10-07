import { createAction, createReducer } from "@reduxjs/toolkit";
import { Post } from "../../type/post.type";


interface postState{
    post: Post[]
}

const initialState: postState = {
    post: []
}

export const addPosts = createAction<Post[]>('post/addPosts');

const postsReducer = createReducer(initialState, builder => {
    builder.addCase(addPosts, (state, action) => {
        const posts = action.payload;
        posts.map((post) => {
            state.post.push(post);
        })
    })
})

export default postsReducer; 