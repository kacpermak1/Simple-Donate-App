import React, { Component } from 'react';
import LoadingBar from './LoadingBar';

class Statistics extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        setTimeout(() => { this.setState({ data: this.props.data }) }, 2000)
    }

    render() {

        const { data } = this.state;
        return (
            <div className="statistics">
                <div className="statisticsColumn">
                    <div className="statisticsCircle">{data.length ? data.reduce((a, b) => a + b, 0) : <LoadingBar timeout={2600} />}</div>
                    <p>Donated bags</p>
                </div>
                <div className="statisticsColumn">
                    <div className="statisticsCircle">{data.length ? data.length : <LoadingBar timeout={2600} />}</div>
                    <p>Donations</p>
                </div>
                <div className="statisticsColumn">
                    <div className="statisticsCircle">{<LoadingBar timeout={2600} />}</div>
                    <p>Collections</p>
                </div>
            </div>
        )
    }
}

export default Statistics;