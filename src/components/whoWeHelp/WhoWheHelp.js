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
        currentPage: 1
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

        const { dataToLoad, dataPerPage, currentPage, clickedElement } = this.state;
        const indexOfLast = currentPage * dataPerPage;
        const indexOfFirst = indexOfLast - dataPerPage;
        const currentData = dataToLoad.items.slice(indexOfFirst, indexOfLast);
        const elements = dataToLoad.items;
        const elementsOnPage = currentData.map((e, i) => { return <div className="eachOrganisation" key={i}><div><h2>{e.name}</h2><h2>{clickedElement === 1 ? "Cel i misja:" : ""} {e.mission}</h2></div><h2 className="donations">{e.donations}</h2></div> })

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(elements.length / dataPerPage); i++) {
            const elem = <li key={i} style={currentPage === i ? clickedStyle : borderNone} onClick={e => this.pageChangeHandle(e, i)}>{i}</li>
            pageNumbers.push(elem);
        }
        return (
            <section className="whoWeHelp container" id="whoWeHelp">
                <nav>
                    <h2>Komu pomagamy?</h2>
                    <div className="decoration"></div>
                    <ul>
                        <li style={clickedElement === 1 ? clickedStyle : borderNone} onClick={this.handleClickOne}>Fundacjom</li>
                        <li style={clickedElement === 2 ? clickedStyle : borderNone} onClick={this.handleClickTwo}>Organizacjom<br /> pozarządowym</li>
                        <li style={clickedElement === 3 ? clickedStyle : borderNone} onClick={this.handleClickThree}>Lokalnym<br /> zbiórkom</li>
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