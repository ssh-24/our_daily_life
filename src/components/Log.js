/*eslint-disable */
import { useState, useEffect } from 'react';
import Post from "./Post";
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollectionDtl } from '../hooks/useCollectionDtl';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Log(props) {
    const {user} = useAuthContext()
    let navigate = useNavigate() // 페이지 이동
    const loginUserInfo = useSelector((state) => state.loginUserInfo) // 로그인 유저 정보, (Input.js 에서 초기 셋팅)
    const {documents,error} = useCollectionDtl("FeedData", ["peopleWhoLike","array-contains",user.uid] );
    const [docReady, setDocReady] = useState(false)
    let [fade, setFade] = useState('') // Animation Style State

    // 메인페이지로 이동 + 상단으로 스크롤 이동
    const goMain = () => {
        navigate('/')
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    useEffect(()=>{
        // documents 여부 state 변경
        setDocReady(false)
        console.log("user :",user)
        console.log("이메일 :",user.email)
        console.log("닉네임 :",loginUserInfo.displayName)
    },[])

    useEffect(()=>{
        // documents 여부 state 변경
        setDocReady(true)
        // 날짜, 최근 좋아요 등 기준 잡고 정렬하면 좋을 듯
        console.log("좋아하는 글 :",documents)
    },[documents])

    useEffect(()=>{
        setFade(docReady? 'transition-end': '') // 애니메이션 효과
    },[docReady])

    return (
        <>
            <div className={`liked-feeds transition-start ${fade}`}>
                {
                    docReady && documents != null && documents.length !== 0
                    ? <h2 className='menu-header'>좋아해요!</h2>
                    : null
                }

                {
                    docReady && documents != null && documents.length !== 0
                    ? documents.map((a,i) => {
                        let post = {...a}
                        return (<Post key={i} post={post}/>) 
                    })
                    : <div className="no-like">
                        <p>좋아하는 게시물이 없어요!</p>
                        <button className="lookaround-btn" onClick={goMain}>
                            피드 둘러보기
                        </button>
                      </div>
                }

                {
                    docReady && documents != null && documents.length !== 0
                    ?
                    <div className="log-go-main-btn-area">
                        <button className="go-main-btn" onClick={goMain}>
                            돌아가기
                        </button>
                    </div>
                    : null
                }
            </div>
            
        </>
    )
}

export default Log;