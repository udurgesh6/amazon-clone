import React, { useState } from 'react';
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import PhoneInput from "react-phone-input-2";
function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const register = (e) => {
        e.preventDefault();
        //firebase register stuff
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((auth) => {
            //it successfully created a new user with email and password
            console.log(auth);
            if (auth) {
              history.push("/");
            }
          })
          .catch((error) => alert(error.message));
      };
    return (
        <div className="register">
            <Link to="./">
                <img className="register_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
                ></img>
            </Link>
            <div className="register_container">
                <h1>Create Account</h1>
                <form>
                    <h5>Your name</h5>
                    <input type="text">
                    </input>
                    <h5>Mobile Number</h5>
                    <div className="register_mobile">
                    <p className="register_mobilepart1">IN +91</p> <input className="register_mobilepart2" type="tel" placeholder="Mobile number"></input>
                    </div>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        placeholder="At least 6 characters"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="info">
                    AMAZON CLONE will send you a text to verify your phone.
Message and Data rates may apply - Durgesh Upadhyay.
                    </p>
                    <button type="submit" onClick={register} className="register_button">
                        Register
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Register
