import React, { Component } from 'react';
import decoration from './../../assets/Decoration.svg'
import { Link } from 'react-router-dom';

class Title extends Component {

    render() {
        return (
            <div className="titleHeader">
                <h1>Zacznij pomagać!</h1>
                <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                <img src={decoration} className="decoration" alt="decoration"/>
                <div className="titleLinks">
                <Link to="/login"><p><span>Oddaj</span> rzeczy</p></Link>
                <Link to="/login"><p><span>Zorganizuj</span> zbiórkę</p></Link>
                </div>
            </div>
        )
    }
}

export default Title;