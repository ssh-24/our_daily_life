/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit'

let inputState = createSlice({
    name : '글 등록',
    initialState : {
        visible : false,
        postImageUrl : '',
        postText : ''
    },
    reducers : {
        setVisible(state, action) {
            state.visible = action.payload
        },
        setPostText(state, action) {
            state.postText = action.payload
        },
        setPostImageUrl(state, action) {
            state.postImageUrl = action.payload
        }
    }
})

export let { setVisible, setPostText, setPostImageUrl } = inputState.actions
export default inputState