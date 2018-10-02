import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


const Radio = ({
                   options,
                   name,
                   value,
                   valueLabel,
                   valueItem,
                  }) => {
    const radioOptions = options.map((option, optionIndex) => (
        <span>
            <input
                key={optionIndex}
                className="radio"
                type="radio"
                name={name}
                value={option[valueItem]}
            />
            <span className="valueLabel">
                {option[valueLabel]}
            </span>
        </span>

    ));
    return (
        <span>
            {radioOptions}
        </span>
    );
};

Radio.propTypes = {
    value: PropTypes.node,
    options: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
};

Radio.defaultProps = {
    valueLabel: 'title',
    valueItem:'key'
};

export default Radio;