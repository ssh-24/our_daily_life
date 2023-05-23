/*eslint-disable */
import React, { useEffect } from "react";
import Logo from "../assets/images/logo.png";
import {useLogout} from '../hooks/useLogout';
import { useDispatch } from "react-redux";
import { setVisible } from "../store/inputSlice";
import { useNavigate } from "react-router-dom";


function Nav(props) {
    const {logout} = useLogout()
    let navigate = useNavigate() // 페이지 이동
    let dispatch = useDispatch()


    // 로고, 홈 버튼 클릭, 메인페이지로 이동 + 상단으로 스크롤 이동
    const goMain = () => {
      navigate('/')
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // 상단으로 스크롤 이동
    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // 검색 자동완성 기능 *보류*
    const searchRequest = (search_text) => {
      console.log(search_text);
    }

    // 등록버튼 클릭
    const uploadClicked = () => {
      dispatch(setVisible(true)) // 새 게시물 등록 모달 보이게
    }

    // 로그버튼 클릭
    const logClicked = () => {
      navigate('/log')
    }
    
    // 프로필버튼 클릭
    const profileClicked = () => {
      navigate('/profile')
    }




    return (
      <>
        <nav className="nav-area">
            <div className="navigation">
                <div className="refresh">
                    <a href="/renew" tabIndex="0" onClick={(e)=>{
                        e.preventDefault();
                        goMain();
                    }}>
                        <div className="logo_div">
                            <img alt="Our Daily Life" className="logo_img" src={Logo}/>
                        </div>
                    </a>
                </div>

                <div className="user-search">
                    <SearchBtn className="search-btn"/>
                    <input aria-label="검색" autoCapitalize="none" className="search_input" placeholder="검색" type="text"
                        onChange={(e)=> {
                            // 관련 리스트 호출?
                            searchRequest(e.target.value);
                    }}/>
                </div>
            
                <div className="btn-list">
                    <div className="btn-item">
                        <HomeBtn onClick={(e)=>{
                            e.preventDefault()
                            goMain()}}/>
                    </div>
                    <div className="btn-item">
                        <AddBtn onClick={(e)=>{
                            e.preventDefault()
                            uploadClicked()}}/>
                    </div>

                    <div className="btn-item">
                        <LikeBtn onClick={(e)=>{
                            e.preventDefault()
                            logClicked()}}/>
                    </div>

                    <div className="btn-item">
                        <ProfileBtn onClick={(e)=>{
                            e.preventDefault()
                            profileClicked()}}/>
                    </div>

                    <div className="btn-item">
                        <LogoutBtn onClick={logout}/>
                    </div>
                </div>
            </div>
        </nav>
      
        <div className="go-top-btn">
          <UpBtn onClick={(e)=>{
              e.preventDefault()
              scrollTop()}}/>
        </div>
      </>
    );
}

export default Nav;


const SearchBtn = (props) => (
    <svg
      fill="#000000"
      // width="800px"
      // height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
    </svg>
);

const HomeBtn = (props) => (
    <svg
      // width="800px"
      // height="800px"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"home"}</title>
      <path
        d="M7.5 0.5L7.8254 0.120372C7.63815 -0.0401239 7.36185 -0.0401239 7.1746 0.120372L7.5 0.5ZM0.5 6.5L0.174604 6.12037L0 6.27003V6.5H0.5ZM5.5 14.5V15C5.77614 15 6 14.7761 6 14.5H5.5ZM9.5 14.5H9C9 14.7761 9.22386 15 9.5 15V14.5ZM14.5 6.5H15V6.27003L14.8254 6.12037L14.5 6.5ZM1.5 15H5.5V14H1.5V15ZM14.8254 6.12037L7.8254 0.120372L7.1746 0.879628L14.1746 6.87963L14.8254 6.12037ZM7.1746 0.120372L0.174604 6.12037L0.825396 6.87963L7.8254 0.879628L7.1746 0.120372ZM6 14.5V11.5H5V14.5H6ZM9 11.5V14.5H10V11.5H9ZM9.5 15H13.5V14H9.5V15ZM15 13.5V6.5H14V13.5H15ZM0 6.5V13.5H1V6.5H0ZM7.5 10C8.32843 10 9 10.6716 9 11.5H10C10 10.1193 8.88071 9 7.5 9V10ZM7.5 9C6.11929 9 5 10.1193 5 11.5H6C6 10.6716 6.67157 10 7.5 10V9ZM13.5 15C14.3284 15 15 14.3284 15 13.5H14C14 13.7761 13.7761 14 13.5 14V15ZM1.5 14C1.22386 14 1 13.7761 1 13.5H0C0 14.3284 0.671573 15 1.5 15V14Z"
        fill="#000000"
      />
    </svg>
);

const AddBtn = (props) => (
    <svg
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 489.8 489.8"
    style={{
      enableBackground: "new 0 0 489.8 489.8",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <title>{"new post"}</title>
    <g>
      <g>
        <path d="M438.2,0H51.6C23.1,0,0,23.2,0,51.6v386.6c0,28.5,23.2,51.6,51.6,51.6h386.6c28.5,0,51.6-23.2,51.6-51.6V51.6 C489.8,23.2,466.6,0,438.2,0z M465.3,438.2c0,14.9-12.2,27.1-27.1,27.1H51.6c-14.9,0-27.1-12.2-27.1-27.1V51.6 c0-14.9,12.2-27.1,27.1-27.1h386.6c14.9,0,27.1,12.2,27.1,27.1V438.2z" />
        <path d="M337.4,232.7h-80.3v-80.3c0-6.8-5.5-12.3-12.3-12.3s-12.3,5.5-12.3,12.3v80.3h-80.3c-6.8,0-12.3,5.5-12.3,12.2 c0,6.8,5.5,12.3,12.3,12.3h80.3v80.3c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-80.3h80.3c6.8,0,12.3-5.5,12.3-12.3 C349.7,238.1,344.2,232.7,337.4,232.7z" />
      </g>
    </g>
  </svg>
);

const LikeBtn = (props) => (
    <svg
    fill="#000000"
    // width="800px"
    // height="800px"
    viewBox="0 0 36 36"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title>{"log"}</title>
    <path
      d="M18,32.43a1,1,0,0,1-.61-.21C11.83,27.9,8,24.18,5.32,20.51,1.9,15.82,1.12,11.49,3,7.64c1.34-2.75,5.19-5,9.69-3.69A9.87,9.87,0,0,1,18,7.72a9.87,9.87,0,0,1,5.31-3.77c4.49-1.29,8.35.94,9.69,3.69,1.88,3.85,1.1,8.18-2.32,12.87C28,24.18,24.17,27.9,18.61,32.22A1,1,0,0,1,18,32.43ZM10.13,5.58A5.9,5.9,0,0,0,4.8,8.51c-1.55,3.18-.85,6.72,2.14,10.81A57.13,57.13,0,0,0,18,30.16,57.13,57.13,0,0,0,29.06,19.33c3-4.1,3.69-7.64,2.14-10.81-1-2-4-3.59-7.34-2.65a8,8,0,0,0-4.94,4.2,1,1,0,0,1-1.85,0,7.93,7.93,0,0,0-4.94-4.2A7.31,7.31,0,0,0,10.13,5.58Z"
      className="clr-i-outline clr-i-outline-path-1"
    />
    <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </svg>
);

const ProfileBtn = (props) => (
    <svg
    // width="800px"
    // height="800px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={12}
      cy={7}
      r={4}
      stroke="#000000"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <title>{"profile"}</title>
    <path
      d="M4 21V17C4 15.8954 4.89543 15 6 15H18C19.1046 15 20 15.8954 20 17V21"
      stroke="#000000"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LogoutBtn = (props) => (
    <svg
    fill="#000000"
    // width="800px"
    // height="800px"
    viewBox="0 0 36 36"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title>{"logout"}</title>
    <path
      d="M7,6H23v9.8h2V6a2,2,0,0,0-2-2H7A2,2,0,0,0,5,6V30a2,2,0,0,0,2,2H23a2,2,0,0,0,2-2H7Z"
      className="clr-i-outline clr-i-outline-path-1"
    />
    <path
      d="M28.16,17.28a1,1,0,0,0-1.41,1.41L30.13,22H15.63a1,1,0,0,0-1,1,1,1,0,0,0,1,1h14.5l-3.38,3.46a1,1,0,1,0,1.41,1.41L34,23.07Z"
      className="clr-i-outline clr-i-outline-path-2"
    />
    <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </svg>
);

const UpBtn = (props) => (
<svg
    width="36px"
    height="36px"
    viewBox="0 0 48 48"
    fill="#ffffff"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 30L25 18L37 30"
      stroke="#000000"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LikeBtnColor = (props) => (
    <svg
      // width="800px"
      // height="800px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 48 48"
      {...props}
    >
      <title>{"like"}</title>
      <path
        fill="#F44336"
        d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"
      />
    </svg>
);