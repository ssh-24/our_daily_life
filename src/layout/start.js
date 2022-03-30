import React from "react";
import Logo from "../assets/images/logo.png";

function Start(props) {
    return (
        <div className="login-area">
            <div className="logo_div">
                <img alt="Our Daily Life" className="logo_img" src={Logo}></img>
            </div>

            <div className="form-container">
                <form>
                    <h2>시작하기</h2>
                    <p>우리의 일상을 함께 공유해봐요:)</p>
                    {/* 이메일, 성명, 닉네임, 비밀번호, 가입 버튼 */}
                    <div className="form-group">
                        <input type="email" className="form-control" id="user-email" placeholder="이메일 주소" required></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="user-name" placeholder="성명" required></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="user-nickname" placeholder="사용자 이름" required></input>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="user-password" placeholder="비밀번호" required></input>
                    </div>
                    <button type="submit" className="signup-btn" onClick={(e)=>{
                        props.onChangeMode(e);
                    }}>가입하기</button>
                </form>
            </div>

            <div className="just-start">
                <button className="start-btn" onClick={(e)=>{
                    props.onChangeMode(e);
                }}>그냥 시작하기</button>
            </div>
        </div>
    );
}

export default Start;