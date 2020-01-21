import React, { Component } from 'react';
import decoration from '../../../assets/Decoration.svg';

class GiveAwayTitle extends Component {
    render() {
        return (
            <div className="titleHeader">
                <h1>Give your unwanted items to </h1>
                <h2>people in need</h2>
                <img src={decoration} className="decoration" alt="decoration" />
                <h2 style={{fontWeight:"300"}}>You are only 4 steps away!</h2>
                <div className="giveAwayTitle">
                    <div><h2>1</h2><p>Choose items</p></div>
                    <div><h2>2</h2><p>Pack them up</p></div>
                    <div><h2>3</h2><p>Choose organization</p></div>
                    <div><h2>4</h2><p>Order a courier</p></div>
                </div>
            </div>
        )
    }
}

export default GiveAwayTitle;