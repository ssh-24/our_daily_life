/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit'

let loginUserInfo = createSlice({
    name : '로그인 사용자 정보',
    initialState : {},
    reducers : {
        setLoginUserInfo(state, action) {
            let loginUserInfo = action.payload
            return loginUserInfo
        }
    }
})

export let { setLoginUserInfo } = loginUserInfo.actions
export default loginUserInfo