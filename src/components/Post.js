/*eslint-disable */
import React from "react";
import { useFirestore } from "../hooks/useFirestore";
import { useAuthContext } from "../hooks/useAuthContext";

function Post(props) {
  const { editDocument, response } = useFirestore("FeedData");// 컬랙션 이름 파라미터로 넣어주기
  const { isAuthReady, user } = useAuthContext();


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

  return (
    <article className="Post">
      <div className="Post-area">

        {/* 프로필 영역 */}
        <div className="Post-user-area">
          <div className="Post-user-profileImage">
            <img src={props.post.profileImage} alt="프로필사진"/>
          </div>
          <span className="Post-user-id">
            {
              props.post.displayName.length > 0 ?
              props.post.displayName
              : props.post.userEmail
            }
          </span>
        </div>

        {/* 이미지 영역 */}
        <div className="Post-img">
          <div className="Post-img-bg">
            <img src={props.post.downloadURL} alt="게시물사진"/>
          </div>
        </div>

        {/* 버튼 영역 */}
        <div className="Post-icon-btn-area">
          <div className="three-btn-area">
            <button className="like-btn" onClick={(e) => {
              // alert('좋아요')
              console.log('데이터뭐임', props)
              console.log('user뭐임', user)
              // let peopleWhoLike = [user.uid];
              let peopleWhoLike = [...props.post.peopleWhoLike]
              peopleWhoLike.push(user.uid)
              console.log('user뭐임', peopleWhoLike)

              // 좋아요 갯수
              let likes = props.post.likes

              // 좋아요 누른 게시물임?
              let isLiked = props.post.peopleWhoLike.includes(user.uid);
              console.log(isLiked);

              // 수정 firebase 태우기
              if (isLiked) {
                peopleWhoLike = [];
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
            
            <button className="reply-btn" onClick={(e) => {
               alert('댓글쓰기')
            }}>
              <svg aria-label="댓글쓰기" color="#262626" fill="#262626"
              height="24" role="img" viewBox="0 0 24 24" width="24">
                <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none"
                 stroke="currentColor" strokeLinejoin="round" strokeWidth="2">
                </path>
              </svg>
            </button>

            <button className="share-btn" onClick={(e) => {
               alert('보내기')
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
               alert('저장')
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
              <b>
                {
                  props.post.displayName.length > 0 ?
                    props.post.displayName
                  : props.post.userEmail
                }
              </b>
            </div>
            <div className="Post-text-postText">
              {props.post.postText}
            </div>
          </div>
        </div>

        {
          props.post.replies !== 0 ?
          <>
            {/* 댓글 카운트, 나중에 전체보기 버튼화 시켜야함 */}
            <div className="Post-reply-count">{props.post.replies}</div>

            {/* 댓글 2개 정도 보여주는 영역 */}
            <div className="Post-reply-area">
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
            </div>
          </>
          : null
        }
      </div>
    </article>
  );
}

export default Post;