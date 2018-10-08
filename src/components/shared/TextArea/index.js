import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ ...rest }) => {
  return <textarea className="textArea form-control" {...rest} />;
};

TextArea.propTypes = {};

export default TextArea;
