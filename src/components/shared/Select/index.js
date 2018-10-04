import React from "react";
import PropTypes from "prop-types";

import "./index.css";

const Select = ({ valueLabel, valueItem, options, selected, ...rest }) => {
  const selectOptions = options.map((option, optionIndex) => (
    <option
      key={option.key}
      value={option[valueItem]}
      selected={option[selected]}
    >
      {option[valueLabel]}
    </option>
  ));
  return (
    <span className="select">
      <select className="form-control" {...rest}>
        {selectOptions}
      </select>
    </span>
  );
};
Select.defaultProps = {
  valueLabel: "title",
  valueItem: "key",
  selected: "chosen"
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  selected: PropTypes.string
};

export default Select;
