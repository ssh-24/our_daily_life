<<<<<<< HEAD
import React, { Component } from 'react';
import Header from './layout/header';
import Lists from './components/Lists';
import './assets/css/styles.css';
=======
import React, { Component } from "react";
import Header from "./layout/header";
import Lists from "./components/Lists";
import "./assets/css/styles.css";
>>>>>>> 77ebc21f24b954041e73f6897160a3bb2313bb68

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
      <div className="App">
        <Header title={_title} sub={_desc}></Header>
        <Lists data={this.state.list}></Lists>
      </div>
    );
  }
}

export default App;
