import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import cn from "classnames";

const Radio = ({ onChange, ...rest }) => {
  return (
    <span>
      <input
        className={cn("checkbox", { disabled: rest.disabled })}
        type="radio"
        onChange={onChange}
        checked={rest.checked}
        {...rest}
      />
      <span className="valueLabel">{rest.value}</span>
    </span>
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
