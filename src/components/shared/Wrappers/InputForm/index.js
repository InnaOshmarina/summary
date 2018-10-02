import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const InputFormWrapper = ({ children }) => (
    <div className="inputFormWrapper">{children}</div>
);

InputFormWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default InputFormWrapper;