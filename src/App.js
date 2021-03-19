import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function DifferentHats() {
  return <div>hi</div>;
}

function App() {
  return (
    <div>
      {" "}
      <Switch>
        <Route path="/" exact>
          <HomePage />{" "}
        </Route>
        <Route path="/hat" exact>
          <DifferentHats />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
