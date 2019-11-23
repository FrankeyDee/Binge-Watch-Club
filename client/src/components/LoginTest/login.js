// import React from "react";
// import './login.css'

import React, { 
  // eslint-disable-next-line
  Component, 
  Fragment } from "react";
import { Link } from "react-router-dom";
import API from "../Login-Reg-Utils/API";
import Title from "../UsernameForm/Title";
import Form from "../UsernameForm/Form";
import './login.css';
// import '.././UsernameForm/Form.css';
// import '.././UsernameForm/Title.css'



export class LoginTest extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: null
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
    handleInputChange (event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    
    handleSubmit (event) {
        event.preventDefault();
    
        API.login(this.state.username, this.state.password)
          .then(res => {
            if (res.status === 401) {
              this.setState({ error: "Whoops! That username or password invalid! Try Again, homie!" })
            } else if (res.ok) {
              this.props.history.push('/secure')
            }
          })
          .catch(err => console.error(err));
    }

    render() {
      return (
        <Fragment>
          <Title>Welcome Back!</Title>
          { this.state.error && 
          <div className="alert-container">
          <div className="alert alert-dismissible alert-danger">
            <button className="close" data-dismiss="alert"><a href="/login">&times;</a></button>
            <strong>{ this.state.error }</strong>
            </div>
            </div> }
          <Form inputHandler={this.handleInputChange} submitHandler={this.handleSubmit} />
          <div className="form-wrap">
          <Link to="/register" className="btn btn-info center-btn">First time? Register here</Link>
          </div>
        </Fragment>
      );
    }
}