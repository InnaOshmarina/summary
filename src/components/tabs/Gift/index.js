import React from "react";
import PropTypes from "prop-types";

import InfoSection from "../../shared/InfoSection/index";
import Select from "../../shared/Select/index";
import InputForm from "../../shared/InputForm/index";
import TextInput from "../../shared/TextInput/index";
import Checkbox from "../../shared/Checkbox/index";
import Label from "../../shared/Label/index";
import Radio from "../../shared/Radio/index";
import { docsGift } from "../../../mock/dataGifts";
import Row from "../../shared/Grids/Row";

class Gift extends React.PureComponent {
  render() {
    return (
      <div>
        <InfoSection
          icon={<i className="fas fa-align-justify" />}
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
                title="Выберите, с каким праздником будете поздравлять воспитателей:"
                element={<Select name="gift" options={docsGift} />}
              />
            </div>

            <div className="col-md-8">
              <Label
                label="Сумма денежных средств от каждого ребенка(в рублях):"
                offer
              />

              <Radio
                name="amount"
                value="10"
                checked={this.props.generalInformation.amount === "10"}
                onChange={this.props.onChangeRadio}
              />
              <Radio
                name="amount"
                value="15"
                onChange={this.props.onChangeRadio}
              />
              <Radio
                name="amount"
                value="20"
                onChange={this.props.onChangeRadio}
              />
              <Radio
                name="amount"
                value="25"
                onChange={this.props.onChangeRadio}
              />
              <Radio
                name="amount"
                value="30"
                onChange={this.props.onChangeRadio}
              />
            </div>
          </Row>
        </InfoSection>

        <InfoSection
          icon={<i className="fas fa-paperclip" />}
          title="Ответственность за мероприятие"
        >
          <Label label="Кто из родительского комитета ответственный:" offer />

          <Radio
            name="responsibility"
            value="Ошмарина"
            onChange={this.props.onChangeRadio}
          />
          <Radio
            name="responsibility"
            value="Марченко"
            checked={
              this.props.responsibilityForEvent.responsibility === "Марченко"
            }
            onChange={this.props.onChangeRadio}
          />
          <Radio
            name="responsibility"
            value="Павлова"
            onChange={this.props.onChangeRadio}
          />
        </InfoSection>

        <InfoSection
          icon={<i className="fas fa-address-card" />}
          title="Подарок"
        >
          <div className="col-md-6">
            <Label label="Что входит в подарок:" offer />

            <Checkbox
              name="certificate"
              value="Сертификат"
              checked={this.props.gift.certificate}
              onChange={this.props.onChangeCheckbox}
            />
            <Checkbox name="flowers" value="Цветы" />
            <Checkbox
              name="cake"
              value="Торт"
              checked={this.props.gift.cake}
              onChange={this.props.onChangeCheckbox}
            />
            <Checkbox name="test" value="test" />
            <Checkbox name="test2" value="test2" disabled />
            <InputForm
              title="Vim natum doctus:"
              element={<TextInput placeholder="Vim natum doctus" name="test" />}
            />
            <Label label="Приобретение подарка в торговой сети:" offer />

            <Checkbox
              name="gippo"
              value="Гиппо"
              checked={this.props.gift.gippo}
              onChange={this.props.onChangeCheckbox}
            />
            <Checkbox name="belmarket" value="Белмаркет" />
            <Checkbox name="evroopt" value="Евроопт" />
            <Checkbox name="korona" value="Корона" />
            <Checkbox name="rublevkij" value="Рублевский" />
            <InputForm
              title="Vim natum doctus:"
              element={<TextInput placeholder="Vim natum doctus" name="test" />}
            />
          </div>
        </InfoSection>
      </div>
    );
  }
}

Gift.propTypes = {
  onChangeCheckbox: PropTypes.func,
  onChangeRadio: PropTypes.func
};

export default Gift;
