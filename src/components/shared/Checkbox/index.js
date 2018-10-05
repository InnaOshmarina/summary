import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import "./index.css";

const Checkbox = ({ checked, onChange, ...rest }) => {
  return (
    <span>
      <input
        className={cn("checkbox", { disabled: rest.disabled })}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...rest}
      />
      <span className="valueLabel">{rest.value}</span>
    </span>
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
