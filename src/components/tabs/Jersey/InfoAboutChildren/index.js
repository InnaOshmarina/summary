import React, { Component } from "react";
import PropTypes from "prop-types";

import InfoSection from "../../../shared/InfoSection";
import Row from "../../../shared/Grids/Row";
import InputForm from "../../../shared/InputForm";
import TextInput from "../../../shared/TextInput";
import TextArea from "../../../shared/TextArea";

class InfoAboutChildren extends Component {
  render() {
    return (
      <InfoSection
        icon={<i className="fas fa-child" />}
        title="Информация по детям"
      >
        <Row>
          <div className="col-md-6">
            <InputForm
              title="Количество девочек:"
              element={
                <TextInput placeholder="Кол-во девочек" name="numberGirls" />
              }
            />
            <InputForm
              title="Фамилия, имя, рост ребенка:"
              element={
                <TextArea
                  placeholder="Фамилия, имя, рост ребенка"
                  name="dataChildren"
                  rows="3"
                  cols="10"
                />
              }
            />
          </div>

          <div className="col-md-6">
            <InputForm
              title="Количество мальчиков:"
              element={
                <TextInput placeholder="Кол-во мальчиков" name="numberBoys" />
              }
            />
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

export default InfoAboutChildren;
