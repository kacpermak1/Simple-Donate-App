import React, { Component } from 'react';
import data from './db.json';

const clickedStyle = {
    border: "1px solid #3C3C3C"
}

const borderNone = {
    border: "none"
}

class WhoWeHelp extends Component {

    state = {
        clickedElement: 1,
        dataToLoad: data.organisations[0],
        dataPerPage: 3,
        currentPage: 1,
    }

    handleClickOne = (e) => {
        this.setState({ clickedElement: 1, currentPage: 1, dataToLoad: data.organisations[0] })
    }
    handleClickTwo = (e) => {
        this.setState({ clickedElement: 2, currentPage: 1, dataToLoad: data.organisations[1] })
    }
    handleClickThree = (e) => {
        this.setState({ clickedElement: 3, currentPage: 1, dataToLoad: data.organisations[2] })
    }
    pageChangeHandle = (event, i) => {
        this.setState({ currentPage: i })
    }

    render() {

        const { dataToLoad, currentPage, clickedElement } = this.state;
        const { itemsPerPage } = this.props;
        const indexOfLast = currentPage * itemsPerPage;
        const indexOfFirst = indexOfLast - itemsPerPage;
        const currentData = dataToLoad.items.slice(indexOfFirst, indexOfLast);
        const elements = dataToLoad.items;
        const elementsOnPage = currentData.map((e, i) => { return <div className="eachOrganisation" key={i}><div><h2>{e.name}</h2><h2>{clickedElement === 1 ? "Goal and mission:" : ""} {e.mission}</h2></div><h2 className="donations">{e.donations}</h2></div> })

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(elements.length / itemsPerPage); i++) {
            const elem = <li key={i} style={currentPage === i ? clickedStyle : borderNone} onClick={e => this.pageChangeHandle(e, i)}>{i}</li>
            pageNumbers.push(elem);
        }
        return (
            <section className="whoWeHelp container" id="whoWeHelp">
                <nav>
                    <h2>Who We Help</h2>
                    <div className="decoration"></div>
                    <ul>
                        <li style={clickedElement === 1 ? clickedStyle : borderNone} onClick={this.handleClickOne}>Charitable organizations</li>
                        <li style={clickedElement === 2 ? clickedStyle : borderNone} onClick={this.handleClickTwo}>Non-governmental<br/> organizations</li>
                        <li style={clickedElement === 3 ? clickedStyle : borderNone} onClick={this.handleClickThree}>Local<br /> collections</li>
                    </ul>
                </nav>
                <p>{dataToLoad.description}</p>
                {elementsOnPage}
                <ul className="pageNumberList">{pageNumbers.length === 1 ? "" : pageNumbers}</ul>
            </section>
        )
    }
}

export default WhoWeHelp;