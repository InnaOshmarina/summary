import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import InfoSection from "../../../shared/InfoSection";
import Row from "../../../shared/Grids/Row";
import InputFormWrapper from "../../../shared/Wrappers/InputForm";
import Label from "../../../shared/Label";
import Radio from "../../../shared/Radio";

class ResponsibilityForEvent extends PureComponent {
  render() {
    const { props } = this;
    const { onChangeRadio } = props;

    return (
      <InfoSection
        icon={<i className="fas fa-align-justify" />}
        title="Ответственность за мероприятие"
      >
        <Row>
          <div className="col-md-6">
            <InputFormWrapper>
              <Label label="Ответственный за сбор денег:" offer />

              <Radio
                name="fundraising"
                value="Ошмарина"
                onChange={onChangeRadio}
              />
              <Radio
                name="fundraising"
                value="Марченко"
                checked={props.fundraising === "Марченко"}
                onChange={onChangeRadio}
              />
              <Radio
                name="fundraising"
                value="Павлова"
                onChange={onChangeRadio}
              />
            </InputFormWrapper>
          </div>
          <div className="col-md-6">
            <InputFormWrapper>
              <Label label="Ответственный за покупку подарков:" offer />

              <Radio
                name="buyingGifts"
                value="Ошмарина"
                checked={props.buyingGifts === "Ошмарина"}
                onChange={onChangeRadio}
              />
              <Radio
                name="buyingGifts"
                value="Марченко"
                onChange={onChangeRadio}
              />
              <Radio
                name="buyingGifts"
                value="Павлова"
                onChange={onChangeRadio}
              />
            </InputFormWrapper>
          </div>
        </Row>
      </InfoSection>
    );
  }
}

ResponsibilityForEvent.propTypes = {
  onChangeRadio: PropTypes.func.isRequired
};

export default ResponsibilityForEvent;
