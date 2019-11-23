import React from "react";
import Title from "../UsernameForm/Title";
import "./index.css";
import { Link } from "react-router-dom";

const Banner = (props) => {
    return (
        <div className="contain">
            <div className="intro">
                <div className="wordart">
                    <img id="wordart" src="tv_word_art.jpg" alt="A TV" />
                    <div className="banner">
                        <h1>Welcome to The Binge Watch Club!</h1>
                        <br></br>
                        <br></br>
                        <p className="lead text-primary">Find titles of the most recommended shows to "binge watch." Registration allows you to search by mood and save your personalized list of shows you would like to watch. So, grab that popcorn and find your spot on the couch. What are we watching?</p>
                        <select onChange={props.loadMovies} className="form-control mr-sm-2 dropdown"  placeholder="Search" id="exampleSelect1">
                            <option value="28">Action</option>
                            <option value="16">Animated</option>
                            <option value="35">Comedy</option>
                            <option value="10749">Romance</option>
                            <option value="878">Sci Fi</option>
                        </select>
                    </div>
                </div>
            </div>
                        <Link to="/saved" className="btn btn-info">See your saved movies!</Link>
            


            <div className="recent">
            <Title>Recently Recommended</Title>
            </div>
        
        </div>

    );
}

export default Banner;