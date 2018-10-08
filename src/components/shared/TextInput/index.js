import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const TextInput = ({ type, ...rest }) => {
  return <input className="textInput form-control" type={type} {...rest} />;
};

TextInput.propTypes = {
  type: PropTypes.string
};

TextInput.defaultProps = {
  type: "text"
};

export default TextInput;
