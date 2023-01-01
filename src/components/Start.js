/*eslint-disable */

import Logo from "../assets/images/logo.png";
import {appAuth} from '../firebase/config';

import axios from "axios";
import {useState,useEffect} from "react";
import Signup from "./Signup";
import Signin from "./Signin"
import { useAuthContext } from "../hooks/useAuthContext";


function Start() {

    const {isAuthReady, user } = useAuthContext();

    return (
       <>
             <Signin/>
             <Signup/>
       </>
    );
}

export default Start;