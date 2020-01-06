import React, { Component } from 'react';

class CollectionsColumn extends Component {
    state = {
        numberOfCollections: this.props.collections
    }

    render() {
        return (
            <div className="column">
                <h2>{this.state.numberOfCollections}</h2>
                <h3>zorganizowanych zbiórek</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>)
    }
}

export default CollectionsColumn;