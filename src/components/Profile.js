/*eslint-disable */
import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollectionDtl } from '../hooks/useCollectionDtl';
import { setVisible } from "../store/inputSlice";
import { useDispatch } from "react-redux";

function Profile(props) {
    const {user} = useAuthContext()
    const {documents,error} = useCollectionDtl("FeedData",["UID","==",user.uid])
    const [docReady, setDocReady] = useState(false)
    let [fade, setFade] = useState('') // Animation Style State
    let dispatch = useDispatch()
    
    // 프로필 사진 변경
    const profileChange = () => {
        // 로직 구현해야 함..
        window.blur()
        alert("기능 구현 중 ^.^")
    }

    // 게시물 등록
    const uploadClicked = () => {
        dispatch(setVisible(true)) // 새 게시물 등록 모달 보이게
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
        console.log("내가 쓴글 :",documents)
    },[documents])

    useEffect(()=>{
        setFade(docReady? 'transition-end': '') // 애니메이션 효과
    },[docReady])


    return (
        <>
            <section>
                <div className={`container transition-start ${fade}`}>
                    <div className='container-wrap'>
                        {
                            docReady && documents != null && documents.length !== 0
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
                            <button onClick={(e)=>{
                                e.preventDefault()
                                profileChange()
                            }}>프로필 변경</button>
                        </div>
                    </div>
                </div>

                <div className={`content-list transition-start ${fade}`}>
                    <div className='content-wrap'>
                        {
                            docReady && documents != null && documents.length !== 0
                            ? documents.map((a,i)=>{
                                return (
                                    <img key={i} src={a.downloadURL} alt='#' onClick={()=>{
                                        console.log(a.postText);
                                    }}/>
                                )
                            })
                            : <div className="no-post">
                                <p>작성된 게시물이 없어요!</p>
                                <button className="upload-btn-profile" onClick={uploadClicked}>
                                    게시물 작성하기
                                </button>
                              </div>
                        }
                    </div>
                </div>

            </section>
        </>
    )
}

export default Profile;