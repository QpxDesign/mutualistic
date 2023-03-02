import React from "react";
import "./App.css";
import WelcomeScreen from "./pages/WelcomeScreen";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import UserInfo from "./pages/UserInfo";
import Content from "./pages/Content";
import FinshSignup from "./pages/FinshSignup";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/get-started" element={<UserInfo />} />
        <Route path="/content" element={<Content />} />
        <Route path="/finish" element={<FinshSignup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
