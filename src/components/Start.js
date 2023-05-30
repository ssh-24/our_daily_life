/*eslint-disable */
import Signup from "./Signup";
import Signin from "./Signin"
import { useSelector } from "react-redux"

function Start() {
    const isSigned = useSelector((state) => state.isSigned) // 계정 보유 여부
    return (
       <>
        {isSigned === true ? <Signin/> : <Signup/>}
       </>
    );
}

export default Start;