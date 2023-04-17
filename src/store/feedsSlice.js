/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit'
import data from '../data_init'

let feeds = createSlice({
    name : '피드',
    initialState : [
        // 1
        {
            id : 1,
            UID: '',
            userEmail: '',
            createdDate: '',
            downloadURL: '',
            profileImage: "/assets/profile1.jpg",
            nickname: "seunghwan",
            postImage: "/assets/post1.jpg",
            postText: "애옹이 귀여워..!🐈",
            isLiked: true, // 좋아요 눌렀는지 여부
            likes: 5, // 좋아요 수
            replies: 2, // 댓글 수
            peopleWhoLike: [
                "Luffy",
                "Zoro",
                "Sanji",
                "Chopper",
                "Buggy"
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
            id : 2,
            UID: '',
            userEmail: '',
            createdDate: '',
            downloadURL: '',
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
                "Buggy"
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
            id : 3,
            UID: '',
            userEmail: '',
            createdDate: '',
            downloadURL: '',
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
                "Buggy"
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
            id : 4,
            UID: '',
            userEmail: '',
            createdDate: '',
            downloadURL: '',
            profileImage: "/assets/profile4.jpg",
            nickname: "muhammad",
            postImage: "/assets/post4.jpg",
            postText: "I Like Photo...☆",
            isLiked: false, // 좋아요 눌렀는지 여부
            likes: 3, // 좋아요 수
            replies: 2, // 댓글 수
            peopleWhoLike: [
                "Luffy",
                "Zoro",
                "Sanji"
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
            id : 5,
            UID: '',
            userEmail: '',
            createdDate: '',
            downloadURL: '',
            profileImage: "/assets/profile1.jpg",
            nickname: "seunghwan",
            postImage: "/assets/post5.jpg",
            postText: "멍뭉이 귀여워..!🐶",
            isLiked: true, // 좋아요 눌렀는지 여부
            likes: 4, // 좋아요 수
            replies: 2, // 댓글 수
            peopleWhoLike: [
                "Luffy",
                "Zoro",
                "Sanji",
                "Buggy"
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
    reducers : {
        // addStock(state, action) {
        //     let num = state.findIndex((a)=>{ return a.id === action.payload.id }) // index를 남겨줌
        //     state[num].count += action.payload.count
        // },
        // subStock(state, action) {
        //     let num = state.findIndex((a)=>{ return a.id === action.payload.id }) // index를 남겨줌
        //     state[num].count -= action.payload.count
        // },
    }
})

// export let { addStock, subStock } = feeds.actions
export default feeds