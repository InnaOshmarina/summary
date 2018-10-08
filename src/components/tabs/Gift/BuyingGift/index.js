import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import InfoSection from "../../../shared/InfoSection";
import Row from "../../../shared/Grids/Row";
import InputFormWrapper from "../../../shared/Wrappers/InputForm";
import Label from "../../../shared/Label";
import Checkbox from "../../../shared/Checkbox";
import InputForm from "../../../shared/InputForm";
import TextInput from "../../../shared/TextInput";
import { componentNames } from "../../index";

class BuyingGift extends PureComponent {
  render() {
    const { props } = this;
    const { onChangeCheckbox } = props;
    return (
      <InfoSection icon={<i className="fas fa-gift" />} title="Покупка подарка">
        <Row>
          <div className="col-md-6">
            <InputFormWrapper>
              <Label label="Что входит в подарок:" offer />

              <Checkbox
                name="certificate"
                value="Сертификат"
                checked={props.certificate}
                onChange={onChangeCheckbox}
              />
              <Checkbox name="flowers" value="Цветы" />
              <Checkbox
                name="cake"
                value="Торт"
                checked={props.cake}
                onChange={onChangeCheckbox}
              />
              <Checkbox name="test" value="test" />
              <Checkbox name="test2" value="test2" disabled />
            </InputFormWrapper>
            <InputFormWrapper>
              <Label label="Приобретение подарка в торговой сети:" offer />

              <Checkbox
                name="gippo"
                value="Гиппо"
                checked={props.gippo}
                onChange={onChangeCheckbox}
              />
              <Checkbox name="belmarket" value="Белмаркет" />
              <Checkbox name="evroopt" value="Евроопт" />
              <Checkbox name="korona" value="Корона" />
              <Checkbox name="rublevkij" value="Рублевский" />
            </InputFormWrapper>
            <InputForm
              title="Vim natum doctus:"
              element={
                <TextInput placeholder="Vim natum doctus" name="VimNatum" />
              }
            />
          </div>
        </Row>
      </InfoSection>
    );
  }
}

BuyingGift.propTypes = {
  onChangeCheckbox: PropTypes.func.isRequired
};

export default BuyingGift;
