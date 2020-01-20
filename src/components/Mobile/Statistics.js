import React, { Component } from 'react';
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;
class LoadingBar extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        setTimeout(() => { this.setState({ loading: false }) }, 2600)
    }

    render() {
        return <>{this.state.loading ? <BounceLoader css={override} color={"#FAD648"} size={50} loading={this.state.loading} /> : 0}</>
    }
}
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
                    <div className="statisticsCircle">{data.length ? data.reduce((a, b) => a + b, 0) : <LoadingBar />}</div>
                    <p>oddanych worków</p>
                </div>
                <div className="statisticsColumn">
                    <div className="statisticsCircle">{data.length ? data.length : <LoadingBar />}</div>
                    <p>wspartych organizacji</p>
                </div>
                <div className="statisticsColumn">
                    <div className="statisticsCircle">{<LoadingBar />}</div>
                    <p>zbiórek</p>
                </div>
            </div>
        )
    }
}

export default Statistics;