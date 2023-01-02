/*eslint-disable */

import React, {useState} from "react";
import create from 'zustand';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import { useAuthContext } from "./hooks/useAuthContext";


import "./assets/css/styles.css";
import Start from "./components/Start";
import Nav from "./layout/Nav";
import Feeds from "./components/Feeds";
import Input from "./components/Input";


function App() {
  const {isAuthReady, user } = useAuthContext();

  return(
    <>
    {
      isAuthReady?
      (
        <BrowserRouter>
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
        </BrowserRouter>
      )
      : "loading..."
    }
      
    </>
  );

}

export default App;