/*eslint-disable */
import { useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollectionDtl } from '../hooks/useCollectionDtl';

function Log(props) {
    const {user} = useAuthContext()
    const {documents,error} = useCollectionDtl("FeedData", ["peopleWhoLike","array-contains",user.uid] );

    useEffect(()=>{
        // 내가 좋아요 누른 게시물만 보이게
        // 앞단에서 정렬 ㄱㄱ
        console.log("좋아하는 글 :",documents)
        console.log("user :",user)
        console.log("이메일 :",user.email)
        console.log("닉네임 :",user.displayName)
    },[])

    return (
        <>
            LOG 보자
        </>
    )
}

export default Log;