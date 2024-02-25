import React from "react";
import { useState, useEffect } from "react";

const Button = ({
  className,
  type,
  message,
  theme,
  handleTheme,
  screenMessage,
  setScreenMessage,
  onClick,
}) => {
  const [style, setStyle] = useState(
    handleTheme(
      {
        backgroundColor: "white",
        boxShadow: "#AAAAAA 0 2px",
        border: "1px solid #AAAAAA",
      },
      {
        color: "white",
        backgroundColor: "#404040",
        boxShadow: "#606060 0 2px",
        border: "1px solid #606060",
      }
    )
  );

  useEffect(() => {
    setStyle(
      handleTheme(
        {
          backgroundColor: "white",
          boxShadow: "#AAAAAA 0 2px",
          border: "1px solid #AAAAAA",
        },
        {
          color: "white",
          backgroundColor: "#404040",
          boxShadow: "#606060 0 2px",
          border: "1px solid #606060",
        }
      )
    );
  }, [theme]);

  return (
    <input
      className={className}
      type={type}
      value={message}
      style={style}
      onClick={onClick}
      onMouseEnter={() => {
        const tempStyle = { ...style };
        theme === "light"
          ? (tempStyle.boxShadow =
              "#AAAAAA 0 2px, rgba(0, 0, 0, 0.7) 0 0 2px 0 inset")
          : (tempStyle.boxShadow =
              "#606060 0 2px, rgba(0, 0, 0, 0.7) 0 0 2px 0 inset");
        setStyle(tempStyle);
      }}
      onMouseLeave={() => {
        const tempStyle = { ...style };
        theme === "light"
          ? (tempStyle.boxShadow = "#AAAAAA 0 2px")
          : (tempStyle.boxShadow = "#606060 0 2px");
        setStyle(tempStyle);
      }}
      onMouseDown={() => {
        const tempStyle = { ...style, top: "0px" };
        tempStyle.boxShadow = "rgba(0, 0, 0, 0.7) 0 0 2px 0 inset";
        setStyle(tempStyle);
      }}
      onMouseUp={() => {
        const tempStyle = { ...style, top: "-2px" };
        theme === "light"
          ? (tempStyle.boxShadow =
              "#AAAAAA 0 2px, rgba(0, 0, 0, 0.7) 0 0 2px 0 inset")
          : (tempStyle.boxShadow =
              "#606060 0 2px, rgba(0, 0, 0, 0.7) 0 0 2px 0 inset");
        setStyle(tempStyle);
      }}
    />
  );
};

export default Button;
