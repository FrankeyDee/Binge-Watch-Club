import React from "react";
// import "./Form.css";

const Form = ({ inputHandler, submitHandler }) => (
  <div className="form-wrap">
    <form className="form-group" onSubmit={submitHandler}>

      <input id="inputDefault" type="text" name="username" className="form-control" onChange={inputHandler} required />
        <span className="input-underline"></span>
        <label htmlFor="username" className="text-primary">Username</label>
 
      <br></br>
      <input id="inputDefault" type="password" name="password" className="form-control" onChange={inputHandler} required />
        <span className="input-underline"></span>
        <label htmlFor="password" className="text-primary">Password</label>
      <br></br>
      <div className="button-holder">
        <button type="button" className="btn btn-outline-primary center-btn">SUBMIT</button>
      </div>
    </form>
  </div>
);

export default Form;