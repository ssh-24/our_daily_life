/*eslint-disable */

import Logo from "../assets/images/logo.png";
import {appAuth} from '../firebase/config';//getAuth();

import axios from "axios";
import {useState,useEffect} from "react";
import {createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

//일단 회원가입, 로그인을 한번에 만들건데, 필요하면 분리할수도..?
function Start(props) {
    // Hook
    const [isLogin, setLogin] = useState(appAuth.currentUser);// 유저 상태 할당

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [newAccount,setNewAccount] = useState(true);// 로그인/회원가입 구분하려고...

    // displayName은 파이어베이스에서 유저 정보에 저장 할 수 있는 속성중 하나입니다. 
    // 다른 변수명을 사용하면 안된다. ( 참고 : https://firebase.google.com/docs/reference/js/auth.md#updateprofile)


    // 파이어베이스가 실행되는 초기에 유저가 로그인 되어있는지 확인하는 로직은 비동기로 작동함.그래서
    // 그래서 useEffect 에다가 넣어놔서 dom 이 다 그려지고 난 다음에 출력시켜야됨
    useEffect(() => {
        appAuth.onAuthStateChanged((user) => {
            console.log(user)
          if (user) {
            setLogin(true);
          } else {
            setLogin(false);
          }
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
            setDisplayName(inputData.value);
        }
    }

    // 폼이 제출되면 실행됨.
    const onSubmit = (e) => {
        e.preventDefault(); // submit시 페이지 reload 방지
        const user_email = e.target.Email.value;
        const user_nickname= e.target.DisplayName.value;
        const user_password= e.target.Password.value;
        
        // 서버로 회원가입 요청!
        signUpRequest();

        // 검증받은 정보를 상태변경하는 setUserInfo에 넘기기
        props.signUp(user_email,user_nickname,user_password);
        
    }

    const signUpRequest = () => {
        console.log('서버로 회원가입 요청!');
        // some logic

        // 회원가입 관련한 코드를 추가합니다.
        let user;
        try {
            if (newAccount) {
                createUserWithEmailAndPassword(appAuth, email, password).then((userCredential) => {
                    // Signed up

                    console.log(user);
                    console.log(userCredential.user);

                    if(!user){
                        throw new Error('회원가입에 실패했습니다.');
                    }
        
                    // 회원가입이 완료되면 가입된 회원에 닉네임 저장시키기
                    // updateProfile(appAuth,currentUser,{displayName})
                    // .then(()=>{
                    //     dispatch({type: 'login', payload:user})
                    // }).catch((error) => {
                    //     console.log(error)

                    // })

                    updateProfile({displayName:displayName})
                    

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
                        <input type="text" value={displayName} onChange={onChange} className="form-control" name="DisplayName" placeholder="사용자 이름" required/>
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