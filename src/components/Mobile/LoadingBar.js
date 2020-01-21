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
        this.timeOut = setTimeout(() => { this.setState({ loading: false }) }, this.props.timeout)
    }

    componentWillUnmount(){
        clearTimeout(this.timeOut)
    }

    render() {
        return <>{this.state.loading ? <BounceLoader css={override} color={"#FAD648"} size={50} loading={this.state.loading} /> : 0}</>
    }
}

export default LoadingBar;