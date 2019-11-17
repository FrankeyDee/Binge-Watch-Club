import React from "react";
import "./index.css";
// import { LoginTest, Register } from "./components/LoginTest";
// // import Home from "./components/Home";
// import LoginTestShow from "./components/LoginTestShow";

function Nav() {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="/">Binge Watch Club</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">Log In</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/register">Register</a>
      </li>
    </ul>
{/* 
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search" />
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form> */}

    <div className="search">
      <select className="form-control mr-sm-2 dropdown" id="exampleSelect1">
        <option>Action</option>
        <option>Animated</option>
        <option>Comedy</option>
        <option>Romance</option>
        <option>Sci Fi</option>
      </select>
      <br></br>
      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </div>


  </div>
</nav>
  );
}

export default Nav;