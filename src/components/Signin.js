/*eslint-disable */
import React from "react";
import {useState} from "react";
import {useLogin} from '../hooks/useLogin';
import Logo from "../assets/images/logo.png";

function Signin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {error,isPending,login} = useLogin();


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
        }
    }

    // 폼이 제출되면 실행
    const onSubmit = (e) => {
        e.preventDefault(); // submit시 페이지 reload 방지
        login(email, password);
    }

    return(
        <>
            <div className="login-area">
                <div className="logo_div">
                    <img alt="Our Daily Life" className="logo_img" src={Logo}/>
                </div>

                <div className="form-container">
                    <form onSubmit={onSubmit}>
                        <h2>시작하기</h2>
                        <p>우리의 일상을 함께 공유해봐요:)</p>
                        {/* 이메일, 비밀번호, 로그인 버튼 */}
                        <div className="form-group">
                            <input type="email" value={email} onChange={onChange} className="form-control" name="Email" placeholder="이메일 주소" required/>
                        </div>
                        <div className="form-group">
                            <input type="password" value={password} onChange={onChange} className="form-control" name="Password" placeholder="비밀번호" required/>
                        </div>

                        <input type="submit" className="signup-btn" value="로그인"/>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signin;