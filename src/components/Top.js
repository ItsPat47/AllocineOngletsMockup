import React, { Component } from "react";
import axios from "axios";

class Top extends Component {
  state = {
    topmovies: [],
    isLoading: true
  };

  renderTop = () => {
    if (this.isLoading === true) {
      return <p>Loading Best Movies</p>;
    } else {
      return (
        <div className="allTheMovies">
          {this.state.topmovies.map((topmovies, index) => (
            <div className="movieOne" key={index}>
              <div className="poster">
                <img
                  src={
                    "https://image.tmdb.org/t/p/w370_and_h556_bestv2" +
                    topmovies.poster_path
                  }
                  alt="movie_poster"
                  className="moviePoster"
                />
              </div>
              <div className="allInfo">
                <div className="info">
                  <div className="titleMovie" key={topmovies.id}>
                    {topmovies.title}
                  </div>
                  <div className="date" key={topmovies.id}>
                    {topmovies.release_date}
                  </div>
                </div>
                <div key={topmovies.id}>{topmovies.overview}</div>
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
        <div className="allTheMovies"> {this.renderTop()}</div>
      </div>
    );
  }
  async componentDidMount() {
    const response = await axios.get(
      "https://api-allocine.herokuapp.com/api/movies/top_rated"
    );
    this.setState({ topmovies: response.data.results, isLoading: false });
  }
}

export default Top;
