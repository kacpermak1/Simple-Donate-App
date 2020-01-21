import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import decoration from './../../assets/Decoration.svg';
import Statisctics from '../Mobile/Statistics';
class Title extends Component {

    render() {

        const { windowWidth } = this.props;

        const loggedOut =
            <>
                <Link to="/login"><p><span>Donate</span> Items</p></Link>
                <Link to="/login"><p><span>Organize</span> Collection</p></Link>
            </>;

        const loggedIn =
            <>
                <HashLink to="/giveaway#top"><p><span>Donate</span> Items</p></HashLink>
                <Link to="/"><p><span>Organize</span> Collection</p></Link>
            </>

        const logedOutMobile = <Link to="/register"><p>SIGN UP</p></Link>;

        const session = sessionStorage.getItem('email');
        let jsx;

        if (session) {
            jsx = loggedIn
        } else if (!session && windowWidth > 640) { jsx = loggedOut } else if (!session && windowWidth <= 640) { jsx = logedOutMobile };

        if (windowWidth <= 640 && session) {
            return (<div className="titleHeader" style={{ postion: "relative", alignItems: "center" }}>
                <h1 style={{ fontSize: "2.4rem" }}>Start helping!</h1>
                <h2 style={{ fontSize: "1.6rem" }}>Give unwanted items to trusted hands</h2>
                <Statisctics data={this.props.data} />
                <div className="titleLinks" style={{ bottom: "-7rem", left: "0", width: "100%", justifyContent: "space-around" }}>
                    {jsx}
                </div>
            </div>)
        } else {
            return (
                <div className="titleHeader">
                    {windowWidth > 640 ? <h1>Start helping!</h1> : <h1>Do you have things at home that you don't know what to do with?</h1>}
                    {windowWidth > 640 ? <h2>Give unwanted items to trusted hands</h2> : <h2>HAND THEM OVER <br />- Quickly and into trusted hands.</h2>}
                    <img src={decoration} className="decoration" alt="decoration" />
                    <div className="titleLinks">
                        {jsx}
                    </div>
                </div>
            )
        }
    }
}

export default Title;