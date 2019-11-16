import React from "react";
import "./index.css";

export class About extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                {/* <h1 className="display-3">Hello, world!</h1> */}
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            </div>

        );
    }

}

export default About;