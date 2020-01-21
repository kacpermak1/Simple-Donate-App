import React, { Component } from 'react';

const buttonsMargin = {
    marginTop: "0",
    padding: "0"
}

class Summary extends Component {

    render() {

        const { bags, stepOne, location, whoToHelpList, optional, street, city, postcode, mobile, date, time, message } = this.props;

        let renderBags;

        if (bags === 1) { renderBags = 'bag'; } else if (bags > 1) { renderBags = 'bags' }

        return (
            <div className="singleStep container">
                <h2>Summary of your donation</h2>
                <div className="summaryMain">
                    <div className="summaryTop">
                        <h4>You are giving:</h4>
                        <div><div className="shirtIcon"></div><p>{bags} {renderBags},of {stepOne}, to: {whoToHelpList.map((e, i) => { return <span key={i}>{e}, </span> })} </p></div>
                        <div><div className="circleIcon"></div><p>{optional ? 'for: ' + optional : 'for location: ' + location}</p></div>
                    </div>
                    <div className="summaryBottom">
                        <div className="summaryBottomLeft">
                            <h4>Pickup Address:</h4>
                            <div>
                                <p>Street</p>
                                <p>{street}</p>
                            </div>
                            <div>
                                <p>City</p>
                                <p>{city}</p>
                            </div>
                            <div>
                                <p>Postcode</p>
                                <p>{postcode}</p>
                            </div>
                            <div>
                                <p>Mobile</p>
                                <p>{mobile}</p>
                            </div>
                        </div>
                        <div className="summaryBottomRight">
                            <h4>Date and time:</h4>
                            <div>
                                <p>Date</p>
                                <p>{date}</p>
                            </div>
                            <div>
                                <p>Time</p>
                                <p>{time}</p>
                            </div>
                            <div>
                                <p>Note<br /> for courier</p>
                                <p>{message}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={buttonsMargin} className="buttonsBottom"><button onClick={this.props.prevStep}>Back</button><button id="submitButton" onClick={this.props.submit}>Submit</button></div>
            </div>
        )
    }
}

export default Summary;