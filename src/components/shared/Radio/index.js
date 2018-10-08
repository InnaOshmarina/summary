import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import cn from "classnames";

const Radio = ({ onChange, checked, disabled, ...rest }) => {
  return (
    <label className={cn("radio", { disabled: disabled })}>
      <input
        type="radio"
        onChange={onChange}
        checked={checked}
        disabled={disabled}
        {...rest}
      />
      <span className="valueLabel">{rest.value}</span>
    </label>
  );
};

Radio.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.node
};

Radio.defaultProps = {
  disabled: false
};

export default Radio;
