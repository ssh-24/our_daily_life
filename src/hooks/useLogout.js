import {useState} from "react";
import {signOut} from "firebase/auth";
import {appAuth} from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const [error,setError] = useState(null);
    const [isPending,setIsPending] = useState(false);

    const {dispatch} = useAuthContext();

    const logout = () =>{
        setError(null);
        setIsPending(true);

        // 로그아웃 
        signOut(appAuth)
        .then(()=>{
            //성공
            dispatch({type: 'logout'});
            setError(null); //에러없다고 넣어주고
            setIsPending(false); //통신끊어주기
        }).catch((err)=>{
            setError(err.message);
            setIsPending(false);
        });
    }
    return {error, isPending,logout}
}