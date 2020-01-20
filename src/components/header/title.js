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
                <Link to="/login"><p><span>Oddaj</span> rzeczy</p></Link>
                <Link to="/login"><p><span>Zorganizuj</span> zbiórkę</p></Link>
            </>;

        const loggedIn =
            <>
                <HashLink to="/giveaway#top"><p><span>Oddaj</span> rzeczy</p></HashLink>
                <Link to="/"><p><span>Zorganizuj</span> zbiórkę</p></Link>
            </>

        const logedOutMobile = <Link to="/register"><p>ZAŁÓŻ KONTO</p></Link>;

        const session = sessionStorage.getItem('email');
        let jsx;

        if (session) {
            jsx = loggedIn
        } else if (!session && windowWidth > 640) { jsx = loggedOut } else if (!session && windowWidth <= 640) { jsx = logedOutMobile };

        if (windowWidth <= 640 && session) {
            return (<div className="titleHeader" style={{ postion: "relative", alignItems: "center" }}>
                <h1 style={{ fontSize: "2.4rem" }}>Zacznij pomagać!</h1>
                <h2 style={{ fontSize: "1.6rem" }}>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <Statisctics data={this.props.data} />
                <div className="titleLinks" style={{ bottom: "-7rem", left: "0", width: "100%", justifyContent: "space-around" }}>
                    {jsx}
                </div>
            </div>)
        } else {
            return (
                <div className="titleHeader">
                    {windowWidth > 640 ? <h1>Zacznij pomagać!</h1> : <h1>Masz w domu rzeczy, z którymi nie wiesz co zrobić?</h1>}
                    {windowWidth > 640 ? <h2>Oddaj niechciane rzeczy w zaufane ręce</h2> : <h2>ODDAJ JE POTRZEBUJĄCYM <br />- szybko i w zaufane ręce</h2>}
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