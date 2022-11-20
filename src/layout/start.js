/*eslint-disable */

import Logo from "../assets/images/logo.png";
import {authService} from '../fBase';

import axios from "axios";
import {useState,useEffect} from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



function Start(props) {
    // Hook
    const [isLogin, setLogin] = useState(authService.currentUser);// 유저 상태 할당
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [newAccount,setNewAccount] = useState(true);

    // 파이어베이스가 실행되는 초기에 유저가 로그인 되어있는지 확인하는 로직은 비동기로 작동하기 때문에 
  // 시간이 필요합니다.
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
          if (user) {
            setLogin(true);
          } else {
            setLogin(false);
          }
        //   setInit(true);
        });
      })


    const onChange = (e) => {
        const inputData = {
            type: e.target.type,
            value: e.target.value
        };

        // 인풋 타입에 따라 state 값을 변경합니다.
        if (inputData.type === "email") {
            setEmail(inputData.value);
        } else if (inputData.type === "password") {
            setPassword(inputData.value);
        } else if (inputData.type === "text") {
            setNickname(inputData.value);
        }
    }

    // 폼이 제출되면 실행됨.
    const onSubmit = (e) => {
        e.preventDefault(); // submit시 페이지 reload 방지
        const user_email = e.target.Email.value;
        const user_nickname= e.target.Nickname.value;
        const user_password= e.target.Password.value;
        // 제출하기 전에 검증을 받아야할까? 서버에 보내서 확인받으면 상태 변경하도록..
        signUpRequest();
        
        // 검증받은 정보를 상태변경하는 setUserInfo에 넘기기
        props.signUp(user_email,user_nickname,user_password);
    }

    const signUpRequest = () => {
        console.log('서버로 회원가입 요청!');
        // some logic

        // 로그인 관련한 코드를 추가합니다.
        const auth = getAuth();
        let user;
        try {
            if (newAccount) {
                createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
                    // Signed up
                    console.log(userCredential.user);

                });
            } else {
                signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                    // Signed in
                    console.log(user = userCredential.user);
                    // ...
                });
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    const justStartClicked = () => {
        alert('회원가입 없이 시작');
        
    }

    return (
        <div className="login-area">
            <div className="logo_div">
                <img alt="Our Daily Life" className="logo_img" src={Logo}/>
            </div>

            <div className="form-container">
                <form onSubmit={onSubmit}>
                    <h2>시작하기</h2>
                    <p>우리의 일상을 함께 공유해봐요:)</p>
                    {/* 이메일, 성명, 닉네임, 비밀번호, 가입 버튼 */}
                    <div className="form-group">
                        <input type="email" value={email} onChange={onChange} className="form-control" name="Email" placeholder="이메일 주소" required/>
                    </div>
                    <div className="form-group">
                        <input type="text" value={nickname} onChange={onChange} className="form-control" name="Nickname" placeholder="사용자 이름" required/>
                    </div>
                    <div className="form-group">
                        <input type="password" value={password} onChange={onChange} className="form-control" name="Password" placeholder="비밀번호" required/>
                    </div>

                    <input type="submit" className="signup-btn" value="가입하기"/>
                </form>
            </div>

            <div className="just-start">
                <button className="start-btn" onClick={(e)=>{
                    justStartClicked();
                    props.justStart(e);
                }}>그냥 시작하기</button>
            </div>
        </div>
    );
}

export default Start;