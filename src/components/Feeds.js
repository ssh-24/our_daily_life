/*eslint-disable */
import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

function Feeds() {
    const postList = useSelector((state) => state.feeds); // feeds 게시물 리스트
    console.log("Feeds : ",postList);

    return (
        <>
            <div className="all-feeds">
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