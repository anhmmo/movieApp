import React, { useState } from "react";
import "./SlideMovie.scss";

function SlideMovie({ movie }) {
  const [moviesList, setMoviesList] = useState(movie);

  const openNextMovie = () => {
    let movie2 = moviesList.slice(0, 5);
    setMoviesList([...moviesList.slice(5), ...movie2]);
  };
  const openPrevMovie = () => {
    let movie2 = moviesList.splice(15, 5);
    setMoviesList([...movie2, ...moviesList]);
  };

  return (
    <section className="slider-show">
      <div className="slider-container">
        {moviesList.map((film, index) => (
          <div key={index} className="slider-box">
            <img
              className="slider-image"
              src={"http://image.tmdb.org/t/p/w500" + film.poster_path}
              alt="film"
            />
            <i className="far fa-play-circle"></i>
            <p className="slider-rating">{film.vote_average}/10</p>
            <h2>{film.title}</h2>
            <p className="slider-genres">Action, drama </p>
            <p className="slider-cast">{film.release_date}</p>
          </div>
        ))}
      </div>
      <button onClick={() => openPrevMovie()}>prev</button>
      <button onClick={() => openNextMovie()}>next</button>
    </section>
  );
}

export default SlideMovie;
