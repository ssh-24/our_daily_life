/*eslint-disable */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestore } from "../hooks/useFirestore";
import { setLmVisible } from "../store/likeSlice"; 
import { useCollection } from "../hooks/useCollection";
import { useCollectionDtl } from "../hooks/useCollectionDtl";

function LikeDetail(props) {
    let [fade, setFade] = useState('') // Animation Style State
    const { documents : Users, error } = useCollection("UserData"); // 일단 다 가져와보자 UserData..
    let [likeList, setLikeList] = useState([]); // 필터링한 정보를 여기에 담아줄 생각임
    let dispatch = useDispatch()

    // 초기 mount 시
    useEffect(()=>{
        // document.body.style.overflow = 'hidden'; // 스크롤 제거
        setFade('transition-end')
        console.log(props.peopleWhoLike);
        // let temp = []
        // props.peopleWhoLike.map((a,i)=>{
        //     if (Users != null && Users != undefined) {
        //         Users.forEach((el) => {
        //             if (el.UID === a.UID) {
        //                 temp.push(el);   
        //             }
        //         });
        //     }
        // })
        // console.log("잘들어왔을까??????",temp);

        
        // // unmount 시 초기화
        // return () => {
        //     document.body.style.overflow = ''; // 스크롤 보이기
        // }
    },[])

    useEffect(()=>{
        let temp = []
        props.peopleWhoLike.map((a,i)=>{
            if (Users != null && Users != undefined) {
                Users.forEach((el) => {
                        if (el.UID === a.UID) {
                            temp.push(el);   
                        }
                });
            }
        })
        console.log("잘들어왔을까??????",temp);

    },[Users])

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
                    test
                </div>
            </div>
        </>
    );
}

export default LikeDetail;