import React from "react";
import PropTypes from "prop-types";

import { componentNames } from "../index";
import InfoAboutChildren from "./InfoAboutChildren";
import InfoAboutJerseys from "./InfoAboutJerseys";

class Jersey extends React.PureComponent {
  render() {
    const { props } = this;
    const { onChangeRadio, onChangeCheckbox } = props;
    return (
      <div>
        <InfoAboutChildren />

        <InfoAboutJerseys
          {...props[componentNames.infoAboutJerseys]}
          onChangeRadio={e => onChangeRadio(e, componentNames.infoAboutJerseys)}
          onChangeCheckbox={e =>
            onChangeCheckbox(e, componentNames.infoAboutJerseys)
          }
        />
      </div>
    );
  }
}

Jersey.propTypes = {
  onChangeCheckbox: PropTypes.func,
  onChangeRadio: PropTypes.func
};

export default Jersey;
