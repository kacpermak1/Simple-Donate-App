import React, { Component } from 'react';
import decoration from './../../assets/Decoration.svg'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Title extends Component {

    render() {

        const loggedOut =
            <>
                <Link to="/login"><p><span>Oddaj</span> rzeczy</p></Link>
                <Link to="/login"><p><span>Zorganizuj</span> zbiórkę</p></Link>
            </>;

        const loggedIn =
            <>
                <HashLink to="/giveaway#top"><p><span>Oddaj</span> rzeczy</p></HashLink>
                <Link to="/"><p><span>Zorganizuj</span> zbiórkę</p></Link>
            </>

        const session = sessionStorage.getItem('email');

        let jsx;
        if (session) {
            jsx = loggedIn
        } else { jsx = loggedOut };

        return (
            <div className="titleHeader">
                <h1>Zacznij pomagać!</h1>
                <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img src={decoration} className="decoration" alt="decoration" />
                <div className="titleLinks">
                    {jsx}
                </div>
            </div>
        )
    }
}

export default Title;