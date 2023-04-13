import { configureStore } from '@reduxjs/toolkit'
import isSigned from './store/signedSlice'
import inputState from './store/inputSlice'
import feeds from './store/feedsSlice'

export default configureStore({
   reducer: {
       isSigned : isSigned.reducer,
       inputState : inputState.reducer,
       feeds : feeds.reducer
   }
})