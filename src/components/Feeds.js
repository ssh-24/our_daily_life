/*eslint-disable */
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useCollection } from '../hooks/useCollection';

function Feeds() {
    const {documents,error} = useCollection("FeedData"); // Feeds 전체 데이터
    let [fade, setFade] = useState('') // Animation Style State

    useEffect(()=>{
        console.log('Feeds Data',documents)
        setFade(documents!= null && documents.length > 0? 'transition-end': '') // 애니메이션 효과
    }, [documents])

    return (
        <>
            <div className={`all-feeds transition-start ${fade}`}>
                {/* 서버 데이터 출력 */}
                {
                    documents ? 
                    documents.map((a,i) => {
                        let post = {...a}
                        return (<Post key={a.id} post={post}/>) 
                    })
                    : null
                }
            </div>
        </>
    );
}

export default Feeds;