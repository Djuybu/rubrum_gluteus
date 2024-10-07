import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user.reducer'
import postsReducer from './reducers/post.reducer'

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch