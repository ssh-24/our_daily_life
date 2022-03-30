import React from "react";
import create from 'zustand';
import "./assets/css/styles.css";
import Start from "./layout/start";
import Nav from "./components/nav";
import ContentTest from "./components/contentTest";

const URL = '';

const stateStore = create((set) => ({
  mode: "welcome",
  changeMode(text) {
    set((state) => ({mode : text}))
  },
  async ajaxRequest() {
    const response = await fetch(URL);
    console.log(await response.json());
  }
}))

function App() {
  const {mode, changeMode} = stateStore();
  if (mode === 'welcome') {
    return (
      <div className="App">
          <Start mode={mode} onChangeMode={(e)=> {
            if(e.target.className === 'start-btn') {
              alert("START!");
              changeMode('read');
            }
            else if (e.target.className === 'signup-btn'){
              // 검증하는 로직 추가? 필요

              
              alert("회원가입 완료");
              changeMode('read');
            }
          }}></Start>
      </div>
    );
  }
  else if (mode === 'read') {
    return (
      <div className="App">
          <Nav mode={mode}></Nav>
          <ContentTest mode={mode}></ContentTest>
      </div>
    );
  }
}

export default App;