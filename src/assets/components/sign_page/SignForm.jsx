import React from "react";
import { handleLogin, handleRegister } from "./handleRequest.js";

const SignForm = ({
  children,
  className,
  type,
  setSession,
  fieldsInfo,
  setFieldsInfo,
  fieldsError,
  setFieldsError,
  screenMessage,
  setScreenMessage,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameError =
      fieldsInfo.username.length === 0
        ? "Username field must not be empty"
        : "";
    const passwordError =
      fieldsInfo.password.length < 6
        ? "Password must contain at least 6 characters"
        : "";
    setFieldsError({
      username: usernameError,
      password: passwordError,
    });
    if (usernameError === "" && passwordError === "") {
      if (type === "Sign In") {
        try {
          const response = handleLogin(
            fieldsInfo.username,
            fieldsInfo.password
          );
          setSession(response);
        } catch (error) {
          switch (error.message[0]) {
            case "1":
              setScreenMessage(
                setScreenMessage({
                  type: "error",
                  message: error.message.slice(1),
                })
              );
              break;
            case "2":
              setFieldsError({
                password: fieldsError.password,
                username: error.message.slice(1),
              });
              break;
            case "3":
              setFieldsError({
                password: error.message.slice(1),
                username: fieldsError.username,
              });
              break;
          }
        }
      } else if (type === "Sign Up") {
        try {
          const response = handleRegister(
            fieldsInfo.username,
            fieldsInfo.password
          );
          setScreenMessage({
            type: "pass",
            message: response,
          });
          setFieldsInfo({
            username: "",
            password: "",
          });
        } catch (error) {
          switch (error.message[0]) {
            case "1":
              setScreenMessage(
                setScreenMessage({
                  type: "error",
                  message: error.message.slice(1),
                })
              );
              break;
            case "2":
              setFieldsError({
                password: fieldsError.password,
                username: error.message.slice(1),
              });
              break;
            case "3":
              setFieldsError({
                password: fieldsError.password,
                username: error.message.slice(1),
              });
              break;
          }
        }
      }
    }
  };

  return (
    <form className={className} onSubmit={(e) => handleSubmit(e)}>
      {children}
    </form>
  );
};

export default SignForm;
