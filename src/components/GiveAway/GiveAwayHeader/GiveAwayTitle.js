import React, { Component } from 'react';
import decoration from '../../../assets/Decoration.svg';

class GiveAwayTitle extends Component {
    render() {
        return (
            <div className="titleHeader">
                <h1>Oddaj rzeczy, których już nie chcesz</h1>
                <h2>Potrzebującym</h2>
                <img src={decoration} className="decoration" alt="decoration" />
                <h2 style={{fontWeight:"300"}}>Wystarczą 4 proste kroki:</h2>
                <div className="giveAwayTitle">
                    <div><h2>1</h2><p>Wybierz rzeczy</p></div>
                    <div><h2>2</h2><p>Spakuj je w worki</p></div>
                    <div><h2>3</h2><p>Wybierz fundację</p></div>
                    <div><h2>4</h2><p>Zamów kuriera</p></div>
                </div>
            </div>
        )
    }
}

export default GiveAwayTitle;