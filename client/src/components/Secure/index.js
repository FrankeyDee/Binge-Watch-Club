// import React from "react";
import React, {
    Component,
    Fragment
} from "react";
import {
    Redirect
} from 'react-router-dom';
import Title from "../UsernameForm/Title";
import API from "../Login-Reg-Utils/API";
import './secure.css'


class Secure extends Component {

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

    render() {

        if (this.state.loading) {
            return <div> Loading... </div>;
        }
        if (!this.state.user) {
            return <Redirect to = '/login' />
        }
        return ( <Fragment>
            <Title> My Shows To Binge </Title> 
            <div className="logout-button">
            <button id = "logout" onClick = {this.handleLogout} className = "btn btn-outline-danger">LOG OUT</button>
            </div>
            </Fragment>
        );

    }

}

export default Secure