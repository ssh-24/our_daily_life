/*eslint-disable */
import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/styles.css"; // 최종 스타일로 지정
import { useAuthContext } from "./hooks/useAuthContext";
import Loading from './layout/Loading';
import Error404 from './layout/Error404';
import { useSelector } from 'react-redux';
const Start = lazy(()=> import('./components/Start'))
const Nav = lazy(()=> import('./layout/Nav'))
const Feeds = lazy(()=> import('./components/Feeds'))
const Input = lazy(()=> import('./components/Input'))
const Profile = lazy(()=> import('./components/Profile'))
const Log = lazy(()=> import('./components/Log'))


function App() {
  const {isAuthReady, user } = useAuthContext();
  const visible = useSelector((state) => state.inputState.visible); // input 모달 여부

  return(
    <>
      {
        isAuthReady?
        (
          <Suspense fallback={<Loading/>}> {/* Suspense로 감싸기(로딩중 보여줄 때) */}
            <Routes>
              {/* 메인페이지 */}
              <Route path="/" 
                element={
                  user ?
                   <>
                    { visible && <Input/> }
                    <Nav/>
                    <Feeds/>
                   </>
                 : <Start/>
                }
              />

              {/* 활동페이지 */}
              <Route path="/log" 
                element={
                  <>
                    { visible && <Input/> }
                    <Nav/>
                    <Log/>
                  </>
                }
              />

              {/* 프로필페이지 */}
              <Route path="/profile" 
                element={
                  <>
                    { visible && <Input/> }
                    <Nav/>
                    <Profile/>
                  </>
                }
              />

              {/* Routes안에 명시되지 않은 페이지 주소 예외처리 */}
              <Route path="*" element={<Error404/>}/>
            </Routes>
          </Suspense>
        )
        : null
      }
    </>
  );

}

export default App;