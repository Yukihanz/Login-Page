import "./sign.css";
import "./mediaQuery.css";
import ScreenMessage from "./ScreenMessage.jsx";
import Button from "./Button.jsx";
import Header from "../header/Header.jsx";
import SignForm from "./SignForm.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

function App({ type, session, setSession, theme, setTheme, handleTheme }) {
  const [screenMessage, setScreenMessage] = useState({
    type: "",
    message: "",
  });

  const [fieldsInfo, setFieldsInfo] = useState({
    username: "",
    password: "",
  });
  const [fieldsError, setFieldsError] = useState({
    username: "",
    password: "",
  });

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
      <ScreenMessage
        screenMessage={screenMessage}
        setScreenMessage={setScreenMessage}
        theme={theme}
        handleTheme={handleTheme}
      />
      <main className="sign-main">
        <div
          className="login-box"
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
          <div className="login-title">
            <p>
              {type === "Sign In" && "Sign In"}
              {type === "Sign Up" && "Sign Up"}
            </p>
          </div>
          <SignForm
            className="login-form"
            type={type}
            setSession={setSession}
            fieldsInfo={fieldsInfo}
            setFieldsInfo={setFieldsInfo}
            fieldsError={fieldsError}
            setFieldsError={setFieldsError}
            screenMessage={screenMessage}
            setScreenMessage={setScreenMessage}
          >
            <div className="inputs-container username-container">
              <label className="labels" htmlFor="username-field">
                Username
              </label>
              <input
                required
                value={fieldsInfo.username}
                onChange={(e) => {
                  setFieldsInfo({
                    username: e.target.value,
                    password: fieldsInfo.password,
                  });
                }}
                className="inputs"
                name="username"
                type="text"
                id="username-field"
                placeholder="Username"
                style={handleTheme(
                  {
                    color: "black",
                  },
                  {
                    color: "white",
                  }
                )}
              />
              {fieldsError.username && (
                <label className="field-error">{fieldsError.username}</label>
              )}
            </div>
            <div className="inputs-container password-container">
              <label className="labels" htmlFor="password-field">
                Password
              </label>
              <input
                required
                value={fieldsInfo.password}
                onChange={(e) => {
                  setFieldsInfo({
                    username: fieldsInfo.username,
                    password: e.target.value,
                  });
                }}
                className="inputs"
                name="password"
                type="password"
                id="password-field"
                placeholder="Password"
                style={handleTheme(
                  {
                    color: "black",
                  },
                  {
                    color: "white",
                  }
                )}
              />
              {fieldsError.password && (
                <label className="field-error">{fieldsError.password}</label>
              )}
            </div>
            <Button
              className="sign-submit-button"
              type="submit"
              message="Continue"
              theme={theme}
              handleTheme={handleTheme}
            />
          </SignForm>
          <div className="signup-redirect">
            <p style={{ display: "inline" }}>
              {type === "Sign In" && "Don't have an account? "}
              {type === "Sign Up" && "Already have an account? "}
            </p>
            <a
              href="#"
              style={{
                display: "inline",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
              onClick={() => {
                setFieldsInfo({
                  username: "",
                  password: "",
                });
              }}
            >
              {type === "Sign In" && <Link to="/registration">Sign Up</Link>}
              {type === "Sign Up" && <Link to="/">Sign In</Link>}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
