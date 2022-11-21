/*eslint-disable */

import { useContext } from 'react' 
import { AuthContext } from "../context/AuthContext";

//인증에 관한 context를 쉽게 사용할 수 있도록 만든 훅
export const useAuthContext = () => {

    const context = useContext(AuthContext);

    // AuthContext에서 반환하는 state 값(user), dispatch 함수 두개 들어있음
    return context
}