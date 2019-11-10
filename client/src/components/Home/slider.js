import React from 'react';

 
// export default () => {
//   const [activeItemIndex, setActiveItemIndex] = useState(0);
//   const chevronWidth = 40;

  export class Slider extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card-container">

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
                            <h4 class="card-title">You</h4>
                            <img src={ require('../../Images/show_2.jpg') } alt="You" />
                            <p class="card-text">
                            What would you do for love? For a brilliant male bookstore manager who crosses paths with an aspiring female writer, this question is put to the test. A charming yet awkward crush becomes something even more sinister when the writer becomes the manager's obsession. Using social media and the internet, he uses every tool at his disposal to become close to her, even going so far as to remove any obstacle --including people -- that stands in his way of getting to her.
                            </p>
                        </div>
                    </div>

                    <div className="card text-white bg-dark mb-3 cardy">
                        <div className="card-header">Comedy-Drama</div>
                        <div class="card-body">
                            <h4 class="card-title">Orange Is The New Black</h4>
                            <img src={ require('../../Images/show_4.jpg') } alt="You" />
                            <p class="card-text">
                            This Netflix original series is based on the book of the same title. Forced to trade power suits for prison orange, Chapman makes her way through the corrections system and adjusts to life behind bars, making friends with the many eccentric, unusual and unexpected people she meets.
                            </p>
                        </div>
                    </div>

                    <div className="card text-white bg-dark mb-3 cardy">
                        <div className="card-header">Drama - Fantasy</div>
                        <div class="card-body">
                            <h4 class="card-title">Game Of Thrones</h4>
                            <img src={ require('../../Images/show_5.jpg') } alt="You" />
                            <p class="card-text">
                            George R.R. Martin's best-selling book series "A Song of Ice and Fire" is brought to the screen as HBO sinks its considerable storytelling teeth into the medieval fantasy epic. It's the depiction of two powerful families -- kings and queens, knights and renegades, liars and honest men -- playing a deadly game for control of the Seven Kingdoms of Westeros, and to sit atop the Iron Throne. 
                            </p>
                        </div>
                    </div>

            </div>
        );
    };
}

export default Slider;