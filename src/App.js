import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import "./App.css";
import Header from "./components/Header/Header";
import SignInSignUp from "./pages/SignIn_SignUp/SignInSignUp";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        {/* <Route path="/shop/hats" exact component={ShopPage}></Route> */}
        <Route path="/shop" exact component={ShopPage}></Route>
        <Route path="/signin" exact component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
