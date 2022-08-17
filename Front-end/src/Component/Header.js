import React, { Component, useState } from "react";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
// import $ from "jquery";

const Header = () => {
  return (
    <div id="header-menu">
      <Link
        to="/"
        className="icon-text"
        replace
      >
        <span className="owner-name" data-text="VNHP">
          Full-Stack Developer
        </span>
      </Link>
      <Link
        to="/"
        className="icon-text"
        style={{ margin: "0px", padding: "0px" }}
        replace
      >
        <span className="owner-name" data-text="VNHP">
          Unity Developer
        </span>
      </Link>
    </div>
  );
};
export default Header;
