import styled from "styled-components";

export const StyledMovieThumb = styled.div`
  img {
    width: 100%;
    height: 80%;
    transition: all 0.3s;
    object-fit: cover;
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
    background-color: white;
    padding: 10px;
    margin-top: -10px;
    height: 40px;
    font-family: "Source Sans Pro", sans-serif;
  }

  .title {
    position: absolute;
    display: block;
    color: #494c62;
    font-size: 21px;
    font-weight: 700;
    top: 6px;
  }

  .genre {
    position: absolute;
    display: block;
    bottom: 8px;
    color: #babbc3;
    font-size: 15px;
  }

  .box-rating {
    position: absolute;
    top: -28px;
    right: 0;
    color: #ff0079;
    padding: 3px 8px;
    border: 1.2px solid #ff0079;
    border-radius: 3px;
    background-color: white;
    z-index: 2;
  }
`;
