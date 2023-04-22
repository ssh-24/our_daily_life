/*eslint-disable */
import {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuthContext } from "../hooks/useAuthContext";
import { setUserEmail, setUID, setPostText, setVisible, setDisplayName } from "../store/inputSlice";
import { useFirestore } from "../hooks/useFirestore";

function Input(){
    
    const inputState = useSelector((state) => state.inputState)
    const { isAuthReady, user } = useAuthContext();
    let dispatch = useDispatch()
    let [showImg, setShowImg] = useState('')
    let [saveImg, setSaveImg] = useState('')
    
    /**************************************************************
     * 글 저장
     **************************************************************/
    // 컬렉션 이름 파라미터로 넣어주기, 저장소에 해당 이름의 컬렉션으로 저장됨
    const { addDocument, response } = useFirestore("FeedData");
    
    // 인풋 타입에 따라 state 값을 변경
    const onChange = (e) => {
        const inputData = {
            type: e.target.type,
            value: e.target.value
        }
        if (inputData.type === 'text') {
            dispatch(setPostText(inputData.value))
        } else {
            // 이미지 미리보기, 실물파일 저장
            setPreviewImg(e)
        }
    }


    // 이미지 value 값 넣기
    // 이미지 미리보기
    const setPreviewImg = (e) => {

        let reader = new FileReader();

        reader.onload = function(e) {
            setShowImg(e.target.result);
        };

        reader.readAsDataURL(e.target.files[0]);
        setSaveImg(e.target.files[0]);
        console.log(e.target.files[0]);

    }


    useEffect(()=>{
        // mount
        console.log(user);   
        dispatch(setUserEmail(user.email))
        dispatch(setUID(user.uid))
        dispatch(setDisplayName(user.displayName))
        
        // unmount 시 초기화
        return () => {
            dispatch(setVisible(false))
            dispatch(setPostText(''))
            dispatch(setUserEmail(''))
            dispatch(setUID(''))
        }
    },[])


    // 폼이 제출되면 실행 [게시물 등록]
    const onSubmit = (e) => {
        e.preventDefault(); // submit시 페이지 reload 방지
        let savedData = {...inputState}
        // 저장 시 없는 데이터 추가로 넣어주기
        savedData.likes = 0
        savedData.replies = 0
        savedData.profileImage = '/assets/default-profile.png' // 기본 프로필 이미지로 들어가도록
        savedData.peopleWhoLike = []
        savedData.peopleWhoReply = []

        console.log("이거로 저장",savedData);

        // [FireBase 저장 로직]
        addDocument( savedData ,saveImg) //저장
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

                        {/* 이미지 미리보기 */}
                        { showImg.length > 0 && <img src={showImg ?? showImg} alt="" style={{marginBottom : '13px',width : '80%', maxHeight:'200px'}}/>}
                        
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