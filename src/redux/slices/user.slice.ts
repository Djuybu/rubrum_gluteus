import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../type/user.type";

type State =  {
    user: User | null,
    id: string | null
}

const initialState: State = {
    user: null,
    id: null
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            console.log(action.payload);
            state.user = action.payload
        },
        addId: (state, action: PayloadAction<string>) => {
            state.id = action.payload
        }
    }
})

const userReducer = userSlice.reducer

export const { addUser, addId } = userSlice.actions;
export default userReducer