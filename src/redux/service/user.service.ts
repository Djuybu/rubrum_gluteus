import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../type/user.type";
import { addUser } from "../slices/user.slice";

export const userAPI =  createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/",
    }),
    endpoints: build => ({
        getUser: build.query<User, {token: string}>({
            query: (token) => {
                return {
                    url: "user",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    }
                }
            }
        }),
        addUser: build.mutation<any, {password: string, email: string}>({
            query: body => {
                return {
                    url: "register",
                    method: "POST",
                    body
                }
            }
        })
    })
})

export const { useGetUserQuery, useAddUserMutation } = userAPI