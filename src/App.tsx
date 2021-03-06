import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./style.css";

import Register from "./view/Register/index";
import Login from "./view/Login/index";
import Dashboard from "./view/Dashboard/index";
import Events from "./view/Events/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/events" component={Events} />
          <Redirect from="*" to="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
