import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    //prevent refreshing
    e.preventDefault();
    //firebase login stuff
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  
  return (
    <div className="login">
      <Link to="./">
        <img
          className="login_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
        ></img>
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login_signinButton">
            Sign In
          </button>
        </form>
        <p>
          By Signing in you agree to Amazon Clone's - Durgesh's Conditions of
          Use $ Sale, Please see our Privacy notice, Our Cookies Notice and our
          Interest-based Ads Notice.
        </p>
        <button onClick={(e) => history.push("/register")} className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
