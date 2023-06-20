/*eslint-disable */
import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollectionDtl } from '../hooks/useCollectionDtl';
import { setVisible } from "../store/inputSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProfileInput from './ProfileInput';
import { setPfVisible } from "../store/profileSlice";

function Profile(props) {
    const {user} = useAuthContext()
    let {uid} = useParams() // 사용자 id 키값 (URL 파라미터)
    const {documents : FeedInfo} = useCollectionDtl("FeedData",["UID","==",uid]) // URL 파라미터 --> UID로 프로필 조회
    const {documents : UserInfo} = useCollectionDtl("UserData",["UID","==",uid]) // URL 파라미터 --> UID로 프로필 조회
    const [docReady, setDocReady] = useState(false)
    const loginUserInfo = useSelector((state) => state.loginUserInfo) // 로그인 유저 정보, (Input.js 에서 초기 셋팅)
    let [fade, setFade] = useState('') // Animation Style State
    const pfVisible = useSelector((state) => state.profileState.pfVisible) // 프로필 변경 모달 표시 여부 ( profile change modal )
    let dispatch = useDispatch()
    let navigate = useNavigate() // 페이지 이동
    
    // 프로필 사진 변경
    const profileChange = () => {
        // 프로필 변경 모달 on
        dispatch(setPfVisible(true))
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
            console.log("최초가입 시 닉네임 (user.displayName) :",user.displayName)
        }
    },[])
    
    useEffect(()=>{
        // documents 여부 state 변경
        setDocReady(true)
        // 내 프로필이면
        if (user.uid === uid) {
            console.log("내 글 :",FeedInfo)
        } else {
            console.log("검색 :",FeedInfo)
        }
    },[FeedInfo])

    useEffect(()=>{
        setFade(docReady? 'transition-end': '') // 애니메이션 효과
    },[docReady])


    return (
        <>
            <section>
                <div className={`container transition-start ${fade}`}>
                    <div className='container-wrap'>
                        <img className="profile-img" src=
                            {
                                user.uid === uid ?
                                loginUserInfo.profileImage
                                : docReady && UserInfo != null && UserInfo.length !== 0 ?
                                    UserInfo[0].profileImage
                                    : '/assets/profile_default.png'
                             } alt="프로필 사진"/>
                        <div className="profile-info">
                            {
                                user.uid === uid ?
                                <h3 className='profile-displayname'>@
                                    {
                                        loginUserInfo.displayName
                                    }
                                </h3>
                                : 
                                <h3 className='profile-displayname'>@
                                    {
                                        docReady && UserInfo != null && UserInfo.length !== 0 ?
                                        UserInfo[0].displayName
                                        : '데이터가 없어요!'
                                    }
                                </h3>
                            }

                            {
                                // Email --> 내 프로필에서만 표시
                                user.uid === uid ?
                                <h4 className='profile-email'>✉&nbsp;
                                    {
                                        // 밑에 처럼 하면 내 정보가 아닌 프로필의 Email 정보도 보여줄 수 있긴 함
                                        user.uid === uid ?
                                        user.email
                                        : docReady && FeedInfo != null && FeedInfo.length !== 0 ?
                                            FeedInfo[0].userEmail
                                            : '데이터가 없어요!'
                                    }
                                </h4>
                                : null
                            }

                            <p className='profile-intro'>
                                {
                                    docReady && UserInfo != null && UserInfo.length !== 0 ?
                                    UserInfo[0].profileIntro
                                    : '데이터가 없어요!' 
                                }
                            </p>
                            {
                                // 프로필 변경 버튼 --> 내 프로필에서만 표시
                                user.uid === uid ?
                                <button onClick={profileChange}>프로필 변경</button>
                                : null
                            }
                        </div>
                    </div>
                </div>

                <div className={`content-list transition-start ${fade}`}>
                    <div className={
                        // 게시물 수에 따라서 스타일을 다르게 설정
                        docReady && FeedInfo != null && FeedInfo.length > 2 ?
                         'content-wrap' 
                         : 
                            docReady && FeedInfo != null && FeedInfo.length === 2 ?
                             'content-wrap-two'
                             : docReady && FeedInfo != null && FeedInfo.length === 1 ?
                                'content-wrap-one'
                                : 'content-wrap-no-post'
                    }>
                        {
                            docReady && FeedInfo != null && FeedInfo.length !== 0
                            // createUqe --> 생성일시 기준으로 정렬 ( 최신 순이 먼저 오게 )
                            ? FeedInfo.sort((a,b)=>b.createdUqe.substring(0,10) - a.createdUqe.substring(0,10)).map((a,i)=>{
                                return (
                                    // 클릭 시 상세로 이동!
                                    <img key={a.createdUqe} className='my-img' src={a.downloadURL} alt='#' onClick={(e) => goDetail(a)}/>
                                )
                            })
                            : 
                                <div className="no-post">
                                    <p>작성된 게시물이 없어요!</p>
                                    {
                                        // 본인 프로필일 때만 게시글 작성 버튼
                                        user.uid === uid ?
                                            <button className="upload-btn-profile" onClick={uploadClicked}>
                                                게시물 작성하기
                                            </button>
                                        : 
                                            null
                                    }
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

            {/* 프로필 변경 모달 */}
            {
                pfVisible ?
                <ProfileInput/>
                : null
            }
        </>
    )
}

export default Profile;