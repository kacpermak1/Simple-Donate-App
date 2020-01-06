import React, { Component } from 'react';

class OrganizationsColumn extends Component {
    state = {
        numberOfOrganizations: this.props.organizations
    }

    render() {
        return (
            <div className="column">
                <h2>{this.state.numberOfOrganizations}</h2>
                <h3>wspartych organizacji</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>)
    }
}

export default OrganizationsColumn;