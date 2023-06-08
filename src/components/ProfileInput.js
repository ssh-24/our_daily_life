/*eslint-disable */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollectionDtl } from '../hooks/useCollectionDtl';
import { useFirestore } from "../hooks/useFirestore";
import { setPfVisible } from "../store/profileSlice";
import { Label } from "@material-ui/icons";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";
import Loading from "../layout/Loading";


function ProfileInput(props) {
    const {user} = useAuthContext()
    const { documents : MyFeedInfo } = useCollectionDtl("FeedData",["UID","==",user.uid]) // firebase에 저장된 FeedData 컬렉션에서 가져온다!
    const { documents : UserInfo } = useCollectionDtl("UserData",["UID","==",user.uid]) // firebase에 저장된 UserData 컬렉션에서 가져온다!
    const { editDocument : FeedEdit } = useFirestore("FeedData");// 컬렉션 이름 파라미터로 넣어주기
    const { editDocument : UserEdit } = useFirestore("UserData");// 컬렉션 이름 파라미터로 넣어주기
    const pfVisible = useSelector((state) => state.profileState.pfVisible) // 프로필 변경 모달 표시 여부 ( profile change modal )
    let dispatch = useDispatch()
    let [showImg, setShowImg] = useState('') // 미리보기 이미지
    let [saveImg, setSaveImg] = useState('') // 실물저장 이미지
    let [fade, setFade] = useState('') // Animation Style State
    let [newProfile, setNewProfile] = useState({
        displayName : '',
        profileImage: '',
        profileIntro: '',
    }); // 변경할 profile state
    let [imageChangeYN, setImageChangeYN] = useState(false) // 프로필사진 변경 여부
    let [resultURL, setResultURL] = useState('') // 업로드 결과 이미지 URL
    let [uploadYN, setUploadYN] = useState(false) // 사진 업로드 여부
    let [loading, setLoading] = useState(false) // 로딩 ( 업로드 중에 보여주도록 )
    const { displayName, profileImage, profileIntro } = newProfile; // 구조분해 할당 --> 값 추출

    // OnChange
    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출        
        if (e.target.type === 'text') {
            setNewProfile({
              ...newProfile, // 기존의 input 객체를 복사한 뒤
              [name]: value // name 키를 가진 값을 value 로 설정
            });
        }
        else {
            setPreviewImg(e)
        }
    };

    // 이미지 onChange
    const setPreviewImg = (e) => {
        console.log("변경할 파일 -->", e.target.files[0]);

        let reader = new FileReader();
        reader.onload = function(e) {
            // 미리보기에 보여줄 state 변경
            setShowImg(e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
        setSaveImg(e.target.files[0]);
    }


    //=========================================================
    // 폼이 제출되면 실행 [프로필 변경]
    // Feed : displayName, profileImage 변경
    // User : displayName, profileIntro, profileImage 변경
    //=========================================================
    const onSubmit = (e) => {
        e.preventDefault(); // submit시 페이지 reload 방지
        setLoading(true) // 로딩 표시

        console.log('사진 변경 여부 --> ',imageChangeYN)
        if (imageChangeYN) {
            /* ************************************
            *     프로필 사진 포함 O 변경
            *********************************** */
           // 이미지 업로드 경로 저장 & 가져오기
            const storageRef = ref(storage, 'images/'+profileImage.name );
            const uploadTask = uploadBytesResumable(storageRef, profileImage); // 서버에 업로드

            // 저장될때까지 시간이 걸리는 듯 함 --> setTimeout 드가자
            setTimeout(() => {
                getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadURL) => {
                    console.log('downloadURL --> ', downloadURL);
                    // 업로드된 경로로 state 변경 --> **useEffect[resultURL] 로 이어진당**
                    setResultURL(downloadURL)
                })
                .catch((err)=> {
                    alert("서버에 문제가 발생했어요😥 \n 다시 시도해주세요!")
                    // 모달 끄고
                    dispatch(setPfVisible(false))
                })
            }, 2000); // 1초는 부족하당..
        }
        else {
            /* ************************************
            *     프로필 사진 포함 X 변경
            *********************************** */
            if (MyFeedInfo.length !== 0) {
                MyFeedInfo.map((a,i)=>{
                    FeedEdit({ displayName }, a.id)
                })
            }
            UserEdit({ profileIntro, displayName }, UserInfo[0].id)
            .then(()=>{
                // 모달 끄고
                dispatch(setPfVisible(false))
            })
        }

    }
    //=========================================================



    // 프로필 변경시 URL 변경되면 ( 사진 O )
    useEffect(()=>{
        if (resultURL !== '' && resultURL !== undefined) {
            setNewProfile({
                ...newProfile,
                profileImage: resultURL
            })

            console.log("최종 URL --> ",resultURL)
            setUploadYN(true); // 사진 업로드 여부 추가
        }
    },[resultURL])

    // 업로드, state 변경 전처리 끝나면 --> **프로필 최종 변경**
    useEffect(()=>{
        if (uploadYN) {
            console.log("프로필 변경 ( 사진 O ) --> ",newProfile);
            // 게시물이 있다면
            if (MyFeedInfo.length !== 0) {
                MyFeedInfo.map((a,i)=>{
                    FeedEdit({ displayName, profileImage }, a.id)
                })
            }
            UserEdit({ profileIntro, displayName, profileImage }, UserInfo[0].id)
            .then(()=>{
                // 모달 끄고
                dispatch(setPfVisible(false))
            })
        }
    },[uploadYN])

    // 초기 mount 시
    useEffect(()=>{
        setFade('transition-end')
        setShowImg('')
        setImageChangeYN(false)
        setUploadYN(false)
        setLoading(false)
    },[])
    
    // 컬렉션 데이터 받아오면 초기화
    useEffect(()=>{
        if (MyFeedInfo != null && UserInfo != null) {
            console.log("게시글 : ", MyFeedInfo)
            console.log("사용자 : ", UserInfo)
            
            // 받아올 경우에 셋팅
            setNewProfile({
                displayName : UserInfo[0].displayName,
                profileImage: UserInfo[0].profileImage,
                profileIntro: UserInfo[0].profileIntro,
            })
        }
    },[UserInfo, MyFeedInfo])

    // 프로필 이미지가 변경되면!
    useEffect(()=>{
        setNewProfile({
            ...newProfile, // 기존의 input 객체를 복사한 뒤
            profileImage : saveImg // profileImage에 이미지 추가 (file)
        });
        setImageChangeYN(true)
    },[saveImg])

    // 모달 on/off 시
    useEffect(()=>{
        setImageChangeYN(false)
        setUploadYN(false)
        setLoading(false)
    },[pfVisible])

    // Esc로 모달 끄기
    window.onkeydown = (e) => {
        if(e.key === 'Escape') {
            console.log('꾸')
        }
    }
    window.onkeyup = (e) => { 
        if(e.key === 'Escape') {
            console.log('욱')
            dispatch(setPfVisible(false))
        }
    }

    return (
        <>
            {
                // 로딩중
                loading ? 
                <Loading/>
                : null
            }
            {/* 뒤에 요소들 덮어서 모달만 보이게 */}
            <div className={`dimmed-layer ${fade}`}/>

            <div className={`input-area transition-start ${fade}`}>
                <div className="form-container">
                    <form onSubmit={onSubmit}>
                        <div className="form-group profile-input">
                            <Label/>
                            <input accept="image/jpeg,image/png,image/heic,image/heif,video/mp4,video/quicktime" className="img-input profile-text-input" multiple="" type="file" onChange={onChange}/>
                        </div>
                        {/* 이미지 미리보기 */}
                        { showImg.length > 0 && <img src={showImg ?? showImg} alt="" style={{marginBottom : '13px',width : '80%', maxHeight:'200px'}}/>}
                        
                        <div className="form-group profile-input">
                            <Label/>
                            <input type="text" name="displayName" value={displayName} onChange={onChange} className="form-control profile-text-input" placeholder="닉네임을 입력해 주세요!" required/>
                        </div>

                        <div className="form-group profile-input">
                            <Label/>
                            <input type="text" name="profileIntro" value={profileIntro} onChange={onChange} className="form-control profile-text-input" placeholder="소개글을 입력해 주세요!" required/>
                        </div>
                        <input type="submit" className="post-btn" value="저장하기"/>
                        <div className="close-btn">
                            <CloseBtn onClick={(e)=>{
                                e.preventDefault()
                                dispatch(setPfVisible(false))
                            }}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProfileInput;


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