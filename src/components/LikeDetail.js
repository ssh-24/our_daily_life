/*eslint-disable */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLmVisible } from "../store/likeSlice"; 
import { useNavigate } from "react-router-dom";

function LikeDetail(props) {
    let [fade, setFade] = useState('') // Animation Style State
    let [likeList, setLikeList] = useState([]); // 필터링한 정보를 여기에 담아준다 --> 좋아요 리스트
    let dispatch = useDispatch()
    let navigate = useNavigate()

    // 상단으로 스크롤 이동
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // 프로필 페이지 이동
    const goProfile = (val) => {
        navigate(`/profile/${val}`)
        scrollTop()
        
        // **새로고침 해버리자**
        window.location.reload();
    }

    // 초기 mount 시
    useEffect(()=>{
        setFade('transition-end')

        let likePeople = []
        props.peopleWhoLike.map((a,i)=>{
            props.users.forEach((el) => {
                if (el.UID === a) {
                    likePeople.push(el);   
                }
            });
        })
        console.log("좋아요 상세 리스트 --> ",likePeople);

        setLikeList(likePeople); // 필터링한 정보로 state 셋팅
    },[])

    // Esc로 모달 끄기
    window.onkeydown = (e) => {
        if(e.key === 'Escape') {
            console.log('또')
        }
    }
    window.onkeyup = (e) => { 
        if(e.key === 'Escape') {
            console.log('잉')
            dispatch(setLmVisible(false))
        }
    }

    return (
        <>
            {/* 뒤에 요소들 덮어서 모달만 보이게 */}
            <div className={`dimmed-layer-detail ${fade}`} onClick={()=>{dispatch(setLmVisible(false))}}/>
            <div className={`like-detail-area transition-start ${fade}`}>
                <div className="like-detail-container">
                    <h3 className="like-detail-header">좋아하는 사람들</h3>
                    {
                        likeList.length !== 0 ?
                            likeList.map((a,i)=>{
                                return (
                                    <div className="like-user-info" key={a.UID} onClick={()=>{goProfile(a.UID)}}>
                                        <div className="like-user-profileImage">
                                            <img src={a.profileImage} alt="프로필사진"/>
                                        </div>
                                        <span className="like-user-name">{a.displayName}</span>
                                    </div>
                                )
                            })
                        : 
                            <>
                                <h3 className="like-no-user-text">아직 좋아요가 없어요 😥</h3>
                                <h4 className="like-no-user-text-small">첫 좋아요를 눌러볼까요?</h4>
                            </>
                    }
                </div>
            </div>
        </>
    );
}

export default LikeDetail;