/*eslint-disable */

import Logo from "../assets/images/logo.png";
import {appAuth} from '../firebase/config';

import {useState,useEffect} from "react";
import Signup from "./Signup";
import Signin from "./Signin"
import { useAuthContext } from "../hooks/useAuthContext";


function Start() {

    const { isAuthReady, user } = useAuthContext();
    const [isSigned, setIsSigned]  = useState(false);
    console.log(isSigned);

    return (
       <>
            {isSigned === false ? <Signin/> : <Signup/>}
       </>
    );
}

export default Start;