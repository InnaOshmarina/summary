import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './index.css';

const Label = ({
  label,
  offer
}) => (
  <span className={ cn('label', {'offered': offer}) }>
      {label}
  </span>
);

Label.propTypes = {
  label: PropTypes.string.isRequired,
    offer: PropTypes.bool,
};

Label.defaultProps = {
    offer: false
};

export default Label;
