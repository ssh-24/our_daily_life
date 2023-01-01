/* eslint-disable*/
import { onAuthStateChanged } from 'firebase/auth';
import {createContext,useEffect,useReducer} from 'react';
import { appAuth } from '../firebase/config';

/**Context
 * React 컴포넌트 트리 안에서 데이터를 전역으로(global)사용할 수 있도록 고안된 방법. 
 * 트리 단계마다 명시적으로 props를 넘겨주지 않아도 많은 컴포넌트가 값을 공유하도록. */
 
// context 객체 생성
const AuthContext = createContext();
const authReducer = (state,action) => {

    switch(action.type){
        case 'login':// 로그인,회원가입 case
            return {...state, user:action.payload}
        case 'logout':// 로그아웃 case
            return {...state, user:null}//유저정보 null 로 세팅해둬서 자동으로 날아가게
        case 'isAuthReady':// 유저정보 setting case
            return {...state, user:action.payload, isAuthReady:true}
        default:
            return state
    }
}



// 이만큼을 context 로 관리할거임
const AuthContextProvider = ({children}) =>{
    
    // 유저 정보를 관리할 reduser 훅
    const [state,dispatch]  = useReducer(authReducer, { 
        user : null,    // user 정보 초기값
        isAuthReady: false // 사용자 인증정보 초기값
    })

    /** onAuthStateChanged
     * 유저가 로그인상태인지 아닌지를 알기 위해서는 
     * 리액트가 화면 랜더링을 하기 전에 
     * 재빠르게 파이어베이스랑 통신을 해야됨   */

    useEffect(()=>{
        // 유저의 변화를 관찰하는 함수
        const unsubscribe = onAuthStateChanged(appAuth, (user)=>{
            dispatch({type:'isAuthReady', payload: user});
        })
        return unsubscribe;

    },[])
    console.log('담겨있는 userstate:', state);

    return(
        // state 값이 늘어날 수 있기 때문에 spread operator 사용
        // dispatch 를 통해 authReducer 를 호출할 수 있고, authReducer 함수는 state 를 호출할 수 있다.
        // 유저 정보가 바뀔 수 있기 때문에 dispatch 를 인자로 받음
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthContextProvider}

/**useReducer(리듀서 함수, 관리할 값의 초기화)
 * 
 * useState 대체함수
 * 객체와 같이 복잡한 형태의 데이터를 다룰 때 많이 사용
 * const [관리할 값, dispatch 함수] = useReducer(리듀서 함수, 관리할 값의 초기화)
 * 
 * dispatch({ type: 'login', payload: user })
 * dispatch 함수는 리듀서 함수를 호출하는 역할 
 * dispatch 함수는 위와 같은 형태로 사용
 * 전달하는 인자를 action이라고 하며 action에는 type과 전달할 데이터인 payload 가 있습니다. 
 */