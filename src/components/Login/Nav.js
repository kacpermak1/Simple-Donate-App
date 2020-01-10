import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link'

class Nav extends Component {
    render() {

        return (
            <div className='navList'>
                <ul>
                    <li><Link to="/#home" smooth={true} offset={0} duration={500}>Start</Link></li>
                    <li><Link to="/#steps" smooth={true} offset={50} duration={500}>O co chodzi?</Link></li>
                    <li><Link to="/#aboutUs" smooth={true} offset={50} duration={500}>O nas</Link></li>
                    <li><Link to="/#whoWeHelp" smooth={true} offset={0} duration={500}>Fundacja i organizacje</Link></li>
                    <li><Link to="/#contact" smooth={true} offset={50} duration={500}>Kontakt</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav;