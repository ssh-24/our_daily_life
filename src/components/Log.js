/*eslint-disable */
import { useState, useEffect } from 'react';
import Post from "./Post";
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollectionDtl } from '../hooks/useCollectionDtl';

function Log(props) {
    const {user} = useAuthContext()
    const {documents,error} = useCollectionDtl("FeedData", ["peopleWhoLike","array-contains",user.uid] );
    const [docReady, setDocReady] = useState(false)

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
        // documents 정렬해야할듯?
        console.log("좋아하는 글 :",documents)
    },[documents])

    return (
        <>
            <div className="all-feeds">
                {
                    docReady && documents != null && documents.length !== 0
                    ? documents.map((a,i) => {
                        let post = {...a}
                        return (<Post key={i} post={post}/>) 
                    })
                    : <div className="no-like">
                        <p>좋아하는 사진이 없어요!</p>
                      </div>
                }
            </div>
        </>
    )
}

export default Log;