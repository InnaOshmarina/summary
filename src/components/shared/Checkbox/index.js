import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './index.css';

const Checkbox = ({
                      name,
                      disabled
                  }) => {
    return (
        <span>
            <input
                className={ cn('checkbox', {'disabled': disabled}) }
                type="checkbox"
                name={name}
                disabled={disabled}
            />
        </span>
    );
};

Checkbox.propTypes = {
    // label: PropTypes.string,
    // labelText: PropTypes.string,
    // id: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string
};

Checkbox.defaultProps = {
    // label: '',
    // labelText: '',
    // id: '',
    disabled: false
};

export default Checkbox;