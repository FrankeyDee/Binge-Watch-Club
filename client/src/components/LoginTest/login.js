// import React from "react";
// import './login.css'
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import API from "../Login-Reg-Utils/API";
import Title from "../UsernameForm/Title";
import Form from "../UsernameForm/Form";
// import './login.css';
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
              this.setState({ error: "username or password invalid" })
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
          { this.state.error && <span style={{backgroundColor: "red"}}>{ this.state.error }</span>}
          <Form inputHandler={this.handleInputChange} submitHandler={this.handleSubmit} />
          {/* <Link to="/register" className="btn btn-outline-info center-btn">First time? Register here</Link> */}
        </Fragment>
      );
    }
}