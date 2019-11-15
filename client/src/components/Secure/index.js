// import React from "react";
import React, {
    Component,
    Fragment
} from "react";
import cookie from 'react-cookies'
import {
    Redirect
} from 'react-router-dom';
import Title from "../UsernameForm/Title";
import API from "../Login-Reg-Utils/API";
import './secure.css'


class Secure extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            loading: true
        };
    }

    componentDidMount() {
        this.validateCookie();
    }

    validateCookie() {
        // const cookieValue = cookie.load('connect.sid');
        API.validateCookie()
            .then(res => res.json())
            .then(res => {
                console.warn(res);
                if (res.username) {
                    this.setState({
                        user: res,
                        loading: false
                    });
                } else {
                    this.setState({
                        loading: false
                    });
                }
            })
            .catch(err => this.setState({
                loading: false
            }))
    }

    handleLogout() {
        API.logout()
            .then(res => window.location.reload())
            .catch(err => console.error(err));
    }




    // handleSubmit = () => {
    //     this.props.history.push("/loginshow");
    //     // console.log(this.props)
    // }




    render() {

        if (this.state.loading) {
            return <div> Loading... </div>;
        }
        if (!this.state.user) {
            return <Redirect to = '/login' />
        }
        return ( <Fragment>
            <Title> This is a secure page </Title> <button id = "logout" onClick = {this.handleLogout} className = "btn">LOG OUT</button></Fragment>
        );

    }

}

export default Secure