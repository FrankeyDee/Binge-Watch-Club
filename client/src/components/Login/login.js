import React from "react";
import './login.css'


export class Login extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="base-container" ref={this.propsContainerRef}>

                <div className="header"> LoginTestingOnly </div>
                <div className="content"></div>
                
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username"> Username </label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form">
                        <label htmlFor="examplePassword" className="col-form-label" htmlFor="inputDefault">Password</label>
                            <input type="password" className="input" placeholder="Enter Password" />
                    </div>

                </div>
                <div className="footer">
                    <button type="button" className="btn" onClick={this.handleSubmit}>

                        Login
                    </button>
                </div>
            </div>
            
        );
    }

    handleSubmit = () => {
        this.props.history.push("/loginshow");
        // console.log(this.props)
    }

}