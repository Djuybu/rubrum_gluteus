import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Comment } from "../../type/comment.type";


export const commentAPI =  createApi({
    reducerPath: "commentApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/comment/",
    }),
    endpoints: build => ({
        addComment: build.mutation<any, {comment: Comment, token: string}>({
            query: (request)=> {
                return {
                    url: "addcomment",
                    method: "POST",
                    body: request.comment,
                    headers: {
                        "Authorization": `Bearer ${request.token}`
                    }
                }
            }
        })
    })
})

export const { useAddCommentMutation } = commentAPI