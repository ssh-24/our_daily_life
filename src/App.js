import React, { Component } from "react";
import Header from "./layout/header";
import Lists from "./components/Lists";
import Post from "./components/Post";
import "./assets/css/styles.css";
import "./assets/scss/components/Post.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      header: { title: "Our Daily Life", sub: "우리의 일상" },
      welcome: { title: "Welcome", desc: "Let's start!" },
      list: [
        { id: 1, title: "SSH", desc: "Some description" },
        { id: 2, title: "DSH", desc: "Some description" },
        { id: 3, title: "LSS", desc: "Some description" },
        { id: 4, title: "HJH", desc: "Some description" },
        { id: 5, title: "YSL", desc: "Some description" },
        { id: 6, title: "LJM", desc: "Some description" },
        { id: 7, title: "ACS", desc: "Some description" },
        { id: 8, title: "SSJ", desc: "Some description" },
      ],
    };
  }
  render() {
    let _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.header.title;
      _desc = this.state.header.sub;
    }

    return (
      /*
      <div className="App">
        <Header title={_title} sub={_desc}></Header>
        <Lists data={this.state.list}></Lists>
      </div>
      */
      <div className="App">
        <Header />
        <div>
          <Post />
        </div>
      </div>
    );
  }
}

export default App;
