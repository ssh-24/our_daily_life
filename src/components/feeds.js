import React from "react";
import Post from "./post";

function Feeds(props) {
    let lis = [];
    for (let i = 0; i < props.postList.length; i++) {
        lis.push(<Post key={i+1} userInfo={props.userInfo} post={props.postList[i]}/>)
    }

    return (
        <div className="all-feeds">
            {lis}
        </div>
    );
}

export default Feeds;