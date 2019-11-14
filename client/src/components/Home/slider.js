import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";

  export class Movies extends React.Component {

    state = {
        movies: []
    }
    componentDidMount() {
        this.loadMovies();
    }

    loadMovies = () => {
 
        fetch('http://www.omdbapi.com/?apikey=848e3817&s=stranger+things&plot')
            .then(res => res.json())
            .then(res => res.Search)
            .then(res => res.reduce((movieObj, movie) => {
                movieObj.push({ title: movie.Title, poster: movie.Poster, year: movie.Year });

                return movieObj;
            }, []))
            .then(movies => this.setState({ movies: movies }))
            .catch(err => console.error(err))
    }

    render() {
        return (
            <CarouselProvider
            naturalSlideHeight={125}
            naturalSlideWidth={100}
            totalSlides={2}>

                <ButtonBack>Back</ButtonBack>
                
                <Slider>
            <div className="card-container">

                    {this.state.movies.map(item => (
                        <div className="card text-white bg-dark mb-3 cardy">
                            <div className="card-header">{item.year}</div>
                            <div class="card-body">
                                <h4 class="card-title">{item.title}</h4>
                                <img src={item.poster} alt="Stranger Things" />
                                <p class="card-text">
                                In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.
                                </p>
                            </div>
                        </div>
                    ))}
               </div>
                    </Slider>
                    <ButtonNext>Next</ButtonNext>
                    </CarouselProvider>
        );
    };
};

export default Movies;