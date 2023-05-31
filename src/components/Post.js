/*eslint-disable */
import React, { useState, useEffect } from "react";
import { useFirestore } from "../hooks/useFirestore";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

function Post(props) {
  const { editDocument, response } = useFirestore("FeedData");// 컬렉션 이름 파라미터로 넣어주기
  const { isAuthReady, user } = useAuthContext();
  let navigate = useNavigate() // 페이지 이동
  let [fade, setFade] = useState('') // Animation Style State
  let [isAll, setIsAll] = useState(false) // 댓글 모두보기 여부

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

  // 게시물 상세 화면으로 이동
  const goDetail = (props) => {
    navigate('/detail/'+props.id) // 게시물 id를 URL 파라미터로 넘긴다 (키값)
  }

  // 좋아요 눌린 상태에 따른 버튼 이미지 반환
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
  // 이미지 저장 메서드
  //============================================== 
  function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
      type: mime
    });
  }
  
  function downloadImg(imgSrc) {
    var image = new Image();
    image.crossOrigin = "anonymous";
    image.src = imgSrc;
    var fileName = image.src.split("/").pop();
    image.onload = function() {
      var canvas = document.createElement('canvas');
      canvas.width = this.width;
      canvas.height = this.height;
      canvas.getContext('2d').drawImage(this, 0, 0);
      if (typeof window.navigator.msSaveBlob !== 'undefined') {
        window.navigator.msSaveBlob(dataURLtoBlob(canvas.toDataURL()), fileName);
      } else {
        var link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = fileName;
        link.click();
      }
    };
  }
  //============================================== 


  // 이미지 다운로드 ( id로 새창 열기.. )
  const imageDownload = (id) => {
    const image = document.getElementById(id);
    const imageURL = image.src

    const a = document.createElement('a')
    a.href = imageURL
    a.download = `${id}.png`; // 다운로드될 파일명 (확장자 포함)
    // a.target = '_blank'; // 새 탭 또는 창에서 이미지 열기
    a.click(); // 링크 클릭하여 이미지 저장
  }


  return (
    <article className={`Post transition-start ${fade}`}>
      <div className="Post-area">

        {/* 프로필 영역 */}
        <div className="Post-user-area">
          <div className="Post-user-profileImage">
            <img src={props.post.profileImage} alt="프로필사진"/>
          </div>
          <span className="Post-user-id">{props.post.displayName}</span>
        </div>

        {/* 이미지 영역 - 클릭 - Detail로 이동 */}
        <div className="Post-img" onClick={()=>{goDetail(props.post)}}>
          <div className="Post-img-bg">
            <img src={props.post.downloadURL} alt="게시물사진" id={props.post.id}/>
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
              console.log('좋아하는 사람들', peopleWhoLike)

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
            <button className="reply-btn" onClick={()=>{goDetail(props.post)}}>
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
            <button className="save-btn" onClick={()=>{
              console.log("이미지 다운로드!!")
              // imageDownload(props.post.id) // 저장 X, 새창만 열림
              downloadImg(props.post.downloadURL) // CORS 에러 발생...
            }}>
              <svg aria-label="저장" color="#262626" fill="#262626"
               height="24" role="img" viewBox="0 0 24 24" width="24">
                <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                 stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                </polygon>
              </svg>
            </button>
          </div>
        </div>

        {/* 좋아요 Count */}
        <div className="Post-like-area">
          <p className="Post-like-count">
            <b>{props.post.likes}</b>
          </p>
        </div>

        {/* 게시글 영역 */}
        <div className="Post-text-area">
          <div className="Post-text">
            <div className="Post-writer-name">
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
                  console.log('댓글 전체보기!')
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
                          <span className="Post-reply-nickname">
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
                        <span className="Post-reply-nickname">
                          <b>{props.post.peopleWhoReply[0].displayName}</b>
                        </span>
                        <span className="Post-reply-text">
                          {props.post.peopleWhoReply[0].replyText}
                        </span>
                      </div>
                      <div className="Post-reply">
                        <span className="Post-reply-nickname">
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
                        <span className="Post-reply-nickname">
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
      </div>
    </article>
  );
}

export default Post;