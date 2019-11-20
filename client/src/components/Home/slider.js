import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";
import "./slider.css"

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
            body: JSON.stringify({ query: '35' })
        })
            .then(res => res.json())
            .then(res => res.results)
            .then(res => res.reduce((movieObj, show) => {
                movieObj.push({ name: show.name, poster: 'https://image.tmdb.org/t/p/w400' + show.poster_path, overview: show.overview });

                return movieObj;
            }, []))
            .then(show => this.setState({ movies: show }))
            .catch(err => console.error(err))
    }

    render() {
        return (
 
            <CarouselProvider
            naturalSlideHeight={200}
            naturalSlideWidth={400}
            totalSlides={12}>
                
 
                <Slider>
                    <div className="card-container">
                    <ButtonNext className="btn-outline-secondary">&lt;&lt;</ButtonNext>
                    {/* {console.log(this.state.movies)} */}
                    {this.state.movies.map(item => (
                        <div className="card text-white bg-dark mb-3 cardy">
                            <div> {item.index}</div>
                            <div className="card-header">{item.name}</div>
                            <div className="card-body text-white">
                                <img src={item.poster} alt={item.name} />
                                <div id="overview" className="text-white">{item.overview}</div>
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

