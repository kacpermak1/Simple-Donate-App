import React, { Component } from 'react';
import BagsColumn from './bagsColumn';
import CollectionsColumn from './collectionsCollumn';
import OrganisationsColumn from './organisationsColumn';


class ThreeColumns extends Component {
    render() {
        return (
            <section className="threeColumns" id="threeCols">
                <div class="container">
                    <BagsColumn bags={10} />
                    <OrganisationsColumn organizations={5} />
                    <CollectionsColumn collections={7} />
                </div>
            </section>
        )
    }
}

export default ThreeColumns;