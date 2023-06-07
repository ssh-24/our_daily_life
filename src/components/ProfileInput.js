/*eslint-disable */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuthContext } from '../hooks/useAuthContext';
import { useCollectionDtl } from '../hooks/useCollectionDtl';
import { useFirestore } from "../hooks/useFirestore";
import { setPfVisible } from "../store/profileSlice";
import { Label } from "@material-ui/icons";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config"



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
    let [resultURL, setResultURL] = useState('') // URL 어케 가져오징??
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

    
    // 폼이 제출되면 실행 [프로필 변경]
    const onSubmit = (e) => {
        e.preventDefault(); // submit시 페이지 reload 방지
        let np = newProfile // 변경할 프로필 정보

        console.log("변경할 프로필 --> ",np)
        console.log("사진도 변경 ? --> ",imageChangeYN)
        console.log("각자는 ???? ", displayName, profileImage, profileIntro);

        //=========================================================
        // 수정 firebase 태우기, 변경하는 필드를 객체 형식으로 넣어준다
        //=========================================================
        // 프로필 사진이 변경되었으면 Firebase에 저장부터
        if (imageChangeYN) {
            // 이미지 업로드 경로 저장 & 가져오기
            const storageRef = ref(storage, 'images/'+profileImage.name );
            const uploadTask = uploadBytesResumable(storageRef, profileImage);
            getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
                console.log('업로드된 경로는', downloadURL);
                // 업로드된 경로로 state 변경
                setResultURL(downloadURL)
                // setNewProfile({
                //     ...newProfile,
                //     profileImage: downloadURL
                // }).then(()=>console.log(newProfile));
                // profileImage = downloadURL;
            })

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
        else {
            // Feed : 모든 글의 displayName, profileImage 를 변경해줘야 함
            // User : profileImage, profileIntro 를 변경해줘야 함

            // 게시물이 있다면
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


    useEffect(()=>{
        if (resultURL !== '' && resultURL !== undefined) {
            setNewProfile({
                ...newProfile,
                profileImage: resultURL
            })
        }
    },[resultURL])


    // 초기 mount 시
    useEffect(()=>{
        setFade('transition-end')
        setShowImg('')
        setImageChangeYN(false)
    },[])
    
    useEffect(()=>{
        if (MyFeedInfo != null && UserInfo != null) {
            console.log("게시글 : ", MyFeedInfo);
            console.log("사용자 : ", UserInfo);
            
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
            profileImage : saveImg // profileImage에 이미지 추가
        });
        setImageChangeYN(true);
    },[saveImg])

    // 모달 on/off 시
    useEffect(()=>{
        setImageChangeYN(false);
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