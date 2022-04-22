import React from "react";

// 22-04-23 저장버튼 구현 + 스타일(class명 이런 거) 수정 필요

function Post(props) {
  return (
    <article className="Post">
      <div className="Post-box">
        <div className="Post-user">
          <div className="Post-user-profilepicture">
            <img src={props.post.profileImage} alt="프로필사진"/>
          </div>
          <span className="Post-user-id">{props.post.nickname}</span>
        </div>
        <div className="Post-img">
          <div className="Post-img-bg">
            <img src={props.post.postImage} alt="게시물사진"/>
          </div>
        </div>

        <div className="Post_icon">
          <div>
            <svg aria-label="좋아요" className="like-btn" color="#262626" fill="#262626"
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
            

            <svg aria-label="댓글 달기" className="reply-btn" color="#262626" fill="#262626"
             height="24" role="img" viewBox="0 0 24 24" width="24">
               <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                fill="none" stroke="currentColor" strokeLinejoin="round"
                strokeWidth="2">
               </path>
            </svg>


            <svg aria-label="게시물 공유" className="share-btn" color="#262626" fill="#262626"
             height="24" role="img" viewBox="0 0 24 24" width="24">
              <line fill="none" stroke="currentColor" strokeLinejoin="round"
                strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083">
              </line>
              <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
               stroke="currentColor" strokeLinejoin="round" strokeWidth="2">
              </polygon>
            </svg>
          </div>
          <div>
            {/* <Icon>turned_in_not</Icon> */}
          </div>
        </div>
        <div className="Post_like">
          <p className="Post_text">
            <b>좋아요 {props.post.likes}개</b>
          </p>
        </div>
        <div className="Post-content">
          <p className="Post_text">
            <b>{props.post.nickname}</b> {props.post.postText}
          </p>
        </div>

        <div className="reply_num">댓글 {props.post.replies}개 모두 보기</div>
        <div className="Post_reply">
          <span className="Post_txt">
            <b>{props.post.peopleWhoReply[0].nickname}</b>  {props.post.peopleWhoReply[0].replyText}
          </span>
          <span>
            <b>{props.post.peopleWhoReply[1].nickname}</b>  {props.post.peopleWhoReply[1].replyText}
          </span>
        </div>
      </div>
    </article>
  );
}

export default Post;