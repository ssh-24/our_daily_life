// 헤더
import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header>
                <h1 className="title">{this.props.title}</h1>
                <p className="sub-title">{this.props.sub}</p>
            </header>
        );
    }
}

export default Header;

