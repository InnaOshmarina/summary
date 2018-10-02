import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Gift from "./Gift/index";
import Jersey from "./Jersey/index";
import Notebook from "./Notebook/index";

const styles = {
    fontSize: '1.5rem',
};

class Tabs extends Component {

    state = {
        active: 1
    };

    clickTab = (event, key) => {
        event.preventDefault();
        this.setState({active: key});
        // console.log(key);
    };

    render() {

        const data = [
            {
                key: 1,
                title: 'Gifts',
                content: (<Gift />)
            },
            {
                key: 2,
                title: 'Jerseys',
                content: (<Jersey />)
            },
            {
                key: 3,
                title: 'Notebooks',
                content: (<Notebook />)
            }
        ];

        let tabs = (
            data.map((el, index) => {
                let active = '';

                if(el.key === this.state.active) {
                    active = 'active';
                }
                return (
                    <li className="nav-item" key={index}
                        onClick={(event) => this.clickTab(event, el.key)}>
                        <a className={`nav-link ${active}`} href="#">{el.title}</a>
                    </li>
                )
            })
        );

        let content = (
            data.map((el, index) => {

                let tabContent = '';
                if(this.state.active === el.key) {
                    tabContent = el.content
                } else {
                    tabContent = null
                }
                return (
                    <p key={index}>{tabContent}</p>
                )
            })
        );

        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-12 m-auto">
                        <ul className="nav nav-pills nav-fill" style={styles}>
                            {tabs}
                        </ul>
                        <div className="mt-5">{content}</div>
                    </div>
                </div>
            </div>
        );
    }
}

Tabs.propTypes = {

};

export default Tabs;
