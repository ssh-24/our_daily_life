/*eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import { useFirestore } from "../hooks/useFirestore";
import { useDispatch } from "react-redux";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { setRmVisible } from "../store/replySlice";
import { setLmVisible } from "../store/likeSlice";

function Post(props) {
  const { editDocument, response } = useFirestore("FeedData");// 컬렉션 이름 파라미터로 넣어주기
  const { isAuthReady, user } = useAuthContext();
  let navigate = useNavigate() // 페이지 이동
  let dispatch = useDispatch()
  let [fade, setFade] = useState('') // Animation Style State
  let [isAll, setIsAll] = useState(false) // 댓글 모두보기 여부
  const THIS_YEAR = new Date().getFullYear(); // 현재 년도

  useEffect(()=>{
    // Automatic batching 때문에 타이머 준다
    let timer = setTimeout(() => {setFade('transition-end')}, 100)
    // cleanUp Func
    return () => {
      clearTimeout(timer)
      setFade('')
      setIsAll(false)
    }
  },[])

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

  // 게시물 상세 화면으로 이동
  const goDetail = (props) => {
    navigate('/detail/'+props.id) // 게시물 id를 URL 파라미터로 넘긴다 (키값)
  }

  // 보내기 버튼 - 카카오 공유, **원래 개발자 모드 모바일에서는 동작하지 않음**
  const kakaoShare = (post) => {
    // console.log("공유할 게시물 --> ",post);
    if(confirm("카카오톡으로 공유하시겠어요?")){
      // 카카오톡 공유 로직 실행
      Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: post.displayName,
          description: post.postText+'\n'+post.createdDate,
          imageUrl:
            post.downloadURL,
          link: {
            mobileWebUrl: window.location.href+`detail/${post.id}`,
            webUrl: window.location.href+`detail/${post.id}`,
          },
        },
        social: {
          likeCount: post.likes,
          commentCount: post.replies,
          sharedCount: post.shares,
        },
        buttons: [
          {
            title: '보러가기',
            link: {
              mobileWebUrl: window.location.href+`detail/${post.id}`,
              webUrl: window.location.href+`detail/${post.id}`,
            },
          }
        ],
      });

      // 보내기 +1
      let shares = post.shares + 1
      editDocument({ shares }, post.id)
    }
  }

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


  return (
    <article className={`Post transition-start ${fade}`}>
      <div className="Post-area">

        {/* 프로필 영역 */}
        <div className="Post-user-area">
          <div className="Post-writer-info" onClick={()=>{goProfile(props.post.UID)}}>
            <div className="Post-user-profileImage">
              <img src={props.post.profileImage} alt="프로필사진"/>
            </div>
            <span className="Post-user-id">{props.post.displayName}</span>
          </div>
        </div>

        {/* 이미지 영역 - 클릭 - Detail로 이동 */}
        <div className="Post-img">
          <div className="Post-img-bg">
            {
              // 동영상 / 사진 분기처리
              props.post.downloadURL.includes('mov') || props.post.downloadURL.includes('mp4') || props.post.downloadURL.includes('m4v') ?
                // +`#t=0.001` 추가해서 첫 프레임으로 미리보기를 구현할 수 있음
                <video src={props.post.downloadURL+`#t=0.001`} controls onClick={(e)=>{goDetail(props.post)}}/>
              :
                <img src={props.post.downloadURL} alt="게시물사진" id={props.post.id} onClick={(e)=>{goDetail(props.post)}}/>
            }
          </div>
        </div>

        {/* 버튼 영역 */}
        <div className="Post-icon-btn-area">
          <div className="three-btn-area">
            <button className="like-btn" onClick={(e) => {
              // 좋아요 갯수
              let likes = props.post.likes
              // 좋아요 여부
              let isLiked = props.post.peopleWhoLike.includes(user.uid)
              // 좋아요 누른 사람들
              let peopleWhoLike = [...props.post.peopleWhoLike]
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
              // console.log('좋아하는 사람들', peopleWhoLike)

              //=========================================================
              // 수정 firebase 태우기, 변경하는 필드를 객체 형식으로 넣어준다
              //=========================================================
              if (isLiked) {
                likes--;
                editDocument({ peopleWhoLike, likes }, props.post.id)
              } else {
                likes++;
                editDocument({ peopleWhoLike, likes }, props.post.id)
              }
            }}>
              {/* 받아온 props를 확인해서 좋아요 버튼 반환*/}
              {getLikeStatus(props.post.peopleWhoLike.includes(user.uid))}
            </button>
            
            {/* 댓글 작성 버튼 - Detail로 이동 */}
            <button className="reply-btn" onClick={()=>{
              goDetail(props.post);
              setTimeout(() => {
                dispatch(setRmVisible(true)) // 바로 댓글 입력 열리게 state 변경, 로딩되고 바뀌게 약간 딜레이
              }, 500);
            }}>
              <svg aria-label="댓글쓰기" color="#262626" fill="#262626"
              height="24" role="img" viewBox="0 0 24 24" width="24">
                <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none"
                 stroke="currentColor" strokeLinejoin="round" strokeWidth="2">
                </path>
              </svg>
            </button>

            {/* 공유 버튼 - 카카오 공유하기 */}
            <button className="share-btn" onClick={() => {
              kakaoShare(props.post);
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
            <button className="save-btn" onClick={(e)=>{
              // 저장 여부
              let isSaved = props.post.peopleWhoSave.includes(user.uid)
              // 저장한 사람들
              let peopleWhoSave = [...props.post.peopleWhoSave]
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
              // console.log('저장한 사람들', peopleWhoSave)

              //=========================================================
              // 수정 firebase 태우기, 변경하는 필드를 객체 형식으로 넣어준다
              //=========================================================
              if (isSaved) {
                editDocument({ peopleWhoSave }, props.post.id)
              } else {
                editDocument({ peopleWhoSave }, props.post.id)
              }
            }}>
              {/* 받아온 props를 확인해서 저장 버튼 반환*/}
              {getSaveStatus(props.post.peopleWhoSave.includes(user.uid))}
            </button>
          </div>
        </div>

        {/* 좋아요 Count */}
        <div className="Post-like-area">
          <p className="Post-like-count" onClick={()=>{
            goDetail(props.post);
            setTimeout(() => {
              dispatch(setLmVisible(true)) // 좋아요 상세 모달 표시, 로딩되고 바뀌게 약간 딜레이
            }, 500);
          }}>
            <b>{props.post.likes}</b>
          </p>
        </div>

        {/* 게시글 영역 */}
        <div className="Post-text-area">
          <div className="Post-text">
            <div className="Post-writer-name" onClick={()=>{goProfile(props.post.UID)}}>
              <b>{props.post.displayName}</b>
            </div>
            <div className="Post-text-postText">
              {props.post.postText}
            </div>
          </div>
        </div>

        {/* 댓글 카운트에 따라 분기처리 */}
        {
          // 댓글이 있으면
          props.post.replies > 0 ?

          <>
            {/* 게시글/댓글 구분선 */}
            {
              // 모두보기 안눌렀고, 댓글 2개보다 많으면
              !isAll && props.post.replies > 2 ?
              <div className="Post-reply-count" onClick={()=>{
                  // console.log('댓글 전체보기!')
                  // 모두보기 on
                  setIsAll(true)
                }}>{props.post.replies}
              </div>
              : // 이외에는 구분선
              <div className="Post-reply-border"></div>
            }

            {/* 댓글 표시 */}
            <div className="Post-reply-area">
              {
                isAll && props.post.replies > 0 ?
                  props.post.peopleWhoReply.map((a,i)=>{
                    return (
                      <>
                        <div className="Post-reply" key={i}>
                          <span className="Post-reply-nickname" onClick={()=>{goProfile(a.UID)}}>
                            <b>{a.displayName}</b>
                          </span>
                          <span className="Post-reply-text">
                            {a.replyText}
                          </span>
                        </div>
                      </>
                    )
                  })
                : 
                  props.post.replies >= 2 ?
                    <>
                      {/* 댓글 1 - 2개 정도 표시 */}
                      <div className="Post-reply">
                        <span className="Post-reply-nickname" onClick={()=>{goProfile(props.post.peopleWhoReply[0].UID)}}>
                          <b>{props.post.peopleWhoReply[0].displayName}</b>
                        </span>
                        <span className="Post-reply-text">
                          {props.post.peopleWhoReply[0].replyText}
                        </span>
                      </div>
                      <div className="Post-reply">
                        <span className="Post-reply-nickname" onClick={()=>{goProfile(props.post.peopleWhoReply[1].UID)}}>
                          <b>{props.post.peopleWhoReply[1].displayName}</b>
                        </span>
                        <span className="Post-reply-text">
                          {props.post.peopleWhoReply[1].replyText}
                        </span>
                      </div>
                    </>
                  : 
                    <>
                      <div className="Post-reply">
                        <span className="Post-reply-nickname" onClick={()=>{goProfile(props.post.peopleWhoReply[0].UID)}}>
                          <b>{props.post.peopleWhoReply[0].displayName}</b>
                        </span>
                        <span className="Post-reply-text">
                          {props.post.peopleWhoReply[0].replyText}
                        </span>
                      </div>
                    </>
              }
            </div>
          </>
          : null
        }

        {/* 작성일자 */}
        <div className="post-date">
          { 
            // 작성년도가 올해와 같으면 년도는 표시하지 않기 
            THIS_YEAR === props.post.createdDate.substring(0,4)*1
            ? props.post.createdDate.substring(5,7) + "월 " + props.post.createdDate.substring(8,10) + "일 " + props.post.createdDate.substring(11)
            : props.post.createdDate.substring(0,4)+"년 " + props.post.createdDate.substring(5,7) + "월 " + props.post.createdDate.substring(8,10) + "일 " + props.post.createdDate.substring(11)
          }
        </div>

      </div>
    </article>
  );
}

export default Post;