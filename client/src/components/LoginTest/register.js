import React from "react";
import './register.css'


export class Register extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="base-container">
                <div className="header">Register Testing Only </div>
                <div className="register un"> Register </div>
                
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username" className="un"> Username </label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="email" className="un"> Email </label>
                        <input type="text" name="email" placeholder="email" />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="password" className="un"> Password </label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
                <div className="footer footer-btn">
                    <button type="button" className="btn register-btn un" onClick={this.handleSubmit}>

                        Register Test Only
                    </button>
                </div>
                <a href="/login" className="link-to-register">Already have an account? Login here</a>
            </div>
        );
    }

    handleSubmit = () => {
        this.props.history.push("/loginshow");
         //console.log(this.props)
    }

}