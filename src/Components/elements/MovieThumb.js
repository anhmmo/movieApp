import React, { useState } from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({ image, clickable, movie }) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <>
          <Link to={`/${movie.id}`}>
            <img className="clickable" src={image} alt="moviethumb" />
          </Link>
          <div className="content-box">
            <span className="title">
              {movie.title.length > 20
                ? movie.title.slice(0, 18) + "..."
                : movie.title}
            </span>
            <span className="genre">{movie.genre_ids}</span>

            <div className="box-rating">
              {movie.vote_average === 0 ? "no review" : movie.vote_average}
            </div>
          </div>
        </>
      ) : (
        <>
          <img src={image} alt="moviethumb" />
        </>
      )}
    </StyledMovieThumb>
  );
};

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default MovieThumb;
