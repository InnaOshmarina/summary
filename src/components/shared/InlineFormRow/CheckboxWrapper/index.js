import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const CheckboxWrapper = ({ children }) => (
  <span className="checkboxWrapper">{children}</span>
);

CheckboxWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default CheckboxWrapper;
