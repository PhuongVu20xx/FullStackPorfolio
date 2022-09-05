import React, { Component, useState } from "react";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
import axios from "axios";

function Footer() {
  return (
    <div id="footer-menu">
      <div className="menu">
        <Link to="/" replace className="menu-link">
          Home
        </Link>

        {/* <Link to="/login" replace className="menu-link">
          Login
        </Link>
        <Link to="/profile" replace className="menu-link">
          Profile
        </Link>
        <Link to="/login" replace className="menu-link">
          Log Out
        </Link> */}
      </div>
    </div>
  );
}
export default Footer;
