/*eslint-disable */

import { createContext, useReducer } from 'react';

// context를 객체를 생성합니다.
const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            //전개구문을 이용해 객체의 user 값을 업데이트 합니다.
            return { ...state, user: action.payload }
        case 'logout':
            return { ...state, user: null }
        default:
            return state
    }
}

const AuthContextProvider = ({ children }) => {

    // useReducer: 객체와 같이 복잡한 형태의 데이터를 다룰 때 많이 사용 
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    return (

        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider };
/**
 * dispatch({ type: 'login', payload: user })
dispatch 함수는 위와 같은 형태로 사용합니다. 
전달하는 인자를 action이라고 하며 action에는 type과 전달할 데이터인 payload 가 있습니다. */