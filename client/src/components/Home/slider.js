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
                        <img src={ require('../../Images/show_1.jpeg') } alt="Stranger Things" />                        
                        <h6 class="card-title">Stranger Things</h6>
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
}

export default Slider;