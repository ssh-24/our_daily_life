/*eslint-disable */
import { useState, useEffect } from 'react';
import Post from "./Post";
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollectionDtl } from '../hooks/useCollectionDtl';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Saved(props) {
    const {user} = useAuthContext()
    let navigate = useNavigate() // 페이지 이동
    const loginUserInfo = useSelector((state) => state.loginUserInfo) // 로그인 유저 정보, (Input.js 에서 초기 셋팅)
    const {documents,error} = useCollectionDtl("FeedData", ["peopleWhoSave","array-contains",user.uid] );
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
        // console.log("user :",user)
        // console.log("이메일 :",user.email)
        // console.log("닉네임 :",loginUserInfo.displayName)
    },[])

    useEffect(()=>{
        // documents 여부 state 변경
        setDocReady(true)
        // console.log("저장한 글 :",documents)
    },[documents])

    useEffect(()=>{
        setFade(docReady? 'transition-end': '') // 애니메이션 효과
    },[docReady])

    return (
        <>
            <div className={`liked-feeds transition-start ${fade}`}>
                {
                    docReady && documents != null && documents.length !== 0
                    ? <h2 className='menu-header'>보관함</h2>
                    : null
                }

                {
                    docReady && documents != null && documents.length !== 0
                    // createUqe --> 생성일시 기준으로 정렬 ( 최신 순이 먼저 오게 )
                    ? documents.sort((a,b)=>b.createdUqe.substring(0,10) - a.createdUqe.substring(0,10)).map((a,i)=>{
                        let post = {...a}
                        return (<Post key={i} post={post}/>) 
                    })
                    : <div className="no-like">
                        <p>저장한 게시물이 없어요!</p>
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

export default Saved;