import React, { Component } from 'react';

class Statistics extends Component {

    state = {
        numberOfBags: 0
    }

    componentDidMount() {
        const intervalId = setInterval(() => {
            this.addBags();
        }, 500);

        setTimeout(() => {
            clearInterval(intervalId);
        }, 2000);
    }

    addBags = () => {
        let number;
        if (this.props.data.length > 0) {
            number = this.props.data.reduce((a, b) => a + b);
            this.setState({ numberOfBags: number })
        }
    }

    render() {
        return (
            <div className="statistics">
                <div className="statisticsColumn">
                    <div>{this.state.numberOfBags}</div>
                    <p>oddanych worków</p>
                </div>
                <div className="statisticsColumn">
                    <div>{this.props.data.length}</div>
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