import React, { Component } from "react";

class Lists extends Component {
    render() {
        let lists = [];
        let data = this.props.data;
        let i = 0;
        while (i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <span>유저: {data[i].title} / 설명: {data[i].desc}</span>
                </li>
            );
            i++;
        }
        return (
            <ul>
                {lists}
            </ul>
        );
    }
}

export default Lists;