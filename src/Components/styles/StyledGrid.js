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
    margin: 50px auto;
    position: relative;
    height: 115px;
  }
  .description-title {
    padding: 14px;
    width: 80%;
    margin-left: 4%;
    border-top-right-radius: 38px;
    border-bottom-left-radius: 38px;
    position: absolute;
    font-size: 28px;
    background-color: white;
    box-shadow: 2px 5px 3px tomato;
    -webkit-box-shadow: 2px 5px 3px tomato;
    color: black;
    text-transform: uppercase;
    letter-spacing: 2px;
    z-index: 3;
    text-align: center;
    text-shadow: 1px 1px 4px #000000;
  }

  .description-icon {
    position: absolute;
    width: 3.5%;
    background-color: #ff415b;
    box-shadow: 2px 5px 3px #d40e1a;
    -webkit-box-shadow: 2px 5px 3px #d40e1a;
    right: 25px;
    padding: 18.5px;
    border-bottom-right-radius: 30px;
    border-top-left-radius: 30px;
  }

  .description-icon i {
    text-align: center;
    color: white;
    font-size: 24px;
  }
  .filter-menu {
    display: flex;
    position: absolute;
    bottom: -5px;
    background-color: white;
    width: 70%;
    margin-left: 10%;
    padding: 13px;
    border-bottom-left-radius: 30px;
  }
  .filter-menu > div {
    margin-left: 20px;
    width: 20%;
    background-color: #ff415b;
    box-shadow: 2px 5px 3px #d40e1a;
    -webkit-box-shadow: 2px 5px 3px #d40e1a;
    text-align: center;
    color: white;
    padding: 8px;
  }
`;

export const StyledGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 25px;
  position: relative;
`;
