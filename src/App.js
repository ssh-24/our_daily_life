/*eslint-disable */
import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/styles.css"; // 최종 스타일로 지정
import { useAuthContext } from "./hooks/useAuthContext";
import Loading from './layout/Loading';
import Error404 from './layout/Error404';
const Start = lazy(()=> import('./components/Start'))
const Nav = lazy(()=> import('./layout/Nav'))
const Feeds = lazy(()=> import('./components/Feeds'))
const Input = lazy(()=> import('./components/Input'))
const Profile = lazy(()=> import('./components/Profile'))
const Log = lazy(()=> import('./components/Log'))
const Post = lazy(()=> import('./components/Post'))
const Detail = lazy(()=> import('./components/Detail'))


function App() {
  const {isAuthReady, user } = useAuthContext();

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
                    <Input/>
                    <Nav/>
                    <Feeds/>
                   </>
                 : <Start/>
                }
              />

              {/* 활동페이지 */}
              <Route path="/log" 
                element={user?
                  <>
                    <Input/>
                    <Nav/>
                    <Log/>
                  </>
                  :<Navigate replace={true} to="/" />
                }
              />

              {/* 프로필페이지 */}
              <Route path="/profile" 
                element={user?
                  <>
                    <Input/>
                    <Nav/>
                    <Profile/>
                  </>
                  :<Navigate replace={true} to="/" />
                }
              />

              {/* 상세페이지, uid (URL 파라미터) 로 분기처리 */}
              <Route path="/detail/:uid"
                element={user?
                  <>
                    <Input/>
                    <Nav/>
                    <Detail/>
                  </>
                  :<Navigate replace={true} to="/" />
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