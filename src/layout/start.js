import React from "react";
import Logo from "../assets/images/logo.png";
import axios from "axios";

function Start(props) {
    const signUpRequest = () => {
        alert('서버로 회원가입 요청!');
        // some logic
        
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
                <form onSubmit={(e)=>{
                    e.preventDefault(); // submit시 페이지 reload 방지
                    const user_email = e.target.Email.value;
                    const user_name= e.target.Name.value;
                    const user_nickname= e.target.Nickname.value;
                    const user_password= e.target.Password.value;
                    // 제출하기 전에 검증을 받아야할까? 서버에 보내서 확인받으면 상태 변경하도록..
                    signUpRequest();
                    
                    // 검증받은 정보를 상태변경하는 setUserInfo에 넘기기
                    props.signUp(user_email,user_name,user_nickname,user_password);
                }}>
                    <h2>시작하기</h2>
                    <p>우리의 일상을 함께 공유해봐요:)</p>
                    {/* 이메일, 성명, 닉네임, 비밀번호, 가입 버튼 */}
                    <div className="form-group">
                        <input type="email" className="form-control" name="Email" placeholder="이메일 주소" required/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="Name" placeholder="성명" required/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="Nickname" placeholder="사용자 이름" required/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="Password" placeholder="비밀번호" required/>
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