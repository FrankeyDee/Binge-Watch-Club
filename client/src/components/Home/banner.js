// export { Login } from "./login";
// export { Register } from "./register";


import React from "react";
import "./index.css"


export class Home extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="contain">

                <div className="jumbotron">
                    <h1>Welcome to the Binge Watch Club!</h1>
                        <p class="lead text-primary">Find titles of the most recommended shows to "binge watch." Registration allows you to search by mood and save your personalized list of shows you would like to binge. So, grab that popcorn and find your spot on the couch. It's time to binge watch!</p>
                </div>

                <div className="card text-white bg-dark mb-3 cardy">
                    <div className="card-header">Header</div>
                    <div class="card-body">
                        <h4 class="card-title">Dark card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

            </div>
        );
    }

}

export default Home;