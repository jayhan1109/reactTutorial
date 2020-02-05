import React, { Component, Fragment } from "react";
import axios from "axios";
import Banner from "./Banner";
import ArtistList from "./ArtistList";

const URL_ARTISTS = "http://localhost:3004/artists";

export default class Home extends Component {
  state = {
    artists: []
  };

  async componentDidMount() {
    try {
      let response = await axios.get(URL_ARTISTS);

      this.setState({ artists: response.data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log(this.state);

    return (
      <Fragment>
        <Banner />
        <ArtistList artists={this.state.artists} />
      </Fragment>
    );
  }
}
