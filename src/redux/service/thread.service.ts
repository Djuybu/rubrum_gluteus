import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { build } from "vite";
import { Thread } from "../../type/thread.type";

export const threadAPI =  createApi({
    reducerPath: "threadApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/thread/"
    }),
    endpoints: build => ({
        getThreadSearchResult: build.query<Thread[], {keyword: string, token: string}> ({
            query: (body) => {
                return {
                    url: `search/${body.keyword}/0`,
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${body.token}`
                    }
                }
            }
        }),
        addThread: build.mutation<any, {body:Omit<Thread, 'id'>, token: string}>({
            query: (request) => {
                return {
                    url: "/add",
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${request.token}`
                    },
                    body: request.body,
                }
            }
        })
    })
})

export const {useGetThreadSearchResultQuery, useAddThreadMutation} = threadAPI