import Login from "./Pages/LoginPage/Login";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import UserHomepage from "./Pages/UserHomePage/UserHomepage";
import AdminHomePage from "./Pages/AdminHomepage/AdminHomePage";
import CoachHomepage from "./Pages/CoachHomepage/CoachHomepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/userhome" element={<UserHomepage />} />
        <Route exact path="/adminhome" element={<AdminHomePage />} />
        <Route exact path="/coachhome" element={<CoachHomepage />} />
      </Routes>
    </Router>
  );
}

export default App;
