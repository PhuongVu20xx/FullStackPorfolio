import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import Header from "./Layout/Header";
import Login from "./Layout/Action/Login";
import Footer from "./Layout/Footer";
import Profile from "./Layout/Profile";
import LandingPage from "./Layout/LandingPage";
import MainProfile from "./Layout/MainProfile";
function App() {
  return (
    <BrowserRouter>
      <MainProfile />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
