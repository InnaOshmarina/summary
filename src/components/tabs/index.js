import React, { Component } from "react";
import PropTypes from "prop-types";
import Gift from "./Gift/index";
import Jersey from "./Jersey/index";
import Notebook from "./Notebook/index";

import "./index.css";

export const componentNames = {
  generalInfo: "generalInfo",
  responsibilityForEvent: "responsibilityForEvent",
  buyingGift: "buyingGift",
  infoAboutJerseys: "infoAboutJerseys"
};

class Tabs extends Component {
  state = {
    active: 1,
    [componentNames.generalInfo]: {
      amount: "10"
    },
    [componentNames.responsibilityForEvent]: {
      fundraising: "Марченко",
      buyingGifts: "Ошмарина"
    },
    [componentNames.buyingGift]: {
      certificate: true,
      flowers: true,
      cake: true,
      test: true,
      test2: true,
      gippo: true,
      belmarket: true,
      evroopt: true,
      korona: true,
      rublevkij: true
    },
    [componentNames.infoAboutJerseys]: {
      physicalCulture: true,
      specSportingEvents: true,
      rhythm: true,
      maxPrice: "10",
      logotype: "Д/с №348 гр.4"
    }
  };

  clickTab = (event, key) => {
    event.preventDefault();
    this.setState({ active: key });
    // console.log(key);
  };

  onChangeCheckbox = (e, componentName) => {
    this.setState({
      [componentName]: {
        ...this.state[componentName],
        [e.target.name]: !this.state[componentName][e.target.name]
      }
    });
  };

  onChangeRadio = (e, componentName) => {
    this.setState({
      [componentName]: {
        ...this.state[componentName],
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    const data = [
      {
        key: 1,
        title: "Gifts",
        content: (
          <Gift
            {...this.state}
            onChangeCheckbox={this.onChangeCheckbox}
            onChangeRadio={this.onChangeRadio}
          />
        )
      },
      {
        key: 2,
        title: "Jerseys",
        content: (
          <Jersey
            {...this.state}
            onChangeCheckbox={this.onChangeCheckbox}
            onChangeRadio={this.onChangeRadio}
          />
        )
      },
      {
        key: 3,
        title: "Notebooks",
        content: <Notebook />
      }
    ];

    let tabs = data.map((el, index) => {
      let active = "";

      if (el.key === this.state.active) {
        active = "active";
      }
      return (
        <li
          className="nav-item"
          key={el.key}
          onClick={event => this.clickTab(event, el.key)}
        >
          <a className={`nav-link ${active}`} href="#">
            {el.title}
          </a>
        </li>
      );
    });

    let content = data.map((el, index) => {
      let tabContent = "";
      if (this.state.active === el.key) {
        tabContent = el.content;
      } else {
        tabContent = null;
      }
      return <div key={el.key}>{tabContent}</div>;
    });

    return (
      <div className="tabs container">
        <div className="row mt-5">
          <div className="col-md-12 m-auto">
            <ul className="nav nav-pills nav-fill">{tabs}</ul>
            <div className="mt-5">{content}</div>
          </div>
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {};

export default Tabs;
