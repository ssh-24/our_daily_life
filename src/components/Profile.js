/*eslint-disable */
import { useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollectionDtl } from '../hooks/useCollectionDtl';

function Profile(props) {
    const {user} = useAuthContext()
    const {documents,error} = useCollectionDtl("FeedData",["UID","==",user.uid])
    
    useEffect(()=>{
        console.log("내가 쓴글 :",documents)
        console.log("user :",user)
        console.log("이메일 :",user.email)
        console.log("닉네임 :",user.displayName)
    },[])

    return (
        <>
            PROFILE 보자
        </>
    )
}

export default Profile;