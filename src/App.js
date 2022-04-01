import React from "react";
import create from 'zustand';
import "./assets/css/styles.css";
import Start from "./layout/start";
import Nav from "./components/nav";
import ContentTest from "./components/contentTest";

const URL = '';

const useStore = create((set) => ({
  mode: "welcome",
  userInfo: {
    email: "",
    name: "",
    nickname: "",
    password: "",
  },
  setMode(text) {
    set((state) => ({mode : text}))
  },
  setUserInfo(_email,_name,_nickname,_password) {
    set((state) => ({userInfo:{
        email: _email,
        name: _name,
        nickname: _nickname,
        password: _password,
      }
    }));
    set((state) => ({mode : 'read'}));
  },
  tempData: [
    "하나","둘","셋","넷"
  ],
  // async ajaxRequest() {
  //   const response = await fetch(URL);
  //   console.log(await response.json());
  // },
}))

function App() {
  // zustand state 보관함
  const {mode, userInfo, setMode, setUserInfo, tempData} = useStore();

  if (mode === 'welcome') {
    return (
      <div className="App">
          <Start signUp={setUserInfo} justStart={(e)=>{
            if (e.target.className === 'start-btn') {
              setMode('read');
            }
          }}></Start>
      </div>
    );
  }
  else if (mode === 'read') {
    return (
      <div className="App">
          <Nav userInfo={userInfo}></Nav>
          <ContentTest userInfo={userInfo} data={tempData}></ContentTest>
      </div>
    );
  }
  else if (mode==='search') {
    return (
      <div className="App">
        검색
      </div>
    );
  }
  else if (mode==='upload') {
    return (
      <div className="App">
        게시물 업로드
      </div>
    );
  }
  else if (mode==='log') {
    return (
      <div className="App">
        활동 기록
      </div>
    );
  }
  else if (mode==='myProfile') {
    return (
      <div className="App">
        내 프로필
      </div>
    );
  }
}

export default App;