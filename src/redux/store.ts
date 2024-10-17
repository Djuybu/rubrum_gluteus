import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './reducers/post.reducer'
import ThreadReducer from './reducers/threadId.reducer'
import userReducer from './slices/user.slice'
import { authAPI } from './service/auth.service'
import { userAPI } from './service/user.service'
import { threadAPI } from './service/thread.service'
import { postAPI } from './service/post.service'
import { commentAPI } from './service/comment.service'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
    thread: ThreadReducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [threadAPI.reducerPath]: threadAPI.reducer,
    [postAPI.reducerPath]: postAPI.reducer,
    [commentAPI.reducerPath]: commentAPI.reducer
  },

  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(authAPI.middleware).concat(userAPI.middleware).concat(threadAPI.middleware).concat(postAPI.middleware).concat(commentAPI.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch