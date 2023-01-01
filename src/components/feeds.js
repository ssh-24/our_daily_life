import React from "react";
import create from 'zustand';
import Nav from "../layout/nav";
import Input from "./Input";
import Post from "./Post";

const useStore = create((set) => ({
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


function Feeds(props) {

    // zustand state 보관함
    const {mode, userInfo, setMode, setUserInfo, postList} = useStore();

    let lis = [];
    for (let i = 0; i < postList.length; i++) {
        lis.push(<Post key={i+1} userInfo={userInfo} post={postList[i]}/>)
    }

    return (
        <>
        <Nav/>
        {/* <Input/> */}
        <div className="all-feeds">
            {lis}
        </div>
        </>
        
    );
}

export default Feeds;