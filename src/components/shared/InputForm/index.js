import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
import InputFormWrapper from "../Wrappers/InputForm";

const InputForm = ({
                    title,
                    element
                  }) => {
    return (
        <InputFormWrapper>
            <p className="inputForm-title">{title}</p>
            {element}
        </InputFormWrapper>
    );
};

InputForm.propTypes = {
    title: PropTypes.string.isRequired,
    element: PropTypes.node.isRequired,

};

export default InputForm;