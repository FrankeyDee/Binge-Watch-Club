import React from "react";
import './login.css'


export class Login extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="base-container" ref={this.propsContainerRef}>
                <h1> Login </h1>
                    <div className="form">
                        <label htmlFor="exampleUsername" className="col-form-label" htmlFor="inputDefault">Username</label>
                            <input type="text" className="input" placeholder="Enter username" />
                    </div>
                    <div className="form">
                        <label htmlFor="examplePassword" className="col-form-label" htmlFor="inputDefault">Password</label>
                            <input type="password" className="input" placeholder="Enter Password" />
                    </div>
                    <button type="button" className="btn btn-outline-primary">
                        Login
                    </button>
                </div>
        );
    }

}