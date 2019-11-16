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
        fetch('/api/show/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: 'buffy+slayer' })
        })
            .then(res => res.json())
            .then(res => res.Search)
            .then(res => res.reduce((movieObj, movie) => {
                movieObj.push({ title: movie.Title, poster: movie.Poster, year: movie.Year, plot: movie.Plot });

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
 
                <Slider>
                    <div className="card-container">
                    <ButtonNext className="btn-outline-secondary">&lt;&lt;</ButtonNext>

                    {this.state.movies.map(item => (
                        <div className="card text-white bg-dark mb-3 cardy">
                            <div className="card-header">{item.year}</div>
                            <div className="card-body text-white">
                                <img src={item.poster} alt={item.title} />
                                <h4 className="text-white">{item.title}</h4>
                            </div>
                        </div>
                    ))}
                    <ButtonBack className="btn-outline-secondary">&gt;&gt;</ButtonBack>
               </div>
                    </Slider>
                    </CarouselProvider>
        );
    };
};

export default Movies;

