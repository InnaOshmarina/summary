import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({
                                label,
                                name,
                                placeholder,
                                value,
                                onChange,
                                rows,
                                cols
                            }) => {
    return (
        <div className="form-group">
            <p>{label}</p>
            <textarea
                placeholder={placeholder}
                name={name}
                // value={value}
                // onChange={onChange}
                rows={rows}
                cols={cols}
            />
        </div>
    );
};

Textarea.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    // value: PropTypes.string.isRequired,
    // onChange: PropTypes.func.isRequired
};

Textarea.defaultProps = {
    rows: '3',
    cols: '30'
};

export default Textarea;