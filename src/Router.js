/*eslint-disable */

import React, {useState} from "react";
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import create from 'zustand';
import "./assets/css/styles.css";
import Start from "./layout/start";
import Nav from "./components/nav";
import Feeds from "./components/feeds";


function Router() {

    return(
      <>
        <BrowserRouter>
        
          <Routes>
            <Route path="/" >

            </Route>
          </Routes>
        </BrowserRouter>
      </>

    )
}

export default Router;