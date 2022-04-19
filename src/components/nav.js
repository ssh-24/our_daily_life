import React from "react";
import Logo from "../assets/images/logo.png";


function Nav(props) {
    const renewClicked = (userInfo) => {
        if (userInfo.email === '') return;
        alert('피드 갱신');
        // 갱신 요청 logic

    }

    const searchAjaxRequest = (search_text) => {
        // Ajax 통신 필요
        console.log(search_text);
    }

    const uploadClicked = (userInfo) => {
        if (userInfo.email === '') return;
        alert('새 게시물 만들기');

    }

    const logClicked = (userInfo) => {
        if (userInfo.email === '') return;
        alert(`${userInfo.nickname}의 활동 기록 조회`);

    }

    const myprofileClicked = (userInfo) => {
        if (userInfo.email === '') return;
        alert(`${userInfo.nickname}의 프로필`);

    }

    return (
        <nav>
            <div className="navigation">
                <div className="refresh">
                    <a href="/renew" tabIndex="0" onClick={(e)=>{
                        e.preventDefault();
                        renewClicked(props.userInfo);
                    }}>
                        <div className="logo_div">
                            <img alt="Our Daily Life" className="logo_img" src={Logo}/>
                        </div>
                    </a>
                </div>

                <div className="user-search">
                    <div className="btn-item">
                        <svg aria-label="검색" color="#262626"                            
                            fill="#262626" role="img" viewBox="0 0 20 20">
                            <path d="M18.109,17.776l-3.082-3.081c-0.059-0.059-0.135-0.077-0.211-0.087c1.373-1.38,2.221-3.28,2.221-5.379c0-4.212-3.414-7.626-7.625-7.626c-4.212,0-7.626,3.414-7.626,7.626s3.414,7.627,7.626,7.627c1.918,0,3.665-0.713,5.004-1.882c0.006,0.085,0.033,0.17,0.098,0.234l3.082,3.081c0.143,0.142,0.371,0.142,0.514,0C18.25,18.148,18.25,17.918,18.109,17.776zM9.412,16.13c-3.811,0-6.9-3.089-6.9-6.9c0-3.81,3.089-6.899,6.9-6.899c3.811,0,6.901,3.09,6.901,6.899C16.312,13.041,13.223,16.13,9.412,16.13z"></path>
                        </svg>
                    </div>
                    <input aria-label="입력 검색" autoCapitalize="none" className="search_input" placeholder="검색" type="text"
                    onChange={(e)=> {
                        // Ajax 통신으로 관련 리스트 호출해오는 로직 구현
                        searchAjaxRequest(e.target.value);
                    }}/>
                </div>
            
                <div className="btn-list">
                    <div className="btn-item">
                        <a className="home-btn" href="/renew" tabIndex="0" onClick={(e)=>{
                            e.preventDefault();
                            renewClicked(props.userInfo);
                        }}>
                            <svg aria-label="홈" color="#262626"
                            fill="#262626" role="img" viewBox="0 0 20 20">
                            <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"></path>
                            </svg>
                        </a>
                    </div>

                    <div className="btn-item">
                        <a className="upload-btn" href="/upload" tabIndex="0" onClick={(e)=>{
                            e.preventDefault();
                            uploadClicked(props.userInfo);
                        }}>
                            <svg aria-label="새로운 게시물" color="#262626"
                                fill="#262626" role="img" viewBox="0 0 20 20">
                            <path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>
                            </svg>
                        </a>
                    </div>

                    <div className="btn-item">
                        <a className="log-btn" href="/log" tabIndex="0" onClick={(e)=>{
                            e.preventDefault();
                            logClicked(props.userInfo);
                        }}>                                
                            <svg aria-label="활동 기록" color="#262626" 
                            fill="#262626" role="img" viewBox="0 0 20 20">
                            <path d="M13.22,2.984c-1.125,0-2.504,0.377-3.53,1.182C8.756,3.441,7.502,2.984,6.28,2.984c-2.6,0-4.714,2.116-4.714,4.716c0,0.32,0.032,0.644,0.098,0.96c0.799,4.202,6.781,7.792,7.46,8.188c0.193,0.111,0.41,0.168,0.627,0.168c0.187,0,0.376-0.041,0.55-0.127c0.011-0.006,1.349-0.689,2.91-1.865c0.021-0.016,0.043-0.031,0.061-0.043c0.021-0.016,0.045-0.033,0.064-0.053c3.012-2.309,4.6-4.805,4.6-7.229C17.935,5.1,15.819,2.984,13.22,2.984z M12.544,13.966c-0.004,0.004-0.018,0.014-0.021,0.018s-0.018,0.012-0.023,0.016c-1.423,1.076-2.674,1.734-2.749,1.771c0,0-6.146-3.576-6.866-7.363C2.837,8.178,2.811,7.942,2.811,7.7c0-1.917,1.554-3.47,3.469-3.47c1.302,0,2.836,0.736,3.431,1.794c0.577-1.121,2.161-1.794,3.509-1.794c1.914,0,3.469,1.553,3.469,3.47C16.688,10.249,14.474,12.495,12.544,13.966z"></path>
                            </svg>
                        </a>
                    </div>

                    <div className="btn-item">
                        <a className="myprofile-btn" href="/myprofile" tabIndex="0" onClick={(e)=>{
                            e.preventDefault();
                            myprofileClicked(props.userInfo);
                        }}>
                            <svg aria-label="내 프로필" color="#262626"
                            fill="#262626" role="img" viewBox="0 0 20 20">
                            <path d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"></path>
                            <path d="M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;