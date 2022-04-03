import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
  Title,
} from "native-base";
import Header from "../layout/header";
import Lists from "./Lists";
import Icon from "@material-ui/core/Icon";

class Post extends Component {
  render() {
    const { data } = this.props;
    return (
      <article className="Post" ref="Post">
        <div className="Post_box">
          <div className="Post-user">
            <div className="Post-user-profilepicture">
              <img src="" />
            </div>
            <span className="Post-user-id">insta_id</span>
          </div>
          <div className="Post-img">
            <div className="Post-img-bg">
              <img src="" />
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
              <b>좋아요 개</b>
            </p>
          </div>
          <div className="Post-content">
            <p className="Post_text">
              <b>insta_id</b> 유럽여행 '^'
            </p>
          </div>

          <div class="reply_num">댓글 2개 모두 보기</div>
          <div class="Post_reply">
            <span class="Post_txt">
              <b>reply_id</b> 유럽~~
            </span>
          </div>
        </div>
      </article>
    );
  }
}

export default Post;
