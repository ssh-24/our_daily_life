/*eslint-disable */
import React from "react"
import {useState} from "react"
import {useSignup} from '../hooks/useSignup'
import { useSelector, useDispatch } from "react-redux"
import { setIsSigned } from "../store/signedSlice"

function Signup(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [displayName, setDisplayName] = useState("")
    const {error, isPending, signup} = useSignup() // 만든 js 파일을 훅처럼 사용할 수 있음
    const isSigned = useSelector((state) => state.isSigned) // 계정 보유 여부
    let dispatch = useDispatch()

    const goToSignin = () => {
        dispatch(setIsSigned(!isSigned))
    }

    const onChange = (e) => {
        const inputData = {
            type: e.target.type,
            value: e.target.value
        };

        // 인풋 타입에 따라 state 값을 변경
        if (inputData.type === "email") {
            setEmail(inputData.value);
        } else if (inputData.type === "password") {
            setPassword(inputData.value);
        } else if (inputData.type === "text") {
            setDisplayName(inputData.value);
        }
    }

    // 폼이 제출되면 실행
    const onSubmit = (e) => {
        e.preventDefault(); // submit시 페이지 reload 방지

        if(password.length < 6){
            alert('6자리 비밀번호를 입력해주세요');
        }else if(isNaN(password)){
            alert('비밀번호는 숫자로 입력해주세요');
        }else{
            signup(email,password,displayName);
        }

    }

    return(
        <>
            <div className="login-area">
                <div className="logo_div">
                    <div className="logo-text">Our Daily Life</div>
                </div>

                <div className="form-container">
                    <form className="sign-form" onSubmit={onSubmit}>
                        <h2>시작하기</h2>
                        <p>우리의 일상을 함께 공유해봐요:)</p>
                        {/* 이메일, 성명, 닉네임, 비밀번호, 회원가입 버튼 */}
                        <div className="form-group">
                            <input type="email" value={email} onChange={onChange} className="form-control" name="Email" placeholder="이메일 주소" required/>
                        </div>
                        <div className="form-group">
                            <input type="text" value={displayName} onChange={onChange} className="form-control" name="DisplayName" placeholder="사용자 이름" required/>
                        </div>
                        <div className="form-group">
                            <input type="password" value={password} onChange={onChange} className="form-control" name="Password" placeholder="비밀번호" required/>
                        </div>

                        <input type="submit" className="signup-btn" value="회원가입"/>
                    </form>

                    <div className="another-area">
                        <p>계정이 있어요!</p>
                        <button className="another-btn" onClick={goToSignin}>로그인하기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;