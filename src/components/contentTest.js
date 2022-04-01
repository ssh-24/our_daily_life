import React from "react";

function ContentTest(props) {
    let lis = [];
    for (let i = 0; i < props.data.length; i++) {
        lis.push(<li key={i+1} className="lis-item">{props.data[i]}</li>);
    }
    lis.push(<li key={5} className='lis-item'>{JSON.stringify(props.userInfo)}</li>);
    return (
        <div className="content-area">
            <div className="user-data-area">
                <ul>
                    {lis}
                </ul>
            </div>
        </div>
    );
}

export default ContentTest;