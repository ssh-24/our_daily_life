import { configureStore } from '@reduxjs/toolkit'
import isSigned from './store/signedSlice'
import inputState from './store/inputSlice'
import feeds from './store/feedsSlice'
import userList from './store/searchSlice'
import loginUserInfo from './store/loginUserSlice'
import replyState from './store/replySlice'
import profileState from './store/profileSlice'

export default configureStore({
   reducer: {
       isSigned : isSigned.reducer,
       inputState : inputState.reducer,
       feeds : feeds.reducer,
       userList : userList.reducer,
       loginUserInfo : loginUserInfo.reducer,
       replyState : replyState.reducer,
       profileState : profileState.reducer,
   }
})