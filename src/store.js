import { configureStore } from '@reduxjs/toolkit'
import isSigned from './store/signedSlice'

export default configureStore({
   reducer: {
       isSigned : isSigned.reducer
   }
}) 