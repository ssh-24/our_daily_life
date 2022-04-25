import React from "react";

function Post(props) {
  return (
    <article className="Post">
      <div className="Post-area">
        <div className="Post-user-area">
          <div className="Post-user-profileImage">
            <img src={props.post.profileImage} alt="프로필사진"/>
          </div>
          <span className="Post-user-id">{props.post.nickname}</span>
        </div>
        <div className="Post-img">
          <div className="Post-img-bg">
            <img src={props.post.postImage} alt="게시물사진"/>
          </div>
        </div>

        <div className="Post-icon-btn-area">
          <div className="three-btn-area">
            <button className="like-btn" onClick={(e) => {
               alert('좋아요')
            }}>
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
            </button>
            
            <button className="reply-btn" onClick={(e) => {
               alert('댓글쓰기')
            }}>
              <svg aria-label="댓글 달기" color="#262626" fill="#262626"
              height="24" role="img" viewBox="0 0 24 24" width="24">
                <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none"
                 stroke="currentColor" strokeLinejoin="round" strokeWidth="2">
                </path>
              </svg>
            </button>

            <button className="share-btn" onClick={(e) => {
               alert('보내기')
            }}>
              <svg aria-label="게시물 보내기" color="#262626" fill="#262626"
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

          <div className="one-btn-area">
            <button className="save-btn" onClick={(e) => {
               alert('저장')
            }}>
              <svg aria-label="게시물 저장" color="#262626" fill="#262626"
               height="24" role="img" viewBox="0 0 24 24" width="24">
                <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                 stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                </polygon>
              </svg>
            </button>
          </div>
        </div>

        <div className="Post-like-area">
          <p className="Post-like-count">
            <b>{props.post.likes}</b>
          </p>
        </div>

        <div className="Post-text-area">
          <div className="Post-text">
            <div className="Post-writer-name">
              <b>{props.post.nickname}</b>
            </div>
            <div className="Post-text-postText">
              {props.post.postText}
            </div>
          </div>
        </div>

        <div className="Post-reply-count">{props.post.replies}</div>

        <div className="Post-reply-area">
          <div className="Post-reply">
            <span className="Post-reply-nickname">
              <b>{props.post.peopleWhoReply[0].nickname}</b>
            </span>
            <span className="Post-reply-text">
              {props.post.peopleWhoReply[0].replyText}
            </span>
          </div>
          <div className="Post-reply">
            <span className="Post-reply-nickname">
              <b>{props.post.peopleWhoReply[1].nickname}</b>
            </span>
            <span className="Post-reply-text">
              {props.post.peopleWhoReply[1].replyText}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Post;