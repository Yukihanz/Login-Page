import React from "react";
import "./screenMessage.css";
import Button from "./Button.jsx";

function ScreenMessage({
  screenMessage,
  setScreenMessage,
  theme,
  handleTheme,
}) {
  return (
    <div
      className="screen-message-background"
      hidden={!screenMessage.message.length}
    >
      <div
        className="screen-message-container"
        hidden={!screenMessage.message.length}
        style={handleTheme(
          {
            backgroundColor: "white",
            border:
              screenMessage.type === "error"
                ? "2px solid red"
                : "2px solid #00F000",
          },
          {
            backgroundColor: "#202020",
            color: "white",
            border:
              screenMessage.type === "error"
                ? "2px solid red"
                : "2px solid #0FA00F",
          }
        )}
      >
        <p className="screen-message-text">{screenMessage.message}</p>
        <Button
          className="screen-message-button"
          type="button"
          message="Ok"
          theme={theme}
          handleTheme={handleTheme}
          screenMessage={screenMessage}
          setScreenMessage={setScreenMessage}
          onClick={() => {
            setScreenMessage({
              type: "",
              message: "",
            });
          }}
        />
      </div>
    </div>
  );
}

export default ScreenMessage;
