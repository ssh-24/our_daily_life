/*eslint-disable */
import {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPostImageUrl, setPostText, setVisible } from "../store/inputSlice";

function Input(){
    const inputState = useSelector((state) => state.inputState)
    let dispatch = useDispatch()

    // 인풋 타입에 따라 state 값을 변경
    const onChange = (e) => {
        const inputData = {
            type: e.target.type,
            value: e.target.value
        }
        if (inputData.type === 'text') {
            dispatch(setPostText(inputData.value))
        } else {
            dispatch(setPostImageUrl(inputData.value))
        }
    }

    useEffect(()=>{
        console.log(`게시물 :\n ${inputState.postImageUrl} \n ${inputState.postText}`);
    },[inputState])

    // unmount 시 초기화
    useEffect(()=>{
        return () => {
            dispatch(setVisible(false))
            dispatch(setPostText(''))
            dispatch(setPostImageUrl(''))
        }
    },[])



    // 폼이 제출되면 실행 [게시물 등록]
    const onSubmit = (e) => {
        e.preventDefault(); // submit시 페이지 reload 방지
        alert(`게시물 등록 ${inputState.postImageUrl}, ${inputState.postText}`);

        // FireBase 저장 로직 여기다가??

        dispatch(setVisible(false))
    }

    return(
        <>
            {/* 뒤에 요소들 덮어서 모달만 보이게 */}
            <div className="dimmed-layer"/>

            <div className="input-area">
                <div className="form-container">
                    <form onSubmit={onSubmit}>
                        <h3>새 게시물 만들기</h3>
                        <div className="form-group">
                            <input accept="image/jpeg,image/png,image/heic,image/heif,video/mp4,video/quicktime" className="img-input" multiple="" type="file" onChange={onChange} required/>
                        </div>
                        <div className="form-group">
                            <input type="text" value={inputState.postText} onChange={onChange} className="form-control" name="postText" placeholder="문구 입력" required/>
                        </div>
                        <input type="submit" className="post-btn" value="공유하기"/>
                        <div className="close-btn">
                            <CloseBtn onClick={(e)=>{
                                e.preventDefault()
                                dispatch(setVisible(false))
                            }}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Input;


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