// export { Login } from "./login";
// export { Register } from "./register";


import React from "react";
import "./index.css";
import Slider from "./slider";
import Title from "../UsernameForm/Title";


// import React, { useState } from 'react';
// import ItemsCarousel from 'react-items-carousel';

// export default () => {
//   const [activeItemIndex, setActiveItemIndex] = useState(0);
//   const chevronWidth = 40;

export class Home extends React.Component {


    render() {
        return (
            <div className="contain">
                    <h1>Welcome to Binge Watch Club!</h1>
                        <p className="lead text-primary">Find titles of the most recommended shows to "binge watch." Registration allows you to search by mood and save your personalized list of shows you would like to watch. So, grab that popcorn and find your spot on the couch. What are we watching?</p>
                <br></br>
                <br></br>

                <Title className="glow-edges">Recent Recommendations</Title>
               
                <br></br>
               
               <Slider />
            
            </div>

        );
    }

}

export default Home;