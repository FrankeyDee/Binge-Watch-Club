import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";
import "./slider.css"

const MovieSlider = (props) => {
    return (
        <CarouselProvider className="carousel1"
        naturalSlideHeight={400}
        naturalSlideWidth={400}
        totalSlides={12}
        visibleSlides={1}>

        <Slider infinite="false" className="slider1">
            <div className="card-container">
                {props.movies.map((item, index) => (
                    <Slide className="card text-white bg-dark mb-3 cardy slide1" key={item.name} index={index}>
                        <div>{item.index}</div>
                        <div className="card-header">{item.name}</div>
                        <div className="card-body text-white">
                            <img src={item.poster} alt={item.name} />
                            <div id="overview" className="text-white">{item.overview}</div>
                        </div>
                        <ButtonBack className="backBtn btn-outline-secondary">&lt;&lt;</ButtonBack>
                        { props.isSearch ? <button onClick={() => props.saveHandler(item)}>Save</button> : <button onClick={() => props.deleteHandler(item._id)}>Delete</button> }
                        <ButtonNext className="btn-outline-secondary">&gt;&gt;</ButtonNext>
                    </Slide>
                ))}
            </div>
        </Slider>
    </CarouselProvider>
);
}; 

export default MovieSlider;

