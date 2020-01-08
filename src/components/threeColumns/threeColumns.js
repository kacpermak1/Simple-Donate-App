import React, { Component } from 'react';
import BagsColumn from './BagsColumn';
import CollectionsColumn from './CollectionsCollumn';
import OrganisationsColumn from './OrganisationsColumn';


class ThreeColumns extends Component {
    render() {
        return (
            <section className="threeColumns" id="threeCols">
                <div className="container">
                    <BagsColumn bags={10} />
                    <OrganisationsColumn organizations={5} />
                    <CollectionsColumn collections={7} />
                </div>
            </section>
        )
    }
}

export default ThreeColumns;