// export { Login } from "./login";
// export { Register } from "./register";


import React from "react";
import "./index.css";
import Slider from "./slider";
import Title from "../UsernameForm/Title";
import { CarouselProvider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./slider.css"


// import React, { useState } from 'react';
// import ItemsCarousel from 'react-items-carousel';

// export default () => {
//   const [activeItemIndex, setActiveItemIndex] = useState(0);
//   const chevronWidth = 40;

export class Home extends React.Component {


    render() {
        return (
            <div className="contain">
                <div className="intro">
                    <div className="wordart">
                        <img id="wordart" src="tv_word_art.jpg" />
                        <div className="banner">
                            <h1>Welcome to The Binge Watch Club!</h1>
                            <br></br>
                            <br></br>
                            <p className="lead text-primary">Find titles of the most recommended shows to "binge watch." Registration allows you to search by mood and save your personalized list of shows you would like to watch. So, grab that popcorn and find your spot on the couch. What are we watching?</p>
                        </div>
                    </div>
                </div>
                


                <div className="recent">
                <Title>Recently Recommended</Title>
                </div>

               
               <Slider />
            
            </div>

        );
    }

}

export default Home;