import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ResumePage from "./pages/ResumePage";
import SignUpPage from "./pages/SignUpPage";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume-templates" element={<ResumePage />} />

        <Route path="/registration" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* UnknownRoutes */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
