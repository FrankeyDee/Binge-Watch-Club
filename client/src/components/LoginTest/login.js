import React from "react";
import './login.css'


export class LoginTest extends React.Component {


    render() {
        return (

        <div className="flexbox base-container">
		<div className="title-box">
			<h1 className="title loginpage">Login</h1>
		</div>
		<form action="/login" method="post" className="form">
			<div className="input-container logintest">
				<input id="username" type="text" name="username" value={this.state.username} required />
				
				<label for="username" className="input-label username">Username</label>
			</div>
            <br></br>
			<div className="input-container logintest">
				<input id="password" type="password" name="password" value={this.state.password} required />
				<label for="password" class="input-label password">Password</label>
			</div>
            <br></br>
			<button className="btn login-btn submit" onClick={this.handleSubmit}>SUBMIT</button>
		</form>
		<a href="/register" className="link-to-register un">First time? Register here</a>

        </div>
            
        );
    }

}