import React, { Component } from "react";
import Header from "../layout/header";
import Lists from "./Lists";
import Icon from "@material-ui/core/Icon";

class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    const insta_id = this.props.insta_id;
    const profilepicture = this.props.profilepicture;
    const postImg = this.props.postImg;
    const reply_id = this.props.reply_id;
    const reply_num = this.props.reply_num;
    const postLike_num = this.props.postLike_num;
    const post_txt = this.props.post_txt;
    const post_reply = this.props.post_reply;
    return (
      <article className="Post" ref="Post">
        <div className="Post_box">
          <div className="Post-user">
            <div className="Post-user-profilepicture">
              <img src={profilepicture} />
            </div>
            <span className="Post-user-id">{insta_id}</span>
          </div>
          <div className="Post-img">
            <div className="Post-img-bg">
              <img src={postImg} />
            </div>
          </div>

          <div className="Post_icon">
            <div>
              <Icon>favorite_border</Icon>
              <Icon>mode_comment</Icon>
              <Icon>send</Icon>
            </div>
            <div>
              <Icon>turned_in_not</Icon>
            </div>
          </div>
          <div className="Post_like">
            <p className="Post_text">
              <b>좋아요 {postLike_num}개</b>
            </p>
          </div>
          <div className="Post-content">
            <p className="Post_text">
              <b>{insta_id}</b> {post_txt}
            </p>
          </div>

          <div class="reply_num">댓글 {reply_num}개 모두 보기</div>
          <div class="Post_reply">
            <span class="Post_txt">
              <b>{reply_id}</b> {post_reply}
            </span>
          </div>
        </div>
      </article>
    );
  }
}

export default Post;
