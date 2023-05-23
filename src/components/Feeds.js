/*eslint-disable */
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useSelector, useDispatch } from "react-redux";
import { useCollection } from '../hooks/useCollection';
import { setUserList } from "../store/searchSlice";

function Feeds() {
    const postList = useSelector((state) => state.feeds); // 로컬 샘플 데이터
    const {documents,error} = useCollection("FeedData"); // 서버 리얼 데이터
    let [fade, setFade] = useState('') // Animation Style State
    let dispatch = useDispatch()

    useEffect(()=>{
        console.log('Mock Data',postList)
    }, [])

    useEffect(()=>{
        console.log('Server Data',documents)
        setFade(documents!= null && documents.length > 0? 'transition-end': '') // 애니메이션 효과

        // 전체 글의 사용자 정보(UID , displayName)를 받아서 redux store에 넣기
        let users = [] // 전체 유저
        // 있을 때만 돌립시다?
        documents?.map((a,i)=>{
            users.push({UID : a.UID, Name : a.displayName})
        });
        let uniqUsers = [] // 중복 X 유저
        // 중복 제거
        uniqUsers = users.reduce((acc, cur)=>{
            if (acc.findIndex(({ UID }) => UID === cur.UID) === -1) {
                acc.push(cur)
            }
            return acc;
        }, []);
        console.log("유저 목록쓰", uniqUsers)
        dispatch(setUserList(uniqUsers))
    }, [documents])

    return (
        <>
            <div className={`all-feeds transition-start ${fade}`}>
                {/* 리얼 데이터 출력 */}
                {
                    documents ? 
                    documents.map((a,i) => {
                        let post = {...a}
                        return (<Post key={i+postList.length} post={post}/>) 
                    })
                    : null
                }

                {/* 샘플 데이터 출력 */}
                {
                    postList.map((a,i) => {
                        return (<Post key={i+1} post={a} />)
                    })
                }
            </div>
        </>
    );
}

export default Feeds;