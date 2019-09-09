import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Artists extends Component {
  state = {
    artists: [],
    name: "",
  };

  componentDidMount() {
    this.loadArtists();
  }

  loadArtists = () => {
    API.getArtists()
      .then(res =>
        this.setState({ artist: res.data, name: "" })
      )
      .catch(err => console.log(err));
  };

  removeArtist = id => {
    API.removeArtist(id)
      .then(res => this.loadArtists())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.name) {
      API.saveArtist({
        name: this.state.name
      })
        .then(res => this.loadArtists())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            {this.state.artists.length ? (
              <List>
                {this.state.artists.map(artist => (
                  <ListItem key={artist._id}>
                    <Link to={"/artists/" + artist._id}>
                      <strong>
                        {artist.name} 
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.removeArtist(artist._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Artists to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Artists;