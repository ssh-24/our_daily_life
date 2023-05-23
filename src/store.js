import { configureStore } from '@reduxjs/toolkit'
import isSigned from './store/signedSlice'
import inputState from './store/inputSlice'
import feeds from './store/feedsSlice'
import userList from './store/searchSlice'

export default configureStore({
   reducer: {
       isSigned : isSigned.reducer,
       inputState : inputState.reducer,
       feeds : feeds.reducer,
       userList : userList.reducer
   }
})