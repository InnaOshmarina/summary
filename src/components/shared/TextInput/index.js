import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const TextInput = ({ name, placeholder, size, type }) => {
  return (
    <span>
      <input
        className="form-control"
        type={type}
        placeholder={placeholder}
        name={name}
        size={size}
      />
    </span>
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.number,
  type: PropTypes.string
};

TextInput.defaultProps = {
  type: "text"
};

export default TextInput;
