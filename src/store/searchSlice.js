/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit'

let userList = createSlice({
    name : '사용자 목록',
    initialState : [],
    reducers : {
        setUserList(state, action) {
            let userList = action.payload
            return userList
        }
    }
})

export let { setUserList } = userList.actions
export default userList