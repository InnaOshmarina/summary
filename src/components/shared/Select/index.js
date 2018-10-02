import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './index.css';

const Select = ({
                             name,
                             valueLabel,
                             valueItem,
                             value,
                             options
                         }) => {
    const selectOptions = options.map((option, optionIndex) => (
        <option key={optionIndex} value={option[valueItem]}>
            {option[valueLabel]}
        </option>
    ));
    return (
        <span className="select">
            <select
                className="form-control"
                name={name}
                value={value}
            >
                {selectOptions}
            </select>
        </span>
    );
};
Select.defaultProps = {
    valueLabel: 'title',
    valueItem:'key'
};

Select.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    // onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
};

export default Select;
