import React, { Component } from "react";
import PropTypes from "prop-types";

import InfoSection from "../../shared/InfoSection/index";
import Select from "../../shared/Select/index";
import InputForm from "../../shared/InputForm/index";
import TextInput from "../../shared/TextInput/index";
import Checkbox from "../../shared/Checkbox/index";
import Label from "../../shared/Label/index";
import Radio from "../../shared/Radio/index";
import { docsGift, docsNovumRegione } from "../../../mock/dataGifts";
import Row from "../../shared/Grids/Row";

class Gift extends Component {
  state = {
    UAE: true,
    Britain: true,
    France: true,
    Singapore: true,
    Belarus: true,
    usedFormat: "test1",
    usedNominal: "30"
  };

  onChange = e =>
    this.setState({ [e.target.name]: !this.state[e.target.name] });

  onChangeFormat = e => this.setState({ usedFormat: e.target.value });
  onChangeNominal = e => this.setState({ usedNominal: e.target.value });

  render() {
    return (
      <div>
        <InfoSection
          icon={<i className="fas fa-align-justify" />}
          title="Gift lorem ipsum"
        >
          <Row>
            <div className="col-md-4">
              <InputForm
                title="Количество детей:"
                element={
                  <TextInput placeholder="Кол-во детей" name="numberChildren" />
                }
              />
              <InputForm
                title="Has eu dicat novum regione:"
                element={
                  <Select name="novumRegione" options={docsNovumRegione} />
                }
              />
            </div>

            <div className="col-md-8">
              <Label label="Номинал сертификата(в рублях):" offer />

              <Radio
                name="nominal"
                value="15"
                onChange={this.onChangeNominal}
              />
              <Radio
                name="nominal"
                value="20"
                onChange={this.onChangeNominal}
              />
              <Radio
                name="nominal"
                value="30"
                checked={this.state.usedNominal === "30"}
                onChange={this.onChangeNominal}
              />
              <Radio
                name="nominal"
                value="40"
                onChange={this.onChangeNominal}
              />
              <Radio
                name="nominal"
                value="50"
                onChange={this.onChangeNominal}
              />
            </div>
          </Row>
        </InfoSection>

        <InfoSection
          icon={<i className="fas fa-paperclip" />}
          title="Timeam audire scaevola ei"
        >
          <Label label="Выберите формат тетради" offer />

          <Radio name="format" value="A4" onChange={this.onChangeFormat} />
          <Radio name="format" value="A5" onChange={this.onChangeFormat} />
          <Radio
            name="format"
            value="test1"
            checked={this.state.usedFormat === "test1"}
            onChange={this.onChangeFormat}
          />
          <Radio name="format" value="test2" onChange={this.onChangeFormat} />
          <Radio
            name="format"
            value="test3"
            disabled
            onChange={this.onChangeFormat}
          />
        </InfoSection>

        <InfoSection
          icon={<i className="fas fa-address-card" />}
          title="Pseudo-Latin text"
        >
          <div className="col-md-6">
            <InputForm
              title="Vim natum doctus:"
              element={<TextInput placeholder="Vim natum doctus" name="test" />}
            />
            <Label label="Какие страны Вы посещали?" offer />

            <Checkbox
              name="UAE"
              value="ОАЭ"
              checked={this.state.UAE}
              onChange={this.onChange}
            />
            <Checkbox name="Britain" value="Великобритания" />
            <Checkbox
              name="France"
              value="Франция"
              checked={this.state.France}
              onChange={this.onChange}
            />
            <Checkbox name="Singapore" value="Сингапур" />
            <Checkbox name="Belarus" value="Беларусь" disabled />
            <InputForm
              title="Выберите, с каким праздником будете поздравлять воспитателей:"
              element={<Select name="gift" options={docsGift} />}
            />
          </div>
        </InfoSection>
      </div>
    );
  }
}

Gift.propTypes = {};

export default Gift;
