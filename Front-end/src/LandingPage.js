import Header from "./Component/Header";
import Profile from "./Component/Profile";
import Content from "./Component/Content";
import { BrowserRouter as Router, Routes, Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      <Header />
      <Profile />
      <Content />
      <Header />
    </div>
  );
};

export default LandingPage;
