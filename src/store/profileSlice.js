/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit'

let profileState = createSlice({
    name : '프로필 변경',
    initialState : {
        pfVisible : false,
    },
    reducers : {
        setPfVisible(state, action) {
            state.pfVisible = action.payload
        },
    }
})

export let { setPfVisible } = profileState.actions
export default profileState