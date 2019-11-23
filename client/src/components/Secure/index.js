// import React from "react";
import React, {
    Component,
    Fragment
} from "react";
import {
    Redirect
} from 'react-router-dom';
// eslint-disable-next-line
import Title from "../UsernameForm/Title";
import API from "../Login-Reg-Utils/API";
import './secure.css'
import { Link } from "react-router-dom";


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
        return ( 
            <div className="container">
                <Fragment>
                <Title>What to Watch?</Title>
                <ul className="options">
                
                    <li><Link to="/" className="btn btn-outline-success" a href="/">Search</Link></li>
                    <li><Link to="/saved" className="btn btn-outline-info">Saved Shows</Link></li>
                    <li><Link to="/" className="btn btn-outline-warning">Log Out</Link></li>
                </ul>
                </Fragment>
            </div>
        );

    }

}

export default Secure