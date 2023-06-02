/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit'

let replyState = createSlice({
    name : '댓글 등록',
    initialState : {
        rmVisible : false,
    },
    reducers : {
        setRmVisible(state, action) {
            state.rmVisible = action.payload
        },
    }
})

export let { setRmVisible } = replyState.actions
export default replyState