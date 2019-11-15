// import React from "react";
// import './login.css'
import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import API from "../Login-Reg-Utils/API";
import Title from "../UsernameForm/Title";
import Form from "../UsernameForm/Form";
import './login.css';
import '.././UsernameForm/Form.css';
import '.././UsernameForm/Title.css'



export class LoginTest extends React.Component {

<<<<<<< Updated upstream

=======
    constructor (props) {
        super(props);
    
        this.state = {
          username: '',
          password: ''
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
          .then(res => this.props.history.push('/secure'))
          .catch(err => console.error(err));
      }
>>>>>>> Stashed changes
    render() {
        return (

            <Fragment>
        <Title>Login</Title>
        <Form inputHandler={this.handleInputChange} submitHandler={this.handleSubmit} />
        <Link to="/register" className="link-to-register">First time? Register here</Link>
      </Fragment>

        // <div className="flexbox base-container">
		// <div className="title-box">
		// 	<h1 className="title loginpage">Login</h1>
		// </div>
		// <form action="/login" method="post" className="form">
		// 	<div className="input-container logintest">
		// 		<input id="username" type="text" name="username" value={this.state.username} required />
				
		// 		<label for="username" className="input-label username">Username</label>
		// 	</div>
        //     <br></br>
		// 	<div className="input-container logintest">
		// 		<input id="password" type="password" name="password" value={this.state.password} required />
		// 		<label for="password" class="input-label password">Password</label>
		// 	</div>
        //     <br></br>
		// 	<button className="btn login-btn submit" onClick={this.handleSubmit}>SUBMIT</button>
		// </form>
		// <a href="/register" className="link-to-register un">First time? Register here</a>

        // </div>
            
        );
    }

}