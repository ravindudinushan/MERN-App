import React from 'react';
import './App.css';
import {NavBar} from
        "./view/common/Navbar/NavBar";
import {MainContent} from "./view/common/MainContent/MainContent";
import {Footer} from "./view/common/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultContent/DefaultLayout";
import {Login} from "./view/pages/Login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/*"
                     Component={DefaultLayout}>
              </Route>
              <Route path="/login"
                    Component={Login}>
              </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
