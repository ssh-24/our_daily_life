/*eslint-disable */
import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import { useSelector, useDispatch } from "react-redux";
import { setVisible } from "../store/inputSlice";
import { useNavigate } from "react-router-dom";

function Nav(props) {
  const {user} = useAuthContext()
  const {logout} = useLogout()
  let navigate = useNavigate()
  let dispatch = useDispatch()
  const userList = useSelector((state) => state.userList); // 검색 자동완성에 쓰일 redux store data
  const visible = useSelector((state) => state.inputState.visible) // input 모달 여부, 버튼 색깔 분기처리에 사용
  let [fade, setFade] = useState('') // Animation Style State
  let [acShow, setAcShow] = useState('d-none') // 자동완성 영역 표시 여부, 초기값 안보이게
  let [searchInfo, setSearchInfo] = useState('') // 검색 버튼으로 날릴 state (유저 UID)
  const [searchInput, setSearchInput ] = useState(document.querySelector('.search_input')) // input 영역
  const [acList, setAcList ] = useState(document.querySelector('.ac-list')) // 모달 ul 영역

  // 스크롤 이벤트, 스크롤이 내려갔을 경우에만 상단으로 이동버튼 보이도록
  window.addEventListener('scroll', () => {
    setFade(window.scrollY > 0 ? 'transition-end': '') // 애니메이션 효과
  });

  // 로고, 홈 버튼 클릭, 메인페이지로 이동 + 상단으로 스크롤 이동
  const goMain = () => {
    navigate('/')
    scrollTop()
  }

  // 상단으로 스크롤 이동
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 프로필 페이지 이동
  const goProfile = (val) => {
    navigate(`/profile/${val}`)
    scrollTop()
    
    // **새로고침 해버리자**
    window.location.reload();
  }

  // 검색 실행 --> 프로필 페이지로 이동
  const searchSubmit = () => {
    searchInfo.length === 0 ?
    alert('목록에서 선택해주세요! ( •̀ ω •́ )✧')
    : goProfile(searchInfo)
  }

  //===========================================================
  // 검색어 자동완성 기능
  //===========================================================
  // 사용자 리스트 state 입력되면 (in Feeds), 추천 li 채우기 (초기값)
  useEffect(()=>{
    fillAutoComplete()
  },[userList])
  
  // 재렌더링마다 실행
  useEffect(()=>{
    setSearchInput(document.querySelector('.search_input'));
    setAcList(document.querySelector('.ac-list'));
  })

  // 추천 li 초기값 셋팅
  const fillAutoComplete = () => {
    if (userList != null && userList.length !== 0 && userList != undefined) {
      acList != null ? acList.innerHTML = '' : null // 초기화, null 예외 처리
      userList.map((a,i)=>{
        const li = document.createElement("li")
        li.innerHTML = a.Name
        li.className = a.UID
        li.addEventListener('click',(e) => {
          acSelect(e)
        })
        acList != null ? acList.appendChild(li) : null // null 예외처리 *이놈때문이였음*
      })
    }
    console.log("검색 추천 리스트: ",acList)
  }

  // input onChange --> 추천 UI 표시
  const searchRequest = (search_text) => {
    setAcShow(search_text.length > 0 ? 'transition-end': ''); // input 입력값이 있을 때만 표시
    // children --> HTMLCollection 반환, 유사 배열 객체(Array-like Objects), for..of 사용
    // childNodes --> NodeList 반환, forEach() 사용

    // 각 요소별로 보이기/숨김 처리
    acList.childNodes.forEach((a,i)=>{
      // 두 개 입력받았을 때부터 자동완성 추천
      if (search_text.length >= 2 ) {
        // 입력값과 innerHTML의 첫 글자 다르면 숨김
        if( search_text.substr(0,1) !== a.innerHTML.substr(0,1)) {
          // d-none 없을때만 추가
          if( !(a.className.includes("d-none")) ){
            a.className = a.className + ' d-none'
          }
        } else {
          //첫 글자가 같을 경우겠죠? 모든 d-none 제거해주기
          a.className = a.className.replaceAll(' d-none','')
        }
      } else {
        // 입력이 한 글자나 0일 경우, 모든 d-none 제거해주기 (초기값 다 보여주기)
        a.className = a.className.replaceAll(' d-none','')
      }
    })
  }
  
  // input 포커싱 --> UI 표시
  const searchFocus = () => {
    setSearchInfo('') // UID 초기화
    setAcShow(searchInput.value.length > 0 ? 'transition-end' : ''); // *포커스 있어도*, input 입력값이 있을 때만 표시
  }

  // input 포커스 아웃 --> UI 숨기기
  const searchBlur = () => {
    setSearchInfo('') // UID 초기화
    setAcShow('');
  }
  
  // 추천 리스트에서 선택 --> input에 표시되는 innerHTML / 실제 검색 키값 state 셋팅
  const acSelect = (e) => {
    setSearchInfo(e.target.className) // 검색할 state --> UID로 변경 ( 선택 시에만 **유일하게 변경** )
    searchInput.value = e.target.innerHTML
    setAcShow('d-none'); // 선택 후 d-none 처리
  }
  //===========================================================


  // 등록버튼 클릭
  const uploadClicked = () => {
    dispatch(setVisible(true)) // 새 게시물 등록 모달 표시
  }

  // 로그버튼 클릭
  const logClicked = () => {
    navigate('/log')
    scrollTop()
  }
  
  // 프로필버튼 클릭
  const profileClicked = () => {
    goProfile(user.uid)
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
                  {/* 검색 실행 */}
                  <SearchBtn className="search-btn" onClick={searchSubmit}/>
                  <input aria-label="검색" autoCapitalize="none" className="search_input" placeholder="검색" type="text"
                      onChange={(e)=> {searchRequest(e.target.value)}}
                      onBlur={searchBlur}
                      onFocus={searchFocus}/>
                  {/* 검색어 자동완성 리스트 목록 */}
                  <div className={`auto-complete-area transition-start ${acShow}`}>
                    <ul className="ac-list">
                      {/* 추천될 li 가 들어간다 */}
                    </ul>
                  </div>
              </div>
          
              <div className="btn-list">
                  <div className="btn-item">
                      { props.status === 'home' ?
                        <HomeBtnOn onClick={(e)=>{
                          e.preventDefault()
                          goMain()}}/>
                       : 
                        <HomeBtn onClick={(e)=>{
                          e.preventDefault()
                          goMain()}}/>
                      }
                  </div>
                  <div className="btn-item">
                      { visible ?
                        <AddBtnOn onClick={(e)=>{
                          e.preventDefault()
                          uploadClicked()}}/>
                      : 
                        <AddBtn onClick={(e)=>{
                          e.preventDefault()
                          uploadClicked()}}/>
                      }
                  </div>

                  <div className="btn-item">
                      { props.status === 'log' ?
                        <LikeBtnOn onClick={(e)=>{
                          e.preventDefault()
                          logClicked()}}/>
                      :
                        <LikeBtn onClick={(e)=>{
                          e.preventDefault()
                          logClicked()}}/>
                      }
                  </div>

                  <div className="btn-item">
                      { props.status === 'profile' ?
                        <ProfileBtnOn onClick={(e)=>{
                          e.preventDefault()
                          profileClicked()}}/>
                      :
                        <ProfileBtn onClick={(e)=>{
                          e.preventDefault()
                          profileClicked()}}/>
                      }
                  </div>

                  <div className="btn-item">
                      <LogoutBtn onClick={logout}/>
                  </div>
              </div>
          </div>
      </nav>
    
      <div className={`go-top-btn transition-start ${fade}`}>
        <ScrollTopBtn onClick={(e)=>{
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

const HomeBtnOn = (props) => (
  <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>{"home"}</title>
    <path d="M7.8254 0.120372C7.63815 -0.0401239 7.36185 -0.0401239 7.1746 0.120372L0 6.27003V13.5C0 14.3284 0.671573 15 1.5 15H5.5C5.77614 15 6 14.7761 6 14.5V11.5C6 10.6716 6.67157 10 7.5 10C8.32843 10 9 10.6716 9 11.5V14.5C9 14.7761 9.22386 15 9.5 15H13.5C14.3284 15 15 14.3284 15 13.5V6.27003L7.8254 0.120372Z" fill="#000000"/>
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

const AddBtnOn = (props) => (
  <svg
    fill="#000000"
    // width="800px"
    // height="800px"
    viewBox="0 0 1000 1000"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{"new post"}</title>
    <path d="M856 40H142q-42 0-72 30t-30 72v714q0 42 30 72t72 30h714q42 0 72-30t30-72V142q0-42-30-72t-72-30zM754 550H550v204H448V550H244V448h204V244h102v204h204v102z" />
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

const LikeBtnOn = (props) => (
  <svg
    // width="800px"
    // height="800px"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>{"log"}</title>
    <path
      d="M4.03553 1C1.80677 1 0 2.80677 0 5.03553C0 6.10582 0.42517 7.13228 1.18198 7.88909L7.14645 13.8536C7.34171 14.0488 7.65829 14.0488 7.85355 13.8536L13.818 7.88909C14.5748 7.13228 15 6.10582 15 5.03553C15 2.80677 13.1932 1 10.9645 1C9.89418 1 8.86772 1.42517 8.11091 2.18198L7.5 2.79289L6.88909 2.18198C6.13228 1.42517 5.10582 1 4.03553 1Z"
      fill="#000000"
    />
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

const ProfileBtnOn = (props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 472.615 472.615"
    style={{
      enableBackground: "new 0 0 472.615 472.615",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <title>{"profile"}</title>
    <g>
      <g>
        <circle cx={236.308} cy={117.504} r={111.537} />
      </g>
    </g>
    <g>
      <g>
        <path d="M369,246.306c-1.759-1.195-5.297-3.493-5.297-3.493c-28.511,39.583-74.993,65.402-127.395,65.402 c-52.407,0-98.894-25.825-127.404-65.416c0,0-2.974,1.947-4.451,2.942C41.444,288.182,0,360.187,0,441.87v24.779h472.615V441.87 C472.615,360.549,431.538,288.822,369,246.306z" />
      </g>
    </g>
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

const ScrollTopBtn = (props) => (
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