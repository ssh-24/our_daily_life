/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit'

let isSigned = createSlice({
    name : '계정유무',
    initialState : false,
    reducers : {
        setIsSigned(state, action) {
            let YN = action.payload
            return YN
        }
    }
})

export let { setIsSigned } = isSigned.actions
export default isSigned