import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const InputWrapper = ({ children }) => (
    <div className="inputWrapper">{children}</div>
);

InputWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default InputWrapper;