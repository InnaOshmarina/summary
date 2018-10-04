import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const InfoSectionHeader = ({ icon, title }) => {
  return (
    <h4 className="infoSectionHeader">
      <span className="infoSectionIcon">{icon}</span>
      {title}
    </h4>
  );
};

InfoSectionHeader.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default InfoSectionHeader;
