import React from "react";
import './register.css'


export class Register extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="base-container" ref={this.propsContainerRef}>
                <div className="header"> Register </div>
                <div className="content"></div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username"> Username </label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email"> Email </label>
                        <input type="text" name="email" placeholder="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password </label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn register">

                        Register
                    </button>
                </div>
            </div>
        );
    }

}