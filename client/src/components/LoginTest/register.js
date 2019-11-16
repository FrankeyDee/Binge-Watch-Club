// import React from "react";
import React, {
    Component,
    Fragment
} from "react";
import {
    Link
} from "react-router-dom";
import API from "../Login-Reg-Utils/API";
import Title from "../UsernameForm/Title";
import Form from "../UsernameForm/Form";
import './register.css';
import '../UsernameForm/Form.css';
import '../UsernameForm/Title.css'


export class Register extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: null
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const {
            name,
            value
        } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        API.register(this.state.username, this.state.password)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    console.error(res.error)
                    this.setState({ error: res.error })
                } else {
                    this.props.history.push('/secure')
                }
            })
            .catch(err => console.error(err));
    }


    render() {
        return (
            <Fragment >
                <Title > Register </Title> 
                { this.state.error && <span style={{backgroundColor: "red"}}>{ this.state.error }</span>}
                <Form inputHandler={this.handleInputChange} submitHandler={this.handleSubmit}/>
                <div className="form-wrap">
                    <Link to="/login" className="btn btn-outline-info center-btn">Already have an account ? Login here</Link>
                </div>
            </Fragment >

        );
    }

}