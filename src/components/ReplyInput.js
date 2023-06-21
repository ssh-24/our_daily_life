/*eslint-disable */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestore } from "../hooks/useFirestore";
import { setRmVisible } from "../store/replySlice";


function ReplyInput(props) {
    const { editDocument, response } = useFirestore("FeedData");// 컬렉션 이름 파라미터로 넣어주기
    let dispatch = useDispatch()
    const loginUserInfo = useSelector((state) => state.loginUserInfo) // 로그인 유저 정보, (Input.js 에서 초기 셋팅)
    let [fade, setFade] = useState('') // Animation Style State
    let [newReply, setNewReply] = useState({
        displayName: loginUserInfo.displayName,
        UID: loginUserInfo.UID,
        replyText: '',
    }); // 로그인한 loginUserInfo 에서 받아온 displayName, UID 로 박아놓는다 ( displayName의 경우, user 에서는 초기값으로 들어가 있어서 다름 )

    const { displayName, replyText } = newReply; // 구조분해 할당 --> 값 추출

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setNewReply({
          ...newReply, // 기존의 input 객체를 복사한 뒤
          [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    
    // 폼이 제출되면 실행 [댓글 등록]
    const onSubmit = (e) => {
        e.preventDefault(); // submit시 페이지 reload 방지
        let addReply = newReply // 신규 추가 댓글
        let peopleWhoReply = props.post.peopleWhoReply // 댓글 리스트
        let replies = props.post.replies // 댓글 수

        // console.log("신규 댓글 --> ",addReply)
        // 기존 댓글 리스트에 밀어넣자
        peopleWhoReply.push(addReply)

        //=========================================================
        // 수정 firebase 태우기, 변경하는 필드를 객체 형식으로 넣어준다
        //=========================================================
        replies++; // 댓글 수 +1
        editDocument({ peopleWhoReply, replies }, props.post.id)
        .then(()=>{
            // 모달 끄고
            dispatch(setRmVisible(false))
        })
    }

    // 초기 mount 시
    useEffect(()=>{
        setFade('transition-end')
    },[])

    // Esc로 모달 끄기
    window.onkeydown = (e) => {
        if(e.key === 'Escape') {
            console.log('꾸')
        }
    }
    window.onkeyup = (e) => { 
        if(e.key === 'Escape') {
            console.log('욱')
            dispatch(setRmVisible(false))
        }
    }

    return (
        <>
            {/* 뒤에 요소들 덮어서 모달만 보이게 */}
            <div className={`dimmed-layer ${fade}`}/>

            <div className={`input-area transition-start ${fade}`}>
                <div className="form-container">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input type="text" name="replyText" value={replyText} onChange={onChange} className="form-control reply-text-input" placeholder="내용을 입력해 주세요!" required/>
                        </div>
                        <input type="submit" className="post-btn" value="댓글 달기"/>
                        <div className="close-btn">
                            <CloseBtn onClick={(e)=>{
                                e.preventDefault()
                                dispatch(setRmVisible(false))
                            }}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ReplyInput;


const CloseBtn = (props) => (
    <svg
        // width="800px"
        // height="800px"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        {...props}
    >
    <title>{"close"}</title>
    <path
      fill="#FFFFFF"
      d="M12.78 4.28a.75.75 0 00-1.06-1.06L8 6.94 4.28 3.22a.75.75 0 00-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 101.06 1.06L8 9.06l3.72 3.72a.75.75 0 101.06-1.06L9.06 8l3.72-3.72z"
    />
  </svg>
);