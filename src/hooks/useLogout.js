/*eslint-disable */

import { useState } from 'react'
import { appAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'
import { signOut } from "firebase/auth";

// 로그아웃 훅
export const useLogout = () => {

    // 에러 정보 저장.
    const [error, setError] = useState(null);
    // 현재 서버와 통신중인 상태 저장.
    const [isPending, setIsPending] = useState(false);

    // 유저정보를 전역에서 활용할 수 있도록 dispatch 함수를 통해 업데이트 (로그아웃으로ㄱ)
    const { dispatch } = useAuthContext();

   
    const logout = () => {
        setError(null); // 처음엔 에러 없을테니까 일단 null 처리
        setIsPending(true); // 현재 통신중이여서 true 값 할당.

         // 로그아웃ㄱ
        signOut(appAuth).then(() => {
            dispatch({ type: 'logout' });//로그아웃ㄱ
            setError(null);// 에러없음!
            setIsPending(false);//통신끄기
        }).catch((err) => {
            setError(err.message);
            setIsPending(false)//통신끄기
            console.log(error);
        });
    }
    return { error, isPending, logout }//에러상태,통신상태, signup return
}