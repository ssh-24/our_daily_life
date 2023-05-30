/*eslint-disable */
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { useCollection } from '../hooks/useCollection';

function Feeds() {
    const postList = useSelector((state) => state.feeds); // 로컬 샘플 데이터
    const {documents,error} = useCollection("FeedData"); // 서버 리얼 데이터
    let [fade, setFade] = useState('') // Animation Style State

    useEffect(()=>{
        console.log('Mock Data',postList)
    }, [])

    useEffect(()=>{
        console.log('Server Data',documents)
        setFade(documents!= null && documents.length > 0? 'transition-end': '') // 애니메이션 효과
    }, [documents])

    return (
        <>
            <div className={`all-feeds transition-start ${fade}`}>
                {/* 리얼 데이터 출력 */}
                {
                    documents ? 
                    documents.map((a,i) => {
                        let post = {...a}
                        return (<Post key={i+postList.length} post={post}/>) 
                    })
                    : null
                }

                {/* 샘플 데이터 출력 */}
                {
                    postList.map((a,i) => {
                        return (<Post key={i+1} post={a} />)
                    })
                }
            </div>
        </>
    );
}

export default Feeds;