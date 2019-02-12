import React, { Component } from "react";
import axios from "axios";

class Popular extends Component {
  state = {
    movies: [],
    isLoading: true
  };

  renderMovies = () => {
    if (this.isLoading === true) {
      return <p>Loading...movies</p>;
    } else {
      return (
        <div className="allTheMovies">
          {this.state.movies.map((movies, index) => (
            <div className="movieOne" key={index}>
              <div className="poster">
                <img
                  src={
                    "https://image.tmdb.org/t/p/w370_and_h556_bestv2" +
                    movies.poster_path
                  }
                  alt="movie_poster"
                  className="moviePoster"
                />
              </div>
              <div className="allInfo">
                <div className="info">
                  <div key={movies.id}>{movies.title}</div>
                  <div key={movies.id}>{movies.release_date}</div>
                </div>
                <div key={movies.id}>{movies.overview}</div>
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
        <div className="allTheMovies">{this.renderMovies()}</div>
      </div>
    );
  }
  async componentDidMount() {
    const response = await axios.get(
      "https://api-allocine.herokuapp.com/api/movies/popular"
    );
    this.setState({ movies: response.data.results, isLoading: false });
  }
}

export default Popular;
