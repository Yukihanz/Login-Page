import './App.css';

function App() {
  return (
    <div className="background">
      <div className="theme">
        <div className="theme-icon"></div>
      </div>
      <div className="login-screen">
        <div className="login-title">
          <p>Sign in</p>
        </div>
        <form className="login-form">
          <div>
            <label for="username-field">Username</label>
            <input type="text" id="username-field"></input>
          </div>
          <div>
            <label for="password-field">Password</label>
            <input type="password" id="password-field"></input>
          </div>
          <div>
            <input type="submit" value="Continue"></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
