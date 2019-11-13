import React from 'react';

 
// export default () => {
//   const [activeItemIndex, setActiveItemIndex] = useState(0);
//   const chevronWidth = 40;

  export class Slider extends React.Component {

    // state = {
    //     Title: [],
    //     Plot: "",
    //     Poster: ""
    // };

    state = {
        movies: []
    }

    // const stateObj = {};
    // response.map((item, index) => {
    //     stateObj[index] = {
    //         title: item.title,
    //         plot: item.plot,
    //         poster: item.poster
    //     }})
    // })
    // this.setState({ movies: stateObj })

    componentDidMount() {
        this.loadMovies();
    }

    // loadMovies = () => {
    //     API.getMovies()
    //     .then(res => 
    //         this.setState({ Title: res.data, Plot: "", Poster: "",})
    //         )
    //         .catch(err => console.log(err));
    // };

    // loadMovies = () => {
    //     // const stateObj = {};
    //     // fetch('http://www.omdbapi.com/?i=tt3896198&apikey=848e3817')
    //     fetch('http://www.omdbapi.com/?apikey=848e3817&s=stranger+things&plot')
    //         .then(res => res.json())
    //         .then(res => res.Search)
    //         .then(res => res.reduce((movieObj, movie) => {
    //             movieObj[movie.Title] = { poster: movie.Poster, plot: movie.Year };
    //             // console.log(movie);
    //             // console.log(movieObj);
    //             return movieObj;
    //         }, {}))
    //         .then(movies => this.setState({ movies: movies }))
    //         .catch(err => console.error(err))
    // }

    loadMovies = () => {
        // const stateObj = {};
        // fetch('http://www.omdbapi.com/?i=tt3896198&apikey=848e3817')
        fetch('http://www.omdbapi.com/?apikey=848e3817&s=stranger+things&plot')
            .then(res => res.json())
            .then(res => res.Search)
            .then(res => res.reduce((movieObj, movie) => {
                movieObj.push({ title: movie.Title, poster: movie.Poster, year: movie.Year });
                // console.log(movie);
                // console.log(movieObj);
                return movieObj;
            }, []))
            .then(movies => this.setState({ movies: movies }))
            .catch(err => console.error(err))
    }

    render() {
        return (
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

                    {/* {console.log(this.state)} */}

                    <div className="card text-white bg-dark mb-3 cardy">
                        <div className="card-header">Horror Fiction</div>
                        <div class="card-body">
                            <h4 class="card-title">Stranger Things</h4>
                            <img src={ require('../../Images/show_1.jpeg') } alt="Stranger Things" />
                            <p class="card-text">
                            In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.
                            </p>
                        </div>
                    </div>
                
                    
                <div className="card text-white bg-dark mb-3 cardy">
                    <div className="card-header">Thriller</div>
                    <div class="card-body">
                        <img src={ require('../../Images/show_2.jpg') } alt="You" />
                        <h6 class="card-title">You</h6>
                    </div>
                </div>

                <div className="card text-white bg-dark mb-3 cardy">
                    <div className="card-header">Comedy-Drama</div>
                    <div class="card-body">
                        <img src={ require('../../Images/show_4.jpg') } alt="You" />
                        <h6 class="card-title">Orange Is The New Black</h6>
                  </div>
                </div>

                <div className="card text-white bg-dark mb-3 cardy">
                    <div className="card-header">Drama - Fantasy</div>
                    <div class="card-body">
                        <img src={ require('../../Images/show_5.jpg') } alt="You" />
                        <h6 class="card-title">Game Of Thrones</h6>
                   </div>
                </div>
            </div>
            
        );
    };
};

export default Slider;