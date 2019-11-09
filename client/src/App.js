import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import { LoginTest, Register } from "./components/LoginTest";
import Home from "./components/Home";
import LoginTestShow from "./components/LoginTestShow";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* <IndexRoute /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={LoginTest} />
          <Route exact path="/login" component={LoginTest} />
          <Route exact path="/register" component={Register} />

          {/* <Route exact path="/shows" component={My_Shows} /> */}

          <Route exact path="/loginshow" component={LoginTestShow} />

          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
