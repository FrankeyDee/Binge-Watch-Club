import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import { Login, Register,  } from "./components/Login";
import  LoginShow  from "./components/LoginShow";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/loginshow" component={LoginShow} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
