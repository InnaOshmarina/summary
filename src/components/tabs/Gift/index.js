import React from "react";
import PropTypes from "prop-types";

import GeneralInfo from "./GeneralInfo";
import BuyingGift from "./BuyingGift";
import { componentNames } from "../index";
import ResponsibilityForEvent from "./ResponsibilityForEvent";

class Gift extends React.PureComponent {
  render() {
    const { props } = this;
    const { onChangeRadio, onChangeCheckbox } = props;
    return (
      <div>
        <GeneralInfo
          {...props[componentNames.generalInfo]}
          onChangeRadio={e => onChangeRadio(e, componentNames.generalInfo)}
        />

        <ResponsibilityForEvent
          {...props[componentNames.responsibilityForEvent]}
          onChangeRadio={e =>
            onChangeRadio(e, componentNames.responsibilityForEvent)
          }
        />

        <BuyingGift
          {...props[componentNames.buyingGift]}
          onChangeCheckbox={e => onChangeCheckbox(e, componentNames.buyingGift)}
        />
      </div>
    );
  }
}

Gift.propTypes = {
  onChangeCheckbox: PropTypes.func,
  onChangeRadio: PropTypes.func
};

export default Gift;
