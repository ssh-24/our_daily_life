/*eslint-disable */
import { useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollectionDtl } from '../hooks/useCollectionDtl';
// import basicImg from '/assets/profile_default.png';

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
            <section>
                <div className="container">
                    <div className='container-wrap'>
                        <img className="profile-img" src='/assets/profile_default.png' alt="프로필 사진"/>
                        <div className="profile-info">
                            <h1>{user.displayName}</h1>
                            <h2>@{user.email}</h2>
                            <p>
                                안녕하세요! 인스타그램 사용자입니다. 저의 프로필 페이지를 방문해주셔서 감사합니다.
                            </p>
                            <p>팔로워: 100</p>
                            <p>팔로우: 50</p>
                        </div>
                    </div>
                </div>

                <div className='content-list'>
                    <div className='content-wrap'>
                        {documents ?
                            documents.map((a,i)=>{
                        <>
                            <p>있져..?</p>

                        </>
                            })
                        : 
                        <p>없어여..?</p>

                                // <img src={a.downloadURL} alt='#'/>
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