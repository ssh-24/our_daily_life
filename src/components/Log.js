/*eslint-disable */
import { useState, useEffect } from 'react';
import Post from "./Post";
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollectionDtl } from '../hooks/useCollectionDtl';
import { useNavigate } from "react-router-dom";


function Log(props) {
    const {user} = useAuthContext()
    let navigate = useNavigate() // 페이지 이동
    const {documents,error} = useCollectionDtl("FeedData", ["peopleWhoLike","array-contains",user.uid] );
    const [docReady, setDocReady] = useState(false)

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
        console.log("닉네임 :",user.displayName)
    },[])

    useEffect(()=>{
        // documents 여부 state 변경
        setDocReady(true)
        // 날짜, 최근 좋아요 등 기준 잡고 정렬하면 좋을 듯
        console.log("좋아하는 글 :",documents)
    },[documents])

    return (
        <>
            <div className="liked-feeds">
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
            </div>
        </>
    )
}

export default Log;