/*eslint-disable */
import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/styles.css"; // 최종 스타일로 지정
import { useAuthContext } from "./hooks/useAuthContext";
import Loading from './layout/Loading';
const Start = lazy(()=> import('./components/Start'))
const Feeds = lazy(()=> import('./components/Feeds'))
const Input = lazy(()=> import('./components/Input'))


function App() {
  const {isAuthReady, user } = useAuthContext();

  return(
    <>
      {
        isAuthReady?
        (
          <Suspense fallback={<Loading/>}>
          {/* Suspense로 감싸기(로딩중 보여줄 때) */}
            <Routes>
              <Route path="/" 
                      element={user
                              ?<Feeds/>
                              :<Start/>}
              ></Route>
              <Route path="/input" 
                      element={<Input/>}
              ></Route>
            </Routes>
          </Suspense>
        )
        : null
      }
    </>
  );

}

export default App;