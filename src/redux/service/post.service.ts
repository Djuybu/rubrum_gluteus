import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../../type/post.type";


export const postAPI =  createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/post/",
    }),
    endpoints: build => ({
        getPostFromThread: build.query<Post, {threadId: string, token: string}>({
            query: (token) => {
                return {
                    url: "getpostfromthreadid",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    }
                }
            }
        }),
        addPost: build.mutation<any, {post: Post, token: string}>({
            query: (request)=> {
                return {
                    url: "add",
                    method: "POST",
                    body: request.post,
                    headers: {
                        "Authorization": `Bearer ${request.token}`
                    }
                }
            }
        })
    })
})

export const { useAddPostMutation } = postAPI