// export { Login } from "./login";
// export { Register } from "./register";


import React from "react";
import "./index.css";
import Slider from "./slider";

// import React, { useState } from 'react';
// import ItemsCarousel from 'react-items-carousel';

// export default () => {
//   const [activeItemIndex, setActiveItemIndex] = useState(0);
//   const chevronWidth = 40;

export class Home extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="contain">

                <div className="jumbotron">
                    <h1>Welcome to Binge Watch Club!</h1>
                        <p class="lead text-primary">Find titles of the most recommended shows to "binge watch." Registration allows you to search by mood and save your personalized list of shows you would like to binge. So, grab that popcorn and find your spot on the couch. It's time to binge watch!</p>
                </div>
                <Slider />
            </div>

        );
    }

}

export default Home;