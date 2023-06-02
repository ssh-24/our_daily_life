/*eslint-disable*/
import { createSlice } from '@reduxjs/toolkit'

let feeds = createSlice({
    name : '피드',
    // MockData
    initialState : [
        // 1
        {
            id : 1,
            UID: '',
            userEmail: '',
            createdDate: '',
            profileImage: "/assets/profile_Eric.jpg",
            displayName: "Eric",
            downloadURL: "/assets/post_cats.jpg",
            postText: "SO CUTE :)",
            likes: 5, // 좋아요 수
            replies: 2, // 댓글 수
            peopleWhoLike: [
                "Luffy",
                "Zoro",
                "ymWAqGTsGqZ6Y0n4lS97S3tWGCR2",
                "wD8fZ9o6UqaOPUPmeGUPWcHUKp22",
                "XAWscmQPhKfVCCruNeITO7dgDz02"
            ],
            peopleWhoReply: [
                {
                displayName: "Luffy",
                replyText: 'agree',
                },
                {
                displayName: "Buggy",
                replyText: '별로?',
                }
            ],
            peopleWhoSave: []
        },
        // 2
        {
            id : 2,
            UID: '',
            userEmail: '',
            createdDate: '',
            profileImage: "/assets/profile_muhammad.jpg",
            displayName: "muhammad",
            downloadURL: "/assets/post_camera.jpg",
            postText: "I Like Photo...☆",
            likes: 4, // 좋아요 수
            replies: 2, // 댓글 수
            peopleWhoLike: [
                "Luffy",
                "Zoro",
                "Sanji",
                "wD8fZ9o6UqaOPUPmeGUPWcHUKp22"
            ],
            peopleWhoReply: [
                {
                displayName: "Luffy",
                replyText: '갬-성',
                },
                {
                displayName: "Buggy",
                replyText: '별로?',
                }
            ],
            peopleWhoSave: []
        }
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