import { configureStore } from '@reduxjs/toolkit'
import isSigned from './store/signedSlice'
import inputState from './store/inputSlice'
import userList from './store/searchSlice'
import loginUserInfo from './store/loginUserSlice'
import replyState from './store/replySlice'
import likeState from './store/likeSlice'
import profileState from './store/profileSlice'

export default configureStore({
   reducer: {
       isSigned : isSigned.reducer,
       inputState : inputState.reducer,
       userList : userList.reducer,
       loginUserInfo : loginUserInfo.reducer,
       replyState : replyState.reducer,
       likeState : likeState.reducer,
       profileState : profileState.reducer,
   }
})