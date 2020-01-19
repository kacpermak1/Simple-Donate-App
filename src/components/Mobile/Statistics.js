import React, { Component } from 'react';

class Statistics extends Component {

    render() {
        return (
            <div className="statistics">
                <div className="statisticsColumn">
                    <div>0</div>
                    <p>oddanych worków</p>
                </div>
                <div className="statisticsColumn">
                    <div>0</div>
                    <p>wspartych organizacji</p>
                </div>
                <div className="statisticsColumn">
                    <div>0</div>
                    <p>zbiórek</p>
                </div>
            </div>
        )
    }
}

export default Statistics;