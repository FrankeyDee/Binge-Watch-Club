import React, { Component } from "react";
import Card from "../ShowSavedPages/Card";
import MovieSlider from "../MovieSlider";
// import SavedShow from "../components/SavedShow";
import Footer from "../ShowSavedPages/Footer";
import API from "../ApiSaveShows/API";
import { Col, Row, Container } from "../ShowSavedPages/Grid";
// import { List } from "../ShowSavedPages/List";


class SavedShow extends Component {
  state = {
    shows: []
  };

  componentDidMount() {
    this.getSavedShows();
  }

  getSavedShows = () => {
    API.getSavedShows("/api/shows")
      .then(res =>
        this.setState({
          shows: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleShowDelete = id => {
    API.deleteShow(id).then(res => this.getSavedShows());
  };

  render() {
    return (
      <Container>
        <div className="car">
        <h1>Your Saved Shows</h1>
          </div>
          {/* // eslint-disable-next-line} */}
          <img style={{height: '100%',width: '50%', display: 'block', alignSelf: 'center'}} alt="Saved" src="https://images.unsplash.com/photo-1481137344492-d5a150a97f8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
        <Row>
          <Col size="md-12">
            <Card title="Saved Shows" icon="download">
              {this.state.shows.length ? (
                <MovieSlider movies={this.state.shows} deleteHandler={this.handleShowDelete} />
              ) : (
                <h2 className="text-center">No Saved Shows</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}



export default SavedShow;
