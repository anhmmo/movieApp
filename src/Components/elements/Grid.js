import React from "react";
import PropTypes from "prop-types";

import { StyledGrid, StyledGridContent } from "../styles/StyledGrid";

const Grid = ({ header, children }) => (
  <StyledGrid>
    <div className="film-option-box">
      <div className="option-container">
        <div className="description-title">{header}</div>
        <div className="description-icon">
          <i className="fab fa-hotjar"></i>
        </div>
      </div>
      <div className="filter-menu">
        <span>name</span>
        <span>year</span>
        <span>genre</span>
        <span>actor</span>
        <span>cast</span>
      </div>
    </div>
    {/* <h1>{header}</h1>*/}
    <StyledGridContent>{children}</StyledGridContent>
  </StyledGrid>
);

Grid.propTypes = {
  header: PropTypes.string,
};

export default Grid;
