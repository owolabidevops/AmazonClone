/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Chekout from "./Chekout";
import Login from "./Login ";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";

 const promise = loadStripe("pk_test_51HQYRhCVWmSReMepV6i0cu8j712mxuJUEIHus2qeZ9N7LXgU3bAKGdQm01c1J3U9y4eTMbzhOkj2eN9m9dMOcTwN00TBHZPSmm");

function App() {

  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads

    auth.onAuthStateChanged((authUser) => {
      console.log("The User is ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // return () => {
    //
    // }
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/orders">
        <Header />
         <Orders/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Chekout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>  
          </Route>
          {/* the last one is the default route start page*/}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

{
  /* We Need React-Router :point*/
}

{
  /* localhost.com/ */
}
{
  /* localhost.com/checkout */
}
{
  /* localhost.com/login */
}

export default App;
