import React from "react";
import "./dashboard.css";
import Header from "../header/Header.jsx";
import Button from "./Button.jsx";

function Dashboard({ session, setSession, theme, setTheme, handleTheme }) {
  return (
    <div
      className="background"
      style={handleTheme(
        {
          backgroundColor: "#f0f0ff",
        },
        {
          backgroundColor: "#14141f",
          color: "black",
        }
      )}
    >
      <Header handleTheme={handleTheme} theme={theme} setTheme={setTheme} />
      <main className="dashboard-main">
        <div
          className="dashboard-box"
          style={handleTheme(
            {
              boxShadow: "#F0E6FF 0 0 35px 10px",
              backgroundColor: "white",
            },
            {
              boxShadow: "#1f152d 0 0 35px 10px",
              backgroundColor: "#202020",
              color: "white",
            }
          )}
        >
          <div className="dashboard-message-container">
            <p className="dashboard-message">You're logged in as</p>
            &nbsp;
            <p className="dashboard-message username">{session}</p>
          </div>
          <Button
            className="dashboard-logout-button"
            type="submit"
            message="Log Out"
            theme={theme}
            handleTheme={handleTheme}
            onClick={() => setSession("")}
          />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
