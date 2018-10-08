import React, { Component } from "react";
import PropTypes from "prop-types";
import { docsGift } from "../../../../mock/dataGifts";
import InfoSection from "../../../shared/InfoSection";
import Row from "../../../shared/Grids/Row";
import InputForm from "../../../shared/InputForm";
import TextInput from "../../../shared/TextInput";
import Select from "../../../shared/Select";
import InputFormWrapper from "../../../shared/Wrappers/InputForm";
import Label from "../../../shared/Label";
import Radio from "../../../shared/Radio";
import TextArea from "../../../shared/TextArea";

class GeneralInfo extends Component {
  render() {
    const { props } = this;
    const { onChangeRadio } = props;
    return (
      <InfoSection
        icon={<i className="fas fa-paperclip" />}
        title="Общая информация"
      >
        <Row>
          <div className="col-md-4">
            <InputForm
              title="Количество детей в группе:"
              element={
                <TextInput placeholder="Кол-во детей" name="numberChildren" />
              }
            />
            <InputForm
              title="Количество поздравляемых человек:"
              element={
                <TextInput
                  placeholder="Кол-во воспитателей"
                  name="numberEducator"
                />
              }
            />
            <InputForm
              title="Выберите, с каким праздником будете поздравлять воспитателей:"
              element={<Select name="gift" options={docsGift} />}
            />
          </div>

          <div className="col-md-8">
            <InputForm
              title="Дата поздравления:"
              element={
                <TextInput
                  placeholder="Введите дату поздравления"
                  type="date"
                  name="congratulationDate"
                />
              }
            />
            <InputFormWrapper>
              <Label
                label="Сумма денежных средств от каждого ребенка(в рублях):"
                offer
              />
              <Radio
                name="amount"
                value="10"
                checked={props.amount === "10"}
                onChange={onChangeRadio}
              />
              <Radio
                name="amount"
                value="15"
                onChange={onChangeRadio}
                disabled
              />
              <Radio name="amount" value="20" onChange={onChangeRadio} />
              <Radio name="amount" value="25" onChange={onChangeRadio} />
              <Radio name="amount" value="30" onChange={onChangeRadio} />
            </InputFormWrapper>
            <InputForm
              title="Дополнительная информация:"
              element={
                <TextArea
                  placeholder="Дополнительная информация"
                  name="additionalInfo"
                  rows="3"
                  cols="10"
                />
              }
            />
          </div>
        </Row>
      </InfoSection>
    );
  }
}

GeneralInfo.propTypes = {
  onChangeRadio: PropTypes.func.isRequired
};

export default GeneralInfo;
