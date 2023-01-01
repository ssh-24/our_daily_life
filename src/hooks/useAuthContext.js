/* eslint-disable*/

/**
 * 인증에 관한 context를 쉽게 사용할 수 있도록 훅
 * 
 */
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context; // state 와 dispatch 함수가 들어있음
}