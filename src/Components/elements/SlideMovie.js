import React from "react";
import "./SlideMovie.scss";

function SlideMovie(props) {
  return (
    <section className="slider-show">
      <div className="slider-container">
        <div className="slider-box">
          <img
            className="slider-image"
            src="http://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
            alt="film"
          />
          <i class="far fa-play-circle"></i>
          <p className="slider-rating">8/10</p>
          <h2>Captain Asia: Cricket War(2016)</h2>
          <p className="slider-genres">Action, drama</p>
          <p className="slider-cast">cast: nguyen au</p>
        </div>
        <div className="slider-box">
          <img
            className="slider-image"
            src="http://image.tmdb.org/t/p/w500/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg"
            alt="film"
          />
          <i class="far fa-play-circle"></i>
          <p className="slider-rating">8/10</p>
          <h2>Captain Asia: Cricket War(2016)</h2>
          <p className="slider-genres">Action, drama</p>
          <p className="slider-cast">cast: nguyen au</p>
        </div>
        <div className="slider-box">
          <img
            className="slider-image"
            src="http://image.tmdb.org/t/p/w500/niyXFhGIk4W2WTcX2Eod8vx2Mfe.jpg"
            alt="film"
          />
          <i class="far fa-play-circle"></i>
          <p className="slider-rating">8/10</p>
          <h2>Captain Asia: Cricket War(2016)</h2>
          <p className="slider-genres">Action, drama</p>
          <p className="slider-cast">cast: nguyen au</p>
        </div>
        <div className="slider-box">
          <img
            className="slider-image"
            src="http://image.tmdb.org/t/p/w500/jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg"
            alt="film"
          />
          <i class="far fa-play-circle"></i>
          <p className="slider-rating">8/10</p>
          <h2>Captain Asia: Cricket War(2016)</h2>
          <p className="slider-genres">Action, drama</p>
          <p className="slider-cast">cast: nguyen au</p>
        </div>
        <div className="slider-box">
          <img
            className="slider-image"
            src="http://image.tmdb.org/t/p/w500/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg"
            alt="film"
          />
          <i class="far fa-play-circle"></i>
          <p className="slider-rating">8/10</p>
          <h2>Captain Asia: Cricket War(2016)</h2>
          <p className="slider-genres">Action, drama</p>
          <p className="slider-cast">cast: nguyen au</p>
        </div>
      </div>
    </section>
  );
}

export default SlideMovie;
