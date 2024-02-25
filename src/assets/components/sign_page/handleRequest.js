import accounts from "./accounts";

const handleLogin = (username, password) => {
  if (username === "" || password.length < 6) {
    throw new Error(1 + "Client-side authentication bypassed");
  } else {
    const accountPassword = accounts[username];
    if (typeof accountPassword === "undefined") {
      throw new Error(2 + "Username not found");
    } else {
      if (password !== accountPassword) {
        throw new Error(3 + "Password doesn't match");
      } else {
        return username;
      }
    }
  }
};

const handleRegister = (username, password) => {
  if (username === "" || password.length < 6) {
    throw new Error(1 + "Client-side authentication bypassed");
  } else {
    const accountPassword = accounts[username];
    if (typeof accountPassword !== "undefined") {
      throw new Error(2 + "Username already exist");
    } else {
      accounts[username] = password;
      return "Account succesfully registered";
    }
  }
};

export { handleLogin, handleRegister };
