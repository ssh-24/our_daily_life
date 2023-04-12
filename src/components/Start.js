/*eslint-disable */
import {appAuth} from '../firebase/config';
import {useState,useEffect} from "react";
import Signup from "./Signup";
import Signin from "./Signin"
import { useAuthContext } from "../hooks/useAuthContext";
import { useSelector } from "react-redux"


function Start() {
    const { isAuthReady, user } = useAuthContext();
    const isSigned = useSelector((state) => state.isSigned) // 계정 보유 여부

    return (
       <>
        {isSigned === true ? <Signin/> : <Signup/>}
       </>
    );
}

export default Start;