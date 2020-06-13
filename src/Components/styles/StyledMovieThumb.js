import styled from "styled-components";

export const StyledMovieThumb = styled.div`
  img {
    width: 100%;
    height: 80%;
    object-fit: cover;

    transition: all 0.3s;
    animation: animateMovieThumb 0.5s;

    :hover {
      opacity: 0.8;
    }

    .clickable {
      cursor: pointer;
    }

    @keyframes animateMovieThumb {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  .content-box {
    position: relative;

    padding: 10px;
    margin-top: -10px;
    height: 40px;

    background-color: white;

    font-family: "Source Sans Pro", sans-serif;
  }

  .title {
    position: absolute;
    top: 6px;

    display: block;

    color: #494c62;

    font-size: 21px;
    font-weight: 700;
  }

  .genre {
    position: absolute;
    bottom: 8px;

    display: block;

    color: #babbc3;

    font-size: 15px;
  }

  .box-rating {
    position: absolute;
    top: -28px;
    right: 0;
    z-index: 2;

    padding: 3px 8px;
    border: 1.2px solid #ff0079;
    border-radius: 3px;

    color: #ff0079;
    background-color: white;
  }
`;
