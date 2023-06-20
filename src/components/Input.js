/*eslint-disable */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollectionDtl } from '../hooks/useCollectionDtl';
import { setUserEmail, setUID, setPostText, setVisible, setDisplayName } from "../store/inputSlice";
import { useFirestore } from "../hooks/useFirestore";
import { setLoginUserInfo } from "../store/loginUserSlice";

function Input(){
    const { isAuthReady, user } = useAuthContext();
    const {documents,error} = useCollectionDtl("UserData",["UID","==",user.uid]) // firebase에 저장된 UserData 컬렉션에서 가져온다!
    const inputState = useSelector((state) => state.inputState)
    const visible = useSelector((state) => state.inputState.visible) // input 모달 여부
    let dispatch = useDispatch()
    let [showImg, setShowImg] = useState('') // 미리보기 이미지
    let [saveImg, setSaveImg] = useState('') // 실물저장 이미지
    let [fade, setFade] = useState('') // Animation Style State

    // 글 등록 모달 on --> 스크롤 X
    // 이전 작성 정보 --> 글, 미리보기 이미지 초기화
    useEffect(()=>{
        document.body.style.overflow = visible? 'hidden' : '';
        dispatch(setPostText(''))
        setShowImg('')
        setFade(visible? 'transition-end': '') // 애니메이션 효과
    },[visible])

    useEffect(()=>{
        // mount, 초기로딩 완료 --> 작성자 정보 미리 셋팅
        dispatch(setUserEmail(user.email))
        dispatch(setUID(user.uid))

        // unmount 시 초기화
        return () => {
            dispatch(setVisible(false))
            dispatch(setPostText(''))
            dispatch(setUserEmail(''))
            dispatch(setUID(''))
        }
    },[])

    // 로그인 사용자 정보 받아와서, Redux State에도 저장한다
    useEffect(()=>{
        console.log("로그인 유저(firebase)|",documents)
        if (documents != null && documents.length !== 0) {
            let obj = documents[0]
            dispatch(setDisplayName(documents[0].displayName))
            delete obj.createdTime // createdTime이 객체 형태라서 non-serializable value 에러가 나서 지워줬다
            dispatch(setLoginUserInfo(obj)) // redux state에 저장
        }
    },[documents])
    
    window.onkeydown = (e) => {
        if(e.key === 'Escape') {
            console.log('딸')
        }
    }
    window.onkeyup = (e) => { 
        if(e.key === 'Escape') {
            console.log('깍')
            dispatch(setVisible(false))
        }
    }

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
        console.log("저장할 파일 -->", e.target.files[0]);

        let reader = new FileReader();
        reader.onload = function(e) {
            // 미리보기에 보여줄 state 변경
            setShowImg(e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
        setSaveImg(e.target.files[0]);
    }

    // 폼이 제출되면 실행 [게시물 등록]
    const onSubmit = (e) => {
        e.preventDefault(); // submit시 페이지 reload 방지
        let savedData = {...inputState}
        // 저장 시 없는 데이터 추가로 넣어주기
        savedData.peopleWhoLike = []
        savedData.likes = 0
        savedData.peopleWhoReply = []
        savedData.replies = 0
        savedData.peopleWhoSave = []
        savedData.shares = 0
        // 회원의 프로필 사진 정보를 가져와서 넣어줌, 프로필 사진은 회원가입(useSignup) 시, 기본 이미지로 등록된다
        savedData.profileImage = documents[0].profileImage

        console.log("게시물 등록 --> ",savedData);

        // [FireBase 저장 로직]
        // 저장
        addDocument( savedData ,saveImg)
        .then(()=>{
            // 모달 끄기
            dispatch(setVisible(false))
        })
    }

    return(
        <>
            {
                visible?
                <>
                    {/* 뒤에 요소들 덮어서 모달만 보이게 */}
                    <div className={`dimmed-layer ${fade}`}/>

                    <div className={`input-area transition-start ${fade}`}>
                        <div className="form-container">
                            <form onSubmit={onSubmit}>
                                <h3>새 게시물 만들기</h3>
                                <div className="form-group">
                                    <input accept="image/jpeg,image/png,image/heic,image/heif,video/mp4,video/quicktime" className="img-input" multiple="" type="file" onChange={onChange} required/>
                                </div>

                                {/* 이미지 미리보기 */}
                                { showImg.length > 0 && <img src={showImg ?? showImg} alt="" style={{marginBottom : '13px',width : '80%', maxHeight:'240px'}}/>}
                                
                                <div className="form-group">
                                    <input type="text" value={inputState.postText} onChange={onChange} className="form-control post-text-input" name="postText" placeholder="내용을 입력해 주세요!" required/>
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
                : null
            }
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