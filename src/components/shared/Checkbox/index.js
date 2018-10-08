import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import "./index.css";

const Checkbox = ({ checked, onChange, disabled, ...rest }) => {
  return (
    <label className={cn("checkbox", { disabled: disabled })}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
      <span className="valueLabel">{rest.value}</span>
    </label>
  );
};

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool
};

Checkbox.defaultProps = {
  disabled: false
};

export default Checkbox;
