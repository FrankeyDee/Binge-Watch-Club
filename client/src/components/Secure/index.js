import React from "react";
import './secure.css'


class Secure extends React.Component {

    constructor(props) {
        super(props);

        // Secure Testing
            // const logoutBtn = document.querySelector('#logout');
            // logoutBtn.addEventListener('click', event => {
            //     fetch('/logout', { method: 'POST' })
            //         .then(() => window.location.reload())
            //         .catch(err => console.error(err));
            // });
    
          

    
    }


    render() {
        return (
            
            <div className="flexbox">
            <div className="title-box">
                <h1 className="title secure">This is a secure page for Testing only</h1>
            </div>
            {/* <button id="logout" className="btn">LOG OUT</button> */}

            <button type="button" className="un btn secure-btn" onClick={this.handleSubmit}>

                Log out of Secure Testing  
            </button>
        </div>
            
        );

        
        
    }

    handleSubmit = () => {
        this.props.history.push("/login");
        // console.log(this.props)
    }


   
    
}

export default Secure