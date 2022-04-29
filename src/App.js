import React from "react";
import create from 'zustand';
import "./assets/css/styles.css";
import Start from "./layout/start";
import Nav from "./components/nav";
import Feeds from "./components/feeds";

const url = 'http://ec2-3-37-21-161.ap-northeast-2.compute.amazonaws.com:8080/';

const useStore = create((set) => ({
  mode: "welcome",
  userInfo: {
    email: "", // 이메일(로그인시 id)
    password: "",
    name: "", // 성명
    nickname: "", // 닉네임
    profileImage: "", // 프로필사진
    statusMessage: "", // 상태메시지, 소개글
  },
  setMode(text) {
    set((state) => ({mode : text}))
  },
  setUserInfo(_email,_name,_nickname,_password) {
    set((state) => ({userInfo:{
        email: _email,
        name: _name,
        nickname: _nickname,
        password: _password,
      }
    }));
    set((state) => ({mode : 'read'}));
  },
  // Post Mock Data List
  postList: [
    // 1
    {
      profileImage: "/assets/profile1.jpg",
      nickname: "seunghwan",
      postImage: "/assets/post1.jpg",
      postText: "애옹이 귀여워..!🐈",
      isLiked: true, // 좋아요 눌렀는지 여부
      likes: 109, // 좋아요 수
      replies: 2, // 댓글 수
      peopleWhoLike: [
        "Luffy",
        "Zoro",
        "Sanji",
        "Chopper",
        "Buggy",
      ],
      peopleWhoReply: [
        {
          nickname: "Luffy",
          replyText: '나만 고양이 없어',
        },
        {
          nickname: "Buggy",
          replyText: '별로?',
        }
      ],
    },
    // 2
    {
      profileImage: "/assets/profile2.jpg",
      nickname: "hwan",
      postImage: "/assets/post2.jpg",
      postText: "춥다...⛄",
      isLiked: false, // 좋아요 눌렀는지 여부
      likes: 5, // 좋아요 수
      replies: 2, // 댓글 수
      peopleWhoLike: [
        "Luffy",
        "Zoro",
        "Sanji",
        "Chopper",
        "Buggy",
      ],
      peopleWhoReply: [
        {
          nickname: "Luffy",
          replyText: '추우면 집에 가라',
        },
        {
          nickname: "Buggy",
          replyText: '별로?',
        }
      ],
    },
    // 3
    {
      profileImage: "/assets/profile3.jpg",
      nickname: "Eric",
      postImage: "/assets/post3.jpg",
      postText: "SO CUTE :)",
      isLiked: false, // 좋아요 눌렀는지 여부
      likes: 5, // 좋아요 수
      replies: 2, // 댓글 수
      peopleWhoLike: [
        "Luffy",
        "Zoro",
        "Sanji",
        "Chopper",
        "Buggy",
      ],
      peopleWhoReply: [
        {
          nickname: "Luffy",
          replyText: 'agree',
        },
        {
          nickname: "Buggy",
          replyText: '별로?',
        }
      ],
    },
    // 4
    {
      profileImage: "/assets/profile4.jpg",
      nickname: "muhammad",
      postImage: "/assets/post4.jpg",
      postText: "I Like Photo...☆",
      isLiked: false, // 좋아요 눌렀는지 여부
      likes: 5, // 좋아요 수
      replies: 2, // 댓글 수
      peopleWhoLike: [
        "Luffy",
        "Zoro",
        "Sanji",
        "Chopper",
        "Buggy",
      ],
      peopleWhoReply: [
        {
          nickname: "Luffy",
          replyText: '갬-성',
        },
        {
          nickname: "Buggy",
          replyText: '별로?',
        }
      ],
    },
    // 5
    {
      profileImage: "/assets/profile1.jpg",
      nickname: "seunghwan",
      postImage: "/assets/post5.jpg",
      postText: "멍뭉이 귀여워..!🐶",
      isLiked: true, // 좋아요 눌렀는지 여부
      likes: 82, // 좋아요 수
      replies: 2, // 댓글 수
      peopleWhoLike: [
        "Luffy",
        "Zoro",
        "Sanji",
        "Chopper",
        "Buggy",
      ],
      peopleWhoReply: [
        {
          nickname: "Luffy",
          replyText: '인절미 귀여워',
        },
        {
          nickname: "Buggy",
          replyText: '별로?',
        }
      ],
    },
  ],
  // async ajaxRequest() {
  //   const response = await fetch(URL);
  //   console.log(await response.json());
  // },
}))

function App() {
  // zustand state 보관함
  const {mode, userInfo, setMode, setUserInfo, postList} = useStore();

  if (mode === 'welcome') {
    return (
      <div className="App">
          <Start signUp={setUserInfo} justStart={(e)=>{
            if (e.target.className === 'start-btn') {
              setMode('read');
            }
          }}/>
      </div>
    );
  }
  else if (mode === 'read') {
    return (
      <div className="App">
          <Nav userInfo={userInfo}/>
          <Feeds userInfo={userInfo} postList={postList}/>
      </div>
    );
  }
  else if (mode==='search') {
    return (
      <div className="App">
        검색
      </div>
    );
  }
  else if (mode==='upload') {
    return (
      <div className="App">
        게시물 업로드
      </div>
    );
  }
  else if (mode==='log') {
    return (
      <div className="App">
        활동 기록
      </div>
    );
  }
  else if (mode==='myProfile') {
    return (
      <div className="App">
        내 프로필
      </div>
    );
  }
}

export default App;