/*eslint-disable */
import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollectionDtl } from '../hooks/useCollectionDtl';
// import basicImg from '/assets/profile_default.png';

function Profile(props) {
    const {user} = useAuthContext()
    const {documents,error} = useCollectionDtl("FeedData",["UID","==",user.uid])
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
        console.log("내가 쓴글 :",documents)
    },[documents])

    return (
        <>
            <section>
                <div className="container">
                    <div className='container-wrap'>
                        {
                            docReady && documents != null
                            ? <img className="profile-img" src={documents[0].profileImage} alt="프로필 사진"/>
                            : <img className="profile-img" src='/assets/profile_default.png' alt="프로필 사진"/>
                        }
                        <div className="profile-info">
                            <h3>{user.email}</h3>
                            <h4>@{user.displayName}</h4>
                            <p>
                                안녕하세요! 저의 프로필 페이지를 방문해주셔서 감사합니다
                                {/* 소개글 내용이 짧을 때 줄어드는 거 막아야 할 듯*/}
                            </p>
                            <p>팔로워: 100</p>
                            <p>팔로우: 50</p>
                        </div>
                    </div>
                </div>

                <div className='content-list'>
                    <div className='content-wrap'>
                        {
                            docReady && documents != null
                            ? documents.map((a,i)=>{
                                return (
                                    <img key={i} src={a.downloadURL} alt='#' onClick={()=>{
                                        console.log(a.postText);
                                    }}/>
                                )
                            })
                            : null
                        }
                    </div>
                </div>


                {/* <div className='content-list'>
                    <div className='content-wrap'>
                        <img src='/assets/post_camera.jpg' alt='#'/>
                        <img src='/assets/post_cat.jpg' alt='#'/>
                        <img src='/assets/post_dog.jpg' alt='#'/>
                    </div>
                    <div className='content-wrap'>
                        <img src='/assets/post_camera.jpg' alt='#'/>
                        <img src='/assets/post_cat.jpg' alt='#'/>
                        <img src='/assets/post_dog.jpg' alt='#'/>
                    </div>
                </div> */}

            </section>
        </>
    )
}

export default Profile;