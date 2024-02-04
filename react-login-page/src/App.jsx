import './App.css';

function App() {
  return (
    <div className="background">
      <header>
        <div className="header-visible">
          <div className="theme-icon"></div>
        </div>
        <div className="header-invisible"></div>
      </header>
      <main>
        <div className="login-screen">
          <div className="login-title">
            <p style={{
              fontSize: "3rem",
              fontWeight: "bold"
            }}>Sign in</p>
          </div>
          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label for="username-field">Username</label>
              <input type="text" id="username-field" placeholder="Username"></input>
            </div>
            <div>
              <label for="password-field">Password</label>
              <input type="password" id="password-field" placeholder="Password"></input>
            </div>
            <div>
              <input className="submit-button" type="submit" value="Continue"></input>
            </div>
          </form>
          <div className="login-redirect" style={{display: "inline", fontSize: "1rem"}}>
            <p style={{display: "inline"}}>Don't have an account? </p>
            <a
              style={{
                display: "inline",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
              href="#"
            >Sign up </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
