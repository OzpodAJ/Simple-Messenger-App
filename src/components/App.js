import React from "react";
import { Route, Switch } from "react-router-dom"
import Login from "./Login";

function App() {
  return (
    <div>
      <Switch>
        <Route path = "/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
