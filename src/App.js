/*eslint-disable */
import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuthContext } from "./hooks/useAuthContext";
import "./assets/css/styles.css"; // 최종 스타일로 지정
import Start from './components/Start';
import Feeds from './components/Feeds';
import Input from "./components/Input";


function App() {
  const {isAuthReady, user } = useAuthContext();

  return(
    <>
    {
      isAuthReady?
      (
        <Routes>
          {/*  */}
          <Route path="/" 
                  element={user
                          ?<Feeds/>
                          :<Start/>}
          ></Route>
          <Route path="/input" 
                  element={<Input/>}
          ></Route>
        </Routes>
      )
      : "loading..."
    }
      
    </>
  );

}

export default App;