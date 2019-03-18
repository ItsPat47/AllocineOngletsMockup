import React, { Component } from "react";

import axios from "axios";

class Upcoming extends Component {
  state = {
    upcome: [],
    isLoading: true
  };

  renderUpcoming = () => {
    if (this.isLoading === true) {
      return <p>Loading upcoming movies </p>;
    } else {
      return (
        <div className="allTheMovies">
          {this.state.upcome.map((upcome, index) => (
            <div className="movieOne" key={index}>
              <div className="poster">
                <img
                  src={
                    "https://image.tmdb.org/t/p/w370_and_h556_bestv2" +
                    upcome.poster_path
                  }
                  alt="movie_poster"
                  className="moviePoster"
                />
              </div>
              <div className="allInfo">
                <div className="info">
                  <div className="titleMovie" key={upcome.id}>
                    {upcome.title}
                  </div>
                  <div className="date" key={upcome.id}>
                    {upcome.release_date}
                  </div>
                </div>
                <div key={upcome.id}>{upcome.overview}</div>
                <div />
              </div>
            </div>
          ))}
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <div className="allTheMovies">{this.renderUpcoming()}</div>
      </div>
    );
  }
  async componentDidMount() {
    const response = await axios.get(
      "https://api-allocine.herokuapp.com/api/movies/upcoming"
    );
    this.setState({ upcome: response.data.results, isLoading: false });
  }
}

export default Upcoming;
