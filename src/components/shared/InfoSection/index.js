import React from "react";
import PropTypes from "prop-types";

import "./index.css";
import InfoSectionWrapper from "../Wrappers/InfoSection";
import InfoSectionHeader from "./InfoSectionHeader";

const InfoSection = ({ icon, title, children }) => {
  return (
    <InfoSectionWrapper>
      <div className="card">
        <div className="card-body">
          <InfoSectionHeader icon={icon} title={title} />
          {children}
        </div>
      </div>
    </InfoSectionWrapper>
  );
};

InfoSection.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default InfoSection;
