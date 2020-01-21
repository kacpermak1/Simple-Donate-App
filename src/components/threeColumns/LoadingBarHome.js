import React, { Component } from 'react';
import { css } from "@emotion/core";
import CircleLoader from "react-spinners/CircleLoader";

const override = css`
  display: block;
  margin-bottom: 2rem;
`;
class LoadingBarHome extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        this.timeOut = setTimeout(() => { this.setState({ loading: false }) }, this.props.timeout)
    }

    componentWillUnmount() {
        clearTimeout(this.timeOut)
    }

    render() {
        return <>{this.state.loading ? <CircleLoader css={override} color={"#3C3C3C"} size={70} loading={this.state.loading} /> : <h2>0</h2>}</>
    }
}

export default LoadingBarHome;