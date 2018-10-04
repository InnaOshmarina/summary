import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import "./index.css";

const Checkbox = ({ name, checked, onChange, ...rest }) => {
  return (
    <span>
      <input
        className={cn("checkbox", { disabled: rest.disabled })}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
        {...rest}
      />
      <span className="valueLabel">{rest.value}</span>
    </span>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  disabled: false
};

export default Checkbox;
