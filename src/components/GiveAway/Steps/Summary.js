import React, { Component } from 'react';

const buttonsMargin = {
    marginTop: "0",
    padding: "0"
}

class Summary extends Component {

    render() {

        const { bags, stepOne, location, whoToHelpList, optional, street, city, postcode, mobile, date, time, message } = this.props;

        let renderBags;

        if (bags === 1) { renderBags = 'worek'; } else if (bags > 1 && bags < 5) { renderBags = 'worki' } else { renderBags = 'worków' }

        return (
            <div className="singleStep container">
                <h2>Podsumowanie Twojej darowizny</h2>
                <div className="summaryMain">
                    <div className="summaryTop">
                        <h4>Oddajesz:</h4>
                        <div><div className="shirtIcon"></div><p>{bags} {renderBags}, {stepOne}, {whoToHelpList.map((e, i) => { return <span key={i}>{e}, </span> })} </p></div>
                        <div><div className="circleIcon"></div><p>{optional ? 'dla: ' + optional : 'dla lokalizacji: ' + location}</p></div>
                    </div>
                    <div className="summaryBottom">
                        <div className="summaryBottomLeft">
                            <h4>Adres odbioru:</h4>
                            <div>
                                <p>Ulica</p>
                                <p>{street}</p>
                            </div>
                            <div>
                                <p>Miasto</p>
                                <p>{city}</p>
                            </div>
                            <div>
                                <p>Kod pocztowy</p>
                                <p>{postcode}</p>
                            </div>
                            <div>
                                <p>Numer telefonu</p>
                                <p>{mobile}</p>
                            </div>
                        </div>
                        <div className="summaryBottomRight">
                            <h4>Termin odbioru:</h4>
                            <div>
                                <p>Data</p>
                                <p>{date}</p>
                            </div>
                            <div>
                                <p>Godzina</p>
                                <p>{time}</p>
                            </div>
                            <div>
                                <p>Uwagi<br /> dla kuriera</p>
                                <p>{message}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={buttonsMargin} className="buttonsBottom"><button onClick={this.props.prevStep}>Wstecz</button><button id="submitButton" onClick={this.props.submit}>Potwierdzam</button></div>
            </div>
        )
    }
}

export default Summary;