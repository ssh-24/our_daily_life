/*eslint-disable */
import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollectionDtl } from '../hooks/useCollectionDtl';
import { setVisible } from "../store/inputSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

function Profile(props) {
    const {user} = useAuthContext()
    let {uid} = useParams() // 사용자 id 키값 (URL 파라미터)
    const {documents,error} = useCollectionDtl("FeedData",["UID","==",uid]) // URL 파라미터 --> UID로 프로필 조회
    const [docReady, setDocReady] = useState(false)
    const loginUserInfo = useSelector((state) => state.loginUserInfo) // 로그인 유저 정보, (Input.js 에서 초기 셋팅)
    let [fade, setFade] = useState('') // Animation Style State
    let dispatch = useDispatch()
    let navigate = useNavigate() // 페이지 이동

    //************************************************************
    // [현재 이슈 사항] 같은 프로필 페이지에서 검색 버튼 시 변경이 제대로 안됨, 새로고침 하면 잘 됨
    //************************************************************
    const location = useLocation() // 현재 URL 정보 가져오기 위함
    let [urlInfo, setUrlInfo] = useState('') // 얘로 새로고침 어떻게 구현해????
    
    useEffect(()=>{
        console.log("URL이 바꼈자나여", location.pathname.replaceAll('/profile/',''))
        setUrlInfo(location.pathname.replaceAll('/profile/',''))
    }, [location])
    //************************************************************
    
    
    // 프로필 사진 변경
    const profileChange = () => {
        // 로직 구현해야 함..
        window.blur()
        alert("기능 구현 중 ^.^")
    }

    // 게시물 등록
    const uploadClicked = () => {
        dispatch(setVisible(true)) // 새 게시물 등록 모달 보이게
    }

    // 메인페이지로 이동 + 상단으로 스크롤 이동
    const goMain = () => {
        navigate('/')
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // 게시물 상세 화면으로 이동
    const goDetail = (props) => {
        navigate('/detail/'+props.id) // 게시물 id를 URL 파라미터로 넘긴다 (키값)
    }

    useEffect(()=>{
        // documents 여부 state 변경
        setDocReady(false)
        // 내 프로필이면
        if (user.uid === uid) {
            console.log("user :",user)
            console.log("이메일 :",user.email)
            console.log("닉네임 :",user.displayName)
        }
    },[])

    useEffect(()=>{
        // documents 여부 state 변경
        setDocReady(true)
        // 내 프로필이면
        if (user.uid === uid) {
            console.log("내 글 :",documents)
        } else {
            console.log("검색 :",documents)
        }
    },[documents])

    useEffect(()=>{
        setFade(docReady? 'transition-end': '') // 애니메이션 효과
    },[docReady])


    return (
        <>
            <section>
                <div className={`container transition-start ${fade}`}>
                    <div className='container-wrap'>
                        <img className="profile-img" src={
                            user.uid === uid ?
                             loginUserInfo.profileImage
                             : docReady && documents != null && documents.length !== 0 ?
                                documents[0].profileImage
                                : '/assets/profile_default.png'
                             } alt="프로필 사진"/>
                        <div className="profile-info">
                            <h3>{
                                user.uid === uid ?
                                user.email
                                : docReady && documents != null && documents.length !== 0 ?
                                    documents[0].userEmail
                                    : '데이터가 없어요!'
                            }</h3>
                            <h4>@{
                                user.uid === uid ?
                                user.displayName
                                : docReady && documents != null && documents.length !== 0 ?
                                    documents[0].displayName
                                    : '데이터가 없어요!'
                            }</h4>
                            <p>
                                {/* 소개글 내용이 짧을 때 줄어드는 거 막아야 할 듯*/}
                                {
                                    user.uid === uid ?
                                    loginUserInfo.profileIntro
                                    : //** 소개글 데이터는 따로 받아와야할듯 **
                                     '안녕하세요! 저의 프로필 페이지를 방문해주셔서 감사합니다.'
                                }
                            </p>
                            {
                                // 프로필 변경 버튼 --> 내 프로필에서만 표시
                                user.uid === uid ?
                                <button onClick={(e)=>{
                                    e.preventDefault()
                                    profileChange()
                                }}>프로필 변경</button>
                                : null
                            }
                        </div>
                    </div>
                </div>

                <div className={`content-list transition-start ${fade}`}>
                    <div className='content-wrap'>
                        {
                            docReady && documents != null && documents.length !== 0
                            ? documents.map((a,i)=>{
                                return (
                                    // 클릭 시 상세로 이동!
                                    <img key={i} src={a.downloadURL} alt='#' onClick={(e) => goDetail(a)}/>
                                )
                            })
                            : // 유저 검색 --> 게시물 작성한 사람만 되기 때문에 예외처리 X
                              <div className="no-post">
                                <p>작성된 게시물이 없어요!</p>
                                <button className="upload-btn-profile" onClick={uploadClicked}>
                                    게시물 작성하기
                                </button>
                              </div>
                        }
                    </div>

                    <div className="profile-go-main-btn-area">
                        <button className="go-main-btn" onClick={goMain}>
                            돌아가기
                        </button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Profile;