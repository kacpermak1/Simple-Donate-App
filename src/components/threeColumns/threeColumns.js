import React, { Component } from 'react';
import LoadingBarHome from './LoadingBarHome';

class ThreeColumns extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        this.timeout = setTimeout(() => { this.setState({ data: this.props.data }) }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    render() {
        const isLoggedIn = sessionStorage.getItem("email");
        let collectionsNumber;
        if (isLoggedIn) { collectionsNumber = 0 } else { collectionsNumber = 18 }

        const { data } = this.state;
        return (
            <section className="threeColumns" id="threeCols">
                <div className="container">
                    <div className="column">
                        {data.length ? <h2>{data.reduce((a, b) => a + b, 0)}</h2> : <LoadingBarHome timeout={2300} />}
                        <h3>Donated Bags</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                    <div className="column">
                        {data.length ? <h2>{data.length}</h2> : <LoadingBarHome timeout={2300} />}
                        <h3>Donations</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                    <div className="column">
                        {data.length ? <h2>{collectionsNumber}</h2> : <LoadingBarHome timeout={2300} />}
                        <h3>organized collections</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default ThreeColumns;