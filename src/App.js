import React, { useEffect } from "react";

import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Register from "./Register";
const promise = loadStripe(
  "pk_test_51HZGkVILo0GchJRslYdQeuXWmnIZ7SbanreuWXx7EkdpejRFQ2e178SvQd3aVe9qi983Pi7b7iiGFYRswDJkytfT00rMzwS1q8"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    //BEM convention
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            {/* Login Page */}
            <Login />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/checkout">
            {/* HEADER */}
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            {/* HEADER */}
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            {/* HEADER */}
            <Header />
            {/* HOME */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
