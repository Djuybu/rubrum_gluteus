import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { build } from "vite";

export const authAPI =  createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/"
    }),
    endpoints: build => ({
        auth: build.mutation<{userID: string, jwtoken: string}, {username: string, password: string}>({
            query: (body) => {
                return {
                    url: 'authentication',
                    method: "POST",
                    body
                }
            }
        }),

    })
})

export const {useAuthMutation} = authAPI