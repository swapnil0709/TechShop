import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/shop" exact component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
