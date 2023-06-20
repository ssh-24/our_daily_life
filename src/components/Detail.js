/*eslint-disable */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestore } from "../hooks/useFirestore";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from '../hooks/useCollection';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReplyInput from "./ReplyInput";
import { setRmVisible } from "../store/replySlice";
import { setLmVisible } from "../store/likeSlice";
import LikeDetail from "./LikeDetail";

function Detail(props) {
  const { editDocument, deleteDocument, response } = useFirestore("FeedData");// 컬렉션 이름 파라미터로 넣어주기
  const { documents : AllFeed } = useCollection("FeedData"); // 전체 게시글 데이터
  const { documents : Users } = useCollection("UserData"); // 전체 유저 데이터 ( 좋아요 상세에 props로 전송 )
  const { isAuthReady, user } = useAuthContext();
  let [fade, setFade] = useState('') // Animation Style State
  let {uid} = useParams() // 게시물 id 키값 (URL 파라미터)
  let [post, setPost] = useState([]) // 데이터 바인딩할 상세 정보 State
  let [ready, setReady] = useState(false)
  let navigate = useNavigate() // 페이지 이동
  let dispatch = useDispatch()
  const rmVisible = useSelector((state) => state.replyState.rmVisible) // 댓글 모달 표시 여부 ( reply modal )
  const lmVisible = useSelector((state) => state.likeState.lmVisible) // 좋아요 상세 모달 여부
  const THIS_YEAR = new Date().getFullYear(); // 현재 년도
  const loginUserInfo = useSelector((state) => state.loginUserInfo) // 로그인 유저 정보, (Input.js 에서 초기 셋팅)

  // 뒤로가기 + 상단으로 스크롤 이동
  const goBack = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.back() // 뒤로가기
  }

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

  useEffect(()=>{
    // Automatic batching 때문에 타이머 준다
    let timer = setTimeout(() => {setFade('transition-end')}, 100)
    // document.body.style.overflow = 'hidden' // 스크롤 제거 ( 하려했는데 사진 크기 때문에 필요할 수도.. 일단 보류 )

    // cleanUp Func
    return () => {
      clearTimeout(timer)
      setFade('')
      setReady(false)
      // document.body.style.overflow = ''
    }
  },[])

  useEffect(()=>{
    // AllFeed 받아오면 a.id가 같은 것을 post 에 담아주기
    setPost(AllFeed?.filter((a,i)=> a.id === uid))
  }, [AllFeed])

  useEffect(()=>{
    // 데이터 받아오는 과정에서 undefined 되는 경우가 있어서 예외처리 해줬다..
    post != undefined && post.length !== 0 ? setReady(true) : setReady(false)
  }, [post])


  //============================================== 
  // 좋아요 눌린 상태에 따른 버튼 이미지 반환
  //============================================== 
  const getLikeStatus = (likeYN) => {
    if (likeYN) {
      return (
        <svg aria-label="좋아요 취소" color="#ed4956" fill="#ed4956"
              height="24" role="img" viewBox="0 0 48 48" width="24">
                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 
                 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 
                 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 
                 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 
                 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                </path>
        </svg>
      )
    }
    else {
      return (
        <svg aria-label="좋아요" color="#262626" fill="#262626"
              height="24" role="img" viewBox="0 0 24 24" width="24">
                <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197
                  7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141
                  14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675
                    1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04
                    6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61
                      2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018
                      2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774
                        2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z">
                </path>
        </svg>
      )
    }
  }

  //============================================== 
  // 저장 상태에 따른 버튼 이미지 반환
  //============================================== 
  const getSaveStatus = (saveYn) => {
    if (saveYn) {
      return (
        <svg aria-label="저장 취소" color="#262626" fill="#262626"
          height="24" role="img" viewBox="0 0 24 24" width="24">
          <polygon points="20 21 12 13.44 4 21 4 3 20 3 20 21"
            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          </polygon>
        </svg>
      )
    }
    else {
      return (
        <svg aria-label="저장" color="#262626" fill="#262626"
          height="24" role="img" viewBox="0 0 24 24" width="24">
          <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21"
            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          </polygon>
        </svg>
      )
    }
  }

  // 게시물 삭제
  const postDelete = () => {
    if (confirm("게시물을 삭제하시겠어요?")) {
      //=========================  
      // firebase 삭제
      //=========================  
      deleteDocument(post[0].id)
      alert('게시물이 삭제됐어요!')
      goBack() // 이전 페이지로 이동 ( 디테일 페이지에서 보여줄 게 없으니까.. )
    }
  }

  // 댓글 삭제
  const replyDelete = (reply) => {
    if (confirm("이 댓글을 삭제하시겠어요?")) {
      console.log("삭제할 댓글 --> ", reply);
    
      let peopleWhoReply = [...post[0].peopleWhoReply] // 기존 댓글 리스트
      
      // UID + replyText 의 값이 다른 것만 뽑아주기 ( 삭제할 댓글만 제외시키기 )
      peopleWhoReply = peopleWhoReply.filter((val)=>val.UID+val.replyText !== reply.UID+reply.replyText)
      let replies = peopleWhoReply.length; // 댓글 수 맞춰주기

      console.log("댓글 삭제 결과 --> ", peopleWhoReply, replies);
      //=========================  
      // firebase 수정
      //=========================  
      editDocument({ peopleWhoReply, replies }, post[0].id)
    }
  }

  return (
    ready ?
    <>
    <div className={`all-feeds transition-start ${fade}`}>
      <article className={`Post transition-start ${fade}`}>
        <div className="Post-area">

          {/* 프로필 영역 */}
          <div className="Post-user-area">
            <div className="Post-writer-info" onClick={()=>goProfile(post[0].UID)}>
              <div className="Post-user-profileImage">
                <img src={post[0].profileImage} alt="프로필사진"/>
              </div>
              <span className="Post-user-id">{post[0].displayName}</span>
            </div>
            {
              // 내 글 --> 삭제버튼 표시
              loginUserInfo.UID === post[0].UID ?
                <div className="Post-delete-btn">
                  <DeleteBtn onClick={postDelete}/>
                </div>
              :
                null
            }
          </div>

          {/* 이미지 영역 */}
          <div className="Post-img">
            <div className="Post-img-bg">
              <img src={post[0].downloadURL} alt="게시물사진"/>
            </div>
          </div>

          {/* 버튼 영역 */}
          <div className="Post-icon-btn-area">
            <div className="three-btn-area">
              <button className="like-btn" onClick={(e) => {
                // 좋아요 갯수
                let likes = post[0].likes
                // 좋아요 여부
                let isLiked = post[0].peopleWhoLike.includes(user.uid)
                // 좋아요 누른 사람들
                let peopleWhoLike = [...post[0].peopleWhoLike]
                if (peopleWhoLike.includes(user.uid)) {
                  peopleWhoLike = peopleWhoLike.filter(a => a != user.uid)
                } else {
                  peopleWhoLike.push(user.uid)
                }
                
                if (isLiked) {
                  console.log('좋아요 취소')
                } else {
                  console.log('좋아요')
                }
                console.log('좋아하는 사람들', peopleWhoLike)

                //=========================================================
                // 수정 firebase 태우기, 변경하는 필드를 객체 형식으로 넣어준다
                //=========================================================
                if (isLiked) {
                  likes--;
                  editDocument({ peopleWhoLike, likes }, post[0].id)
                } else {
                  likes++;
                  editDocument({ peopleWhoLike, likes }, post[0].id)
                }
              }}>
                {/* 받아온 props를 확인해서 좋아요 버튼 반환*/}
                {getLikeStatus(post[0].peopleWhoLike.includes(user.uid))}
              </button>
              
              <button className="reply-btn" onClick={(e) => {
                dispatch(setRmVisible(true))
              }}>
                <svg aria-label="댓글쓰기" color="#262626" fill="#262626"
                height="24" role="img" viewBox="0 0 24 24" width="24">
                  <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none"
                  stroke="currentColor" strokeLinejoin="round" strokeWidth="2">
                  </path>
                </svg>
              </button>

              <button className="share-btn" onClick={(e) => {
                alert('보내기 구현중.. ^.^')
              }}>
                <svg aria-label="보내기" color="#262626" fill="#262626"
                height="24" role="img" viewBox="0 0 24 24" width="24">
                  <line fill="none" stroke="currentColor" strokeLinejoin="round"
                    strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083">
                  </line>
                  <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="currentColor" strokeLinejoin="round" strokeWidth="2">
                  </polygon>
                </svg>
              </button>
            </div>

            {/* 떨어뜨린 곳에 저장 버튼 */}
            <div className="one-btn-area">
              <button className="save-btn" onClick={(e) => {
                // 저장 여부
                let isSaved = post[0].peopleWhoSave.includes(user.uid)
                // 저장한 사람들
                let peopleWhoSave = [...post[0].peopleWhoSave]
                if (peopleWhoSave.includes(user.uid)) {
                  peopleWhoSave = peopleWhoSave.filter(a => a != user.uid)
                } else {
                  peopleWhoSave.push(user.uid)
                }
                
                if (isSaved) {
                  alert('게시물을 보관함에서 삭제할게요!')
                } else {
                  alert('게시물을 보관함에 추가할게요!')
                }
                console.log('저장한 사람들', peopleWhoSave)

                //=========================================================
                // 수정 firebase 태우기, 변경하는 필드를 객체 형식으로 넣어준다
                //=========================================================
                if (isSaved) {
                  editDocument({ peopleWhoSave }, post[0].id)
                } else {
                  editDocument({ peopleWhoSave }, post[0].id)
                }
              }}>
                {/* 받아온 props를 확인해서 저장 버튼 반환*/}
                {getSaveStatus(post[0].peopleWhoSave.includes(user.uid))}
              </button>
            </div>
          </div>

          {/* 좋아요 Count */}
          <div className="Post-like-area">
            <p className="Post-like-count" onClick={()=>{
              dispatch(setLmVisible(true)) // 좋아요 상세 모달 표시
            }}>
              <b>{post[0].likes}</b>
            </p>
          </div>

          {/* 좋아요 상세 */}
          {
            lmVisible ?
            <LikeDetail users={Users} peopleWhoLike={post[0].peopleWhoLike}/>
            : null
          }

          {/* 게시글 영역 */}
          <div className="Post-text-area">
            <div className="Post-text">
              <div className="Post-writer-name" onClick={()=>{goProfile(post[0].UID)}}>
                <b>{post[0].displayName}</b>
              </div>
              <div className="Post-text-postText">
                {post[0].postText}
              </div>
            </div>
          </div>

          {/* 댓글 영역 */}
          {
            post[0].replies > 0 ?

            <>
              {/* 구분선 */}
              <div className="Post-reply-border"></div>
              {/* 댓글 표시 */}
              <div className="Post-reply-area">
                {
                  post[0].peopleWhoReply.map((a,i)=>{
                    return (
                      <>
                        <div className="Post-reply-with-btn">
                          <div className="Post-reply" key={a.UID+i}>
                            <span className="Post-reply-nickname" onClick={()=>{goProfile(a.UID)}}>
                              <b>{a.displayName}</b>
                            </span>
                            <span className="Post-reply-text">
                              {a.replyText}
                            </span>
                          </div>

                          {
                            // 내 글 --> 댓글 삭제버튼 표시
                            loginUserInfo.UID === post[0].UID ?
                              <div className="reply-delete-btn">
                                <DeleteReplyBtn onClick={()=>{replyDelete(a)}}/>
                              </div>
                            :
                              null
                          }
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </>

            : null
          }

          {/* 작성일자 */}
          <div className="post-date">
            { 
              // 작성년도가 올해와 같으면 년도는 표시하지 않기 
              THIS_YEAR === post[0].createdDate.substring(0,4)*1
              ? post[0].createdDate.substring(5,7) + "월 " + post[0].createdDate.substring(8,10) + "일 " + post[0].createdDate.substring(11)
              : post[0].createdDate.substring(0,4)+"년 " + post[0].createdDate.substring(5,7) + "월 " + post[0].createdDate.substring(8,10) + "일 " + post[0].createdDate.substring(11)
            }
          </div>
        </div>
      </article>

      <div className="detail-btn-area">
        <button className="go-main-btn" onClick={goBack}>
          돌아가기
        </button>
      </div>

    </div>
    {/* 댓글 등록 모달 */}
    {
      rmVisible ?
      <ReplyInput post={post[0]}/>
      : null
    }

    </>

    : null
  );
}

export default Detail;

const DeleteBtn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    strokeWidth={1.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="3 6 5 6 21 6" />
    <path id="post-delete-btn" d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
  </svg>
);

const DeleteReplyBtn = (props) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path
      id="reply-delete-btn"
      opacity={0.5}
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="M12 12 7 7m5 5 5 5m-5-5 5-5m-5 5-5 5"
    />
  </svg>
);