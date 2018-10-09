import React, { Component } from "react";
import PropTypes from "prop-types";

import InfoSection from "../../../shared/InfoSection";
import Row from "../../../shared/Grids/Row";
import InputForm from "../../../shared/InputForm";
import Select from "../../../shared/Select";
import { docsBrand, docsColor, docsLorem } from "../../../../mock/dataJerseys";
import InputFormWrapper from "../../../shared/Wrappers/InputForm";
import Label from "../../../shared/Label";
import Radio from "../../../shared/Radio";
import Checkbox from "../../../shared/Checkbox";
import BuyingGift from "../../Gift/BuyingGift";

class InfoAboutJerseys extends Component {
  render() {
    const { props } = this;
    const { onChangeRadio, onChangeCheckbox } = props;
    return (
      <InfoSection
        icon={<i className="fas fa-tshirt" />}
        title="Информация по футболкам"
      >
        <Row>
          <div className="col-md-7">
            <InputFormWrapper>
              <Label label="Назначение футболки:" offer />

              <Checkbox name="physicalCulture" value="Физкультура" />
              <Checkbox
                name="specSportingEvents"
                value="Спец. спортивные мероприятия"
                checked={props.specSportingEvents}
                onChange={onChangeCheckbox}
              />
              <Checkbox name="rhythm" value="Ритмика" />
            </InputFormWrapper>
            <InputFormWrapper>
              <Label label="Логотип на футболке:" offer />
              <Radio
                name="logotype"
                value="Беларусь"
                onChange={onChangeRadio}
                disabled
              />
              <Radio
                name="logotype"
                value="Д/с №348 гр.4"
                checked={props.logotype === "Д/с №348 гр.4"}
                onChange={onChangeRadio}
              />
              <Radio name="logotype" value="Test" onChange={onChangeRadio} />
              <Radio name="logotype" value="Test2" onChange={onChangeRadio} />
            </InputFormWrapper>
          </div>
          <div className="col-md-5">
            <InputFormWrapper>
              <Label label="Максимальная цена за футболку(в рублях):" offer />
              <Radio
                name="maxPrice"
                value="10"
                checked={props.maxPrice === "10"}
                onChange={onChangeRadio}
              />
              <Radio name="maxPrice" value="20" onChange={onChangeRadio} />
              <Radio name="maxPrice" value="30" onChange={onChangeRadio} />
              <Radio name="maxPrice" value="40" onChange={onChangeRadio} />
              <Radio name="maxPrice" value="65" onChange={onChangeRadio} />
            </InputFormWrapper>
          </div>
        </Row>
        <Row>
          <div className="col-md-4">
            <InputForm
              title="Выберите цвет футболки:"
              element={<Select name="jerseyColor" options={docsColor} />}
            />
          </div>

          <div className="col-md-4">
            <InputForm
              title="Выберите бренд футболки:"
              element={<Select name="jerseyBrand" options={docsBrand} />}
            />
          </div>

          <div className="col-md-4">
            <InputForm
              title="Lorem ipsum dolor sit amet:"
              element={<Select name="jerseyLorem" options={docsLorem} />}
            />
          </div>
        </Row>
      </InfoSection>
    );
  }
}

InfoAboutJerseys.propTypes = {
  onChangeCheckbox: PropTypes.func.isRequired,
  onChangeRadio: PropTypes.func.isRequired
};

export default InfoAboutJerseys;
