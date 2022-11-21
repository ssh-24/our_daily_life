/*eslint-disable */

import { useState } from 'react'
import { appAuth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

// 회원가입 훅
export const useSignup = () => {

    // 에러 정보 저장.
    const [error, setError] = useState(null);
    // 현재 서버와 통신중인 상태 저장.
    const [isPending, setIsPending] = useState(false);

    // 유저정보를 전역에서 활용할 수 있도록 dispatch 함수를 통해 업데이트 (회원가입으로ㄱ)
    const { dispatch } = useAuthContext();


    const signup = (email, password, displayName) => {
        setError(null); // 처음엔 에러 없을테니까 일단 null 처리
        setIsPending(true); // 현재 통신중이여서 true 값 할당.


        // 회원가입ㄱ
        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                
                const user = userCredential.user;
                console.log(user);
                
                if (!user) {
                    throw new Error('회원가입에 실패했습니다.');
                }

                // 회원 닉네임 저장
                updateProfile(appAuth.currentUser, { displayName })
                    .then(() => {
                        dispatch({ type: 'login', payload: user });// 닉네임 설정
                        setError(null);// 에러없음!
                        setIsPending(false);//통신끄기
                    }).catch((err) => {
                        setError(err.message);
                        setIsPending(false)//통신끄기
                        console.log(error);
                    });
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
                console.log(error);
            });
    }

    return { error, isPending, signup }//에러상태,통신상태, signup return
}