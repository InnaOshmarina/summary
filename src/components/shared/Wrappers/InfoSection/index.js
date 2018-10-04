import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const InfoSectionWrapper = ({ children }) => (
  <div className="infoSectionWrapper">{children}</div>
);

InfoSectionWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default InfoSectionWrapper;
