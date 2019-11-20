import React, { Component, Fragment } from "react";

import Banner from "./banner";
import MovieSlider from "../MovieSlider";
import About from "./about";

class Home extends Component {
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
            <Fragment>
                <Banner />
                <MovieSlider movies={this.state.movies} saveHandler={(movie) => console.log('Should save at some point: ' + JSON.stringify(movie))} isSearch />
                <About />
            </Fragment>
        );
    }
}

export default Home
