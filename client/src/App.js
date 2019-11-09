import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import { Login, Register } from "./components/Login";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/shows" component={My_Shows} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
