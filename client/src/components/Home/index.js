// export { Login } from "./login";
// export { Register } from "./register";


import React from "react";
// import './loginshow.css'


class Home extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="jumbotron background">
                <h1>Welcome to the Binge Watch Club!</h1>
                    <p class="lead text-primary">Find titles of the most recommended shows to "binge watch." Registration allows you to search by mood and save your personalized list of shows you would like to binge. So, grab that popcorn and find your spot on the couch. It's time to binge watch!</p>
            </div>
        );
    }

}
export default Home