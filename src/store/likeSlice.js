/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit'

let likeState = createSlice({
    name : '좋아요 상세',
    initialState : {
        lmVisible : false,
    },
    reducers : {
        setLmVisible(state, action) {
            state.lmVisible = action.payload
        },
    }
})

export let { setLmVisible } = likeState.actions
export default likeState