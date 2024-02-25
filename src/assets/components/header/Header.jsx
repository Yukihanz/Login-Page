import React from "react";
import "./header.css";

function Header({ handleTheme, theme, setTheme }) {
  return (
    <header>
      <div
        className="header-visible"
        style={handleTheme(
          {
            boxShadow: "#AAAAAA 0 0 8px",
            backgroundColor: "white",
          },
          {
            boxShadow: "#606060 0 0 8px",
            backgroundColor: "#202020",
            color: "black",
          }
        )}
      >
        <div
          className="theme-behind"
          onClick={() => {
            const tempTheme = theme === "light" ? "dark" : "light";
            localStorage.setItem("theme", tempTheme);
            theme === "light" ? setTheme("dark") : setTheme("light");
          }}
          style={handleTheme(
            {
              backgroundColor: "white",
              border: "1px solid black",
            },
            {
              backgroundColor: "#202020",
              border: "1px solid white",
            }
          )}
        >
          {theme === "light" ? (
            <svg
              className="theme-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
          ) : (
            <svg
              className="theme-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </div>
      </div>
      <div className="header-invisible"></div>
    </header>
  );
}

export default Header;
