/*eslint-disable */
import { useEffect, lazy, Suspense, useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/styles.css"; // 최종 스타일로 지정
import { useAuthContext } from "./hooks/useAuthContext";
import { useCollection } from './hooks/useCollection';
import { useLogout } from "./hooks/useLogout";
import { useDispatch } from "react-redux";
import { setUserList } from "../src/store/searchSlice";
import Loading from './layout/Loading';
import Error404 from './layout/Error404';
const Start = lazy(()=> import('./components/Start'))
const Nav = lazy(()=> import('./layout/Nav'))
const Feeds = lazy(()=> import('./components/Feeds'))
const Input = lazy(()=> import('./components/Input'))
const Profile = lazy(()=> import('./components/Profile'))
const Log = lazy(()=> import('./components/Log'))
const Saved = lazy(()=> import('./components/Saved'))
const Detail = lazy(()=> import('./components/Detail'))


function App() {
  const { isAuthReady, user } = useAuthContext()
  const { documents, error } = useCollection("FeedData") // 전체 글 데이터
  const {logout} = useLogout()
  let dispatch = useDispatch()

  //===========================================================
  // 사용자 검색 추천 리스트 세팅
  //===========================================================
  useEffect(()=>{
    console.log('App Load DOC',documents)
    // 전체 글의 사용자 정보(UID , displayName)를 받아서 redux store에 넣기 (for 검색 자동완성)
    let users = [] // 전체 유저
    // 있을 때만 돌립시다?
    documents?.map((a,i)=>{
        users.push({UID : a.UID, Name : a.displayName})
    });
    let uniqUsers = [] // 중복 X 유저
    // 중복 제거
    uniqUsers = users.reduce((acc, cur)=>{
      if (acc.findIndex(({ UID }) => UID === cur.UID) === -1) {
        acc.push(cur)
      }
      return acc;
    }, []);
    console.log("유저 리스트", uniqUsers)
    dispatch(setUserList(uniqUsers))
  }, [documents])


  //===========================================================
  // 로그인, 회원가입 시 로그아웃 타이머 실행 --> 세션의 역할
  //===========================================================
  useEffect(()=>{
    user ? console.log("======로그인 O======") : console.log("======로그인 X======")
    let timer;
    // 로그인했다면!
    if (user) {
      timer = setTimeout(() => {
        alert("세션이 만료되었어요! 다시 로그인해 주세요!");
        logout(); // 로그아웃 시켜버리기
      }, 600000); // 10분 뒤 로그아웃
    }
    return () => {
      clearTimeout(timer);
    }
  },[user])

  return(
    <>
      {
        isAuthReady ?
        (
          <Suspense fallback={<Loading/>}> {/* Suspense로 감싸기 ( 로딩중 보여줄 때 ) */}
            <Routes>
              {/* 메인페이지 */}
              <Route path="/" 
                element={user ?
                   <>
                    <Input/>
                    <Nav status={'home'}/>
                    <Feeds/>
                   </>
                 : <Start/>
                }
              />

              {/* 로그페이지 */}
              <Route path="/log" 
                element={user ?
                  <>
                    <Input/>
                    <Nav status={'log'}/>
                    <Log/>
                  </>
                  :<Navigate replace={true} to="/" />
                }
              />

              {/* 보관함 페이지 */}
              <Route path="/saved" 
                element={user ?
                  <>
                    <Input/>
                    <Nav status={'saved'}/>
                    <Saved/>
                  </>
                  :<Navigate replace={true} to="/" />
                }
              />

              {/* 프로필페이지, uid (URL 파라미터) 분기처리 */}
              <Route path="/profile/:uid" 
                element={user ?
                  <>
                    <Input/>
                    <Nav status={'profile'}/>
                    <Profile/>
                  </>
                  :<Navigate replace={true} to="/" />
                }
              />

              {/* 상세페이지, uid (URL 파라미터) 분기처리 */}
              <Route path="/detail/:uid"
                element={user ?
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
        : <Loading/>
      }
    </>
  );

}

export default App;