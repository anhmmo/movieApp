import styled from "styled-components";

export const StyledLoadMoreBtn = styled.button`
  display: block;
  margin: 20px auto;
  padding: 3px 36px 2px 36px;

  outline: none;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 22px;
  box-shadow: 0px 3px 0px #d40e1a;
  -webkit-box-shadow: 0px 3px 0px #d40e1a;

  background: #ff415b;
  color: #fff;

  font-family: "Balsamiq Sans", cursive;
  font-size: 23px;
  text-transform: capitalize;
  line-height: 40px;

  cursor: pointer;
  transition: all 200ms;

  :active,
  :link,
  :visited {
    box-shadow: none;
    -webkit-box-shadow: none;
    transform: translateY(4%);
  }
  :hover {
    opacity: 0.9;
  }
`;
