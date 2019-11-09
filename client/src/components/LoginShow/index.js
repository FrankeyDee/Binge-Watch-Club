import React from "react";
import './loginshow.css'


class LoginShow extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="base-container" ref={this.propsContainerRef}>
               <h1>SHOWS</h1>
            </div>
        );
    }

}
export default LoginShow