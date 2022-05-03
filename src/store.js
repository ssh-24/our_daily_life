import {configureStore} from 'redux';

// reducer가 최초로 실행될 경우 State의 최초 정보를 셋팅
let initState = {
    mode: 'welcome',
    userInfo: {
        email: "", // 이메일(로그인시 id)
        password: "",
        name: "", // 성명
        nickname: "", // 닉네임
        profileImage: "", // 프로필사진
        statusMessage: "", // 상태메시지, 소개글
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
    ]
}

// reducer - store을 어떻게 변경시킬지에 관한 정책을 정하는 코드
// 실제로 일을 처리하는 대부분의 작업을 처리
// state가 없을 경우 initState를 실행함
function reducer(state = initState, action) {


   return state;
}

export default configureStore(reducer);
