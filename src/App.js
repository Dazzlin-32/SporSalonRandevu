import Login from "./Pages/LoginPage/Login";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import UserHomepage from "./Pages/UserHomePage/UserHomepage";
import AdminHomePage from "./Pages/AdminHomepage/AdminHomePage";
import CoachHomepage from "./Pages/CoachHomepage/CoachHomepage";
import Profile from "./Pages/Profile/Profile";
import "./userapi";
import { events } from "./events";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login props={auth} />} />
        <Route
          exact
          path="/userhome"
          element={<UserHomepage props={events} />}
        />
        <Route exact path="/adminhome" element={<AdminHomePage />} />
        <Route exact path="/coachhome" element={<CoachHomepage />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
