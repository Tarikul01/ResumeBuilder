import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PreviewPage from "./pages/DashboardPages/PreviewPage";
import ResumeCreate from "./pages/DashboardPages/ResumeCreate";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ResumePage from "./pages/ResumePage";
import SignUpPage from "./pages/SignUpPage";
import Template0 from "./templates/Template0";
const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume-templates" element={<ResumePage />} />

        <Route path="/registration" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Template0" element={<Template0 />} />
        <Route path="/Dashboard" element={<ResumeCreate />} />
        <Route path="/Dashboard/Preview" element={<PreviewPage />} />

        {/* UnknownRoutes */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
