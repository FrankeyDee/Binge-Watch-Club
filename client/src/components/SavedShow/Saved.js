import React, { Component } from "react";
import Jumbotron from "../ShowSavedPages/Jumbotron";
import Card from "../ShowSavedPages/Card";
// import SavedShow from "../components/SavedShow";
import Footer from "../ShowSavedPages/Footer";
import API from "../ApiSaveShows/API.";
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
    API.getSavedShows()
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
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Binge Club Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Shows of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Shows" icon="download">
              {this.state.shows.length ? (
                <MovieSlider movies={this.state.shows} />
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

// <List>
//   {this.state.shows.map(show => (
//     <Show
//       key={show._id}
//       title={show.title}
//       subtitle={show.subtitle}
//       link={show.link}
//       authors={show.authors.join(", ")}
//       description={show.description}
//       image={show.image}
//       Button={() => (
//         <button
//           onClick={() => this.handleShowDelete(show._id)}
//           className="btn btn-danger ml-2"
//         >
//           Delete
//         </button>
//       )}
//     />
//   ))}
// </List>

export default SavedShow;
