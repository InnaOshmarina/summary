import React, {Component} from 'react';
import PropTypes from 'prop-types';

import InfoSection from "../../shared/InfoSection/index";
import Select from "../../shared/Select/index";
import InputForm from "../../shared/InputForm/index";
import TextInput from "../../shared/TextInput/index";
import Checkbox from "../../shared/Checkbox/index";
import Label from "../../shared/Label/index";
import Radio from "../../shared/Radio/index";
import {docsDay, docsFormat, docsGift, docsNovumRegione} from "../../../api/dataGifts";
import Row from "../../shared/Grids/Row";

class Gift extends Component {
    render() {

        return (
            <div>
                <InfoSection
                    icon={<i className="fas fa-align-justify" />}
                    title="Gift lorem ipsum"
                >
                    <Row>
                        <div className="col-md-4">
                            <InputForm title="Количество детей:"
                                       element={<TextInput placeholder="Кол-во детей" name="numberChildren" size="10" />}
                            />
                            <InputForm title="Has eu dicat novum regione:"
                                       element={<Select name="novumRegione" options={docsNovumRegione} />}
                            />
                        </div>

                        <div className="col-md-8">

                            <InputForm title="В какой из дней поздравлять:"
                                       element={<Radio options={docsDay} name='day' />}
                            />
                        </div>
                    </Row>

                </InfoSection>

                <InfoSection
                    icon={<i className="fas fa-paperclip" />}
                    title="Timeam audire scaevola ei"
                >
                    <InputForm title="Выберите формат тетради:"
                               element={<Radio options={docsFormat} name='format' />}
                    />
                </InfoSection>

                <InfoSection
                    icon={<i className="fas fa-address-card" />}
                    title="Pseudo-Latin text"
                >
                        <div className="col-md-6">
                            <InputForm title="Vim natum doctus:"
                                       element={<TextInput placeholder="Vim natum doctus" name="test" size="10" />}
                            />
                            <Label label="Какие издания Вам нужны?" offer />

                            <Checkbox name="part"/>
                            <Label label="1"/>
                            <Checkbox name="part"/>
                            <Label label="2"/>
                            <Checkbox name="part"/>
                            <Label label="3"/>
                            <Checkbox name="part" disabled />
                            <Label label="4" />
                            <InputForm title="Выберите, с каким праздником будете поздравлять воспитателей:"
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
