import React, { Component } from "react";
import axios from 'axios';
import ShowCard from "../show-card/index";

class ShowDetail extends Component {

  state = {
    show: null,
  };

  componentDidMount() {
    this.fetchShowData();
  }

  fetchShowData() {
    const id = this.props.match.params.id;

    axios.get(`http://api.tvmaze.com/shows/${id}`)
      .then((res) => this.setState({ show: res.data }))
      .catch(() => this.setState({ error: true }));

  }

  render() {
    const { show } = this.state;
    return (
      <div>
        {show !== null &&
          <div>
            <h3>{show.name}</h3>
            <img
              alt=''
              className="image_display"
              src={show.image.medium}
            ></img>
            <p>{show.summary}</p>
            <ShowCard show={show} />
          </div>}
      </div>
    );
  }
}

export default ShowDetail;
