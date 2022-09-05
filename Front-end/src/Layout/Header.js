import React, { Component, useState } from "react";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import axios from "axios";
// localStorage.removeItem("account_info");
function Header() {
  const [loading, setLoading] = useState(false);

  let checkUser = false;
  let userName = "";
  let account = {};

  const isUserLogin = () => {
    if (localStorage.getItem("account_info") == null) return;
    else {
      account = JSON.parse(localStorage.getItem("account_info"));
      checkUser = true;
      userName = account.name;
    }
  };
  isUserLogin();

  const buttonLogOutClick = () => {
    setLoading(true);
    localStorage.removeItem("account_info");
    // window.location.href = "https://ryna69.herokuapp.com/";
    setLoading(false);
  };

  return (
    <div className="header-menu">
      <header className="menu">
        <Link to="/" replace className="menu-link">
          Home
        </Link>
        
        {checkUser ? (
          <>
            <Link to="/profile" replace className="menu-link">
              Profile
            </Link>
            <Link
              to="/login"
              replace
              className="menu-link"
              onClick={buttonLogOutClick}
            >
              Log Out
            </Link>
          </>
        ) : (
          <Link to="/login" replace className="menu-link">
            Login
          </Link>
        )}
      </header>
    </div>
  );
}
export default Header;
