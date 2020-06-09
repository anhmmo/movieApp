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
`;

export const StyledGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 25px;
  position: relative;
`;
