import { useState } from "react";
import Input from "./Input";
import { validateCredentials } from "../utils/validation";
import { usernameCriteria, passwordCriteria } from "../constants/validation";
import { useUsernameContext } from "../utils/userContext";
import { removeCookie, setCookie, USER_COOKIE } from "../utils/cookies";

function Login({ setLogged }) {
  const { activeUser, setActiveUser } = useUsernameContext();
  const [username, setUsername] = useState(activeUser.username);
  const [password, setPassword] = useState("");
  const [rememberUsername, setRememberUsername] = useState(
    activeUser.rememberUser
  );

  const usernameErrorMsg = validateCredentials(
    "Username",
    username,
    usernameCriteria
  );
  const passwordErrorMsg = validateCredentials(
    "Password",
    password,
    passwordCriteria
  );

  const onLogin = async () => {
    if (username && password) {
      try {
        const res = await fetch("http://localhost:3000/login", {
          method: "POST",
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });
        //TODO handle error better
        if (res.status === 404) {
          // ...
        }

        if (res.status === 200) {
          if (rememberUsername) {
            setCookie(USER_COOKIE, username);
          } else {
            removeCookie(USER_COOKIE);
          }

          setActiveUser({
            username: username,
            rememberUser: rememberUsername,
          });
          setLogged(true);
        }
      } catch (error) {
        //...
      }
    }
  };

  console.log(passwordErrorMsg || usernameErrorMsg || username || password);
  console.log({ passwordErrorMsg, usernameErrorMsg, username, password });
  return (
    <section className='login-container'>
      <h1 className='title'>SIGN IN TO YOUR ACCOUNT</h1>
      <Input
        value={username}
        onInputChange={setUsername}
        placeholder='Username'
        errorMsg={usernameErrorMsg}
      />
      <Input
        value={password}
        onInputChange={setPassword}
        placeholder='Password'
        type='password'
        errorMsg={passwordErrorMsg}
      />
      <div className='remember-me-checkbox'>
        <input
          type='checkbox'
          checked={rememberUsername}
          onChange={() => setRememberUsername((prevState) => !prevState)}
        />
        <span>Remember me</span>
      </div>
      <button
        className='button'
        onClick={onLogin}
        disabled={passwordErrorMsg || usernameErrorMsg}
      >
        Login Now
      </button>
    </section>
  );
}

export default Login;
