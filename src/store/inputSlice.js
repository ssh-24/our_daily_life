/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit'

let inputState = createSlice({
    name : '글 등록',
    initialState : {
        visible : false,
        postText : '',
        userEmail : '',
        UID : ''
    },
    reducers : {
        setVisible(state, action) {
            state.visible = action.payload
        },
        setPostText(state, action) {
            state.postText = action.payload
        },
        setUserEmail(state, action) {
            state.userEmail = action.payload
        },
        setUID(state, action) {
            state.UID = action.payload
        },
    }
})

export let { setVisible, setPostText, setUserEmail, setUID } = inputState.actions
export default inputState