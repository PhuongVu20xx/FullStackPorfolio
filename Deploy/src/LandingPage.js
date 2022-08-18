import Header from "./Component/Header";
import Profile from "./Component/Profile";
import FullStack from "./Component/FullStack";
import Unity from "./Component/Unity";
import { BrowserRouter as Router, Routes, Route,Navigate  } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Profile />
      <Routes>
        <Route path="/" element={<FullStack />}></Route>
        <Route path="/fullstack" element={<FullStack />}></Route>
        <Route path="/unity" element={<Unity />}></Route>
      </Routes>
      <Header />
    </div>
  );
};

export default LandingPage;
