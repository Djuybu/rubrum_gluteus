import { createAction, createReducer } from "@reduxjs/toolkit";


interface ThreadState{
    threadId: String | undefined
}

const initialState: ThreadState = {
    threadId: undefined
}

export const setThread = createAction<String>('thread/addThreadId');

const ThreadReducer = createReducer(initialState, builder => {
    builder.addCase(setThread, (state, action) => {
        state.threadId = action.payload
    })
})

export default ThreadReducer;
