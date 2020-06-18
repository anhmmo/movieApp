import React, { useState } from "react";
import "./SlideMovie.scss";
import { Link } from "@reach/router";

function SlideMovie({ movie }) {
  const [moviesList, setMoviesList] = useState(movie);
  const [openBox, setOpenBox] = useState(0);
  const [autoSlide, setAutoSlide] = useState(false);

  const openNextMovie = () => {
    setOpenBox(1);
    let movie2 = moviesList.slice(0, 5);
    setMoviesList([...moviesList.slice(5), ...movie2]);
    setAutoSlide(false);
    setTimeout(() => {
      setOpenBox(0);
    }, 500);
  };
  const openPrevMovie = () => {
    setOpenBox(2);
    let movie2 = moviesList.splice(15, 5);
    setMoviesList([...movie2, ...moviesList]);
    setAutoSlide(false);
    setTimeout(() => {
      setOpenBox(0);
    }, 500);
  };
  let classInfo = "";
  switch (openBox) {
    case 1:
      classInfo = "open-box-left";
      break;
    case 2:
      classInfo = "open-box-right";
      break;
    default:
      classInfo = "";
      break;
  }

  const onAutoSlide = () => {
    autoSlide ? setAutoSlide(false) : setAutoSlide(true);
  };

  //create effect when button clicked

  return (
    <section className="slider-show">
      <div className="slider-container">
        {moviesList.map((film, index) => (
          <div
            key={index}
            className={
              autoSlide
                ? "slider-box auto-slide " + classInfo
                : "slider-box " + classInfo
            }
          >
            <img
              className="slider-image"
              src={"http://image.tmdb.org/t/p/w500" + film.poster_path}
              alt="film"
            />

            <a href="#ff" className="icon-video">
              <span className="ion-ios-play"></span>
              <span className="ion-ios-play2"></span>
            </a>
            <p className="slider-rating">{film.vote_average}/10</p>
            <h2
              style={
                film.title.length > 40
                  ? { fontSize: "15px" }
                  : { fontSize: "24px" }
              }
            >
              {film.title.length > 23 ? (
                <Link to={"/" + film.id}>
                  {film.title.slice(0, film.title.indexOf(" ", 15))} <br />{" "}
                  {film.title.slice(film.title.indexOf(" ", 15))}
                </Link>
              ) : (
                <Link to={"/" + film.id}> {film.title} </Link>
              )}
            </h2>
            <p className="slider-genres">Action, drama </p>
            <p className="slider-cast">{film.release_date}</p>
          </div>
        ))}
      </div>
      <label
        onClick={() => onAutoSlide()}
        className={autoSlide ? "label-off" : ""}
      >
        <div className={autoSlide ? "switcher switcher-off" : "switcher"}></div>
      </label>

      <ul>
        <li className="prev" onClick={() => openPrevMovie()}>
          <span></span>
        </li>
        <li className="next" onClick={() => openNextMovie()}>
          <span></span>
        </li>
      </ul>
    </section>
  );
}

export default SlideMovie;
