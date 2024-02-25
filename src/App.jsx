import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Sign from "./assets/components/sign_page/Sign.jsx";
import Dashboard from "./assets/components/dashboard/Dashboard.jsx";
import { useState } from "react";

const App = () => {
  const [session, setSession] = useState(""); // If has username equals logged in. If has nothing equals logged out

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );
  const handleTheme = (objLight, objDark) => {
    return theme === "light" ? objLight : objDark;
  };

  const required = {
    session,
    setSession,
    theme,
    setTheme,
    handleTheme,
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          session === "" ? (
            <Sign {...required} type="Sign In" />
          ) : (
            <Navigate to="/dashboard" />
          )
        }
      />
      <Route
        path="/registration"
        element={
          session === "" ? (
            <Sign {...required} type="Sign Up" />
          ) : (
            <Navigate to="/dashboard" />
          )
        }
      />
      <Route
        path="/dashboard"
        element={
          session !== "" ? <Dashboard {...required} /> : <Navigate to="/" />
        }
      />
    </Routes>
  );
};

export default App;
