import styled from "styled-components";

export const StyledGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  h1 {
    font-family: "Abel", sans-serif;
    font-size: 42px;

    @media screen and (max-width: 768px) {
      font-size: 25px;
    }
  }

  .film-option-box {
    width: 50vw;
    margin: 40px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .option-container {
    display: flex;
    width: 100%;
  }
  .description-title {
    z-index: 3;

    padding: 8px;
    width: 85%;
    border-top-right-radius: 38px;
    border-bottom-left-radius: 38px;
    box-shadow: 0px 3px 3px tomato;
    -webkit-box-shadow: 0px 3px 3px tomato;

    color: #494c62;
    background-color: white;

    font-family: "Balsamiq Sans", cursive;
    letter-spacing: 2px;
    text-align: center;
    text-shadow: 1px 1px 2px #000000;
    font-weight: 800;
    font-size: 30px;
  }

  .description-icon {
    z-index: 3;

    width: 3.5%;
    padding: 15px;
    box-shadow: 0px 3px 3px #f26522;
    -webkit-box-shadow: 0px 3px 3px #f26522;
    border-bottom-right-radius: 30px;
    border-top-left-radius: 30px;

    background-color: tomato;
  }

  .description-icon i {
    text-align: center;
    color: white;
    font-size: 22px;
  }
  .filter-menu {
    display: flex;
    width: 80%;
    padding: 13px 0;
  }
  .filter-menu > span {
    padding: 5px 8px;
    border-bottom: 2px solid tomato;
    margin-left: 5%;

    font-family: "Balsamiq Sans", cursive;
    font-size: 20px;

    color: #494c62;

    cursor: pointer;
    transition: all 0.5s;
  }

  .filter-menu > span:hover {
    background-color: tomato;
    color: white;
    transform: translateY(-2px);
    border-radius: 5px;
  }

  @media screen and (max-width: 960px) {
    .film-option-box {
      width: 90vw;
    }
  }
  @media screen and (max-width: 600px) {
    .filter-menu {
      width: 100%;
    }

    .filter-menu > span:not(:first-child) {
      margin-left: 4%;
    }
  }
  @media screen and (max-width: 440px) {
    .filter-menu {
      width: 90%;
      margin-left: 5%;
    }
    .filter-menu > span {
      font-size: 18px;
      padding: 5px 4px;
    }
    .filter-menu > span:not(:first-child) {
      margin-left: 2%;
    }
  }

  @media screen and (max-width: 360px) {
    .filter-menu {
      width: 100%;
    }
  }
`;

export const StyledGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 25px;
  position: relative;
`;
