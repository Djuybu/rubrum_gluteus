import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Signin from "./Signin";
import Profile from "./Profile";

function App() {
  return (
    <>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/signin" element={<Signin></Signin>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
          </Routes>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
