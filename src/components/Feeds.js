/*eslint-disable */
import React, { useEffect } from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { useCollection } from '../hooks/useCollection';

function Feeds() {
    const postList = useSelector((state) => state.feeds); // feeds 게시물 리스트
    console.log("로컬에 저장된 피드",postList);

    const {documents,error} = useCollection("FeedData");
    console.log("Firebase 저장된 피드",documents);

 
    return (
        <>
            <div className="all-feeds">
                {
                    documents ? 
                    documents.map((a,i) => {
                        let post = {...a}
                        // console.log(post)
                        return (<Post key={i+postList.length} post={post}/>) 
                    })
                    : null
                } 

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