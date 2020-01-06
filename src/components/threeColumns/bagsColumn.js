import React, { Component } from 'react';

class BagsColumn extends Component {
    state = {
        numberOfBags: this.props.bags
    }

    render() {
        return (
            <div className="column">
                <h2>{this.state.numberOfBags}</h2>
                <h3>Oddanych worków</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>)
    }
}

export default BagsColumn;