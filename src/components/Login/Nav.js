import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link'

class Nav extends Component {
    render() {

        const style = {
            color:"#3C3C3C",
            textDecoration:"none"
        }

        return (
            <div className='navList'>
                <ul>
                    <li style={{border: "0.75px solid transparent"}}><Link to="/#home" smooth={true} offset={0} duration={500} style={style}>Start</Link></li>
                    <li><Link to="/#steps" smooth={true} offset={50} duration={500} style={style}>O co chodzi?</Link></li>
                    <li><Link to="/#aboutUs" smooth={true} offset={50} duration={500} style={style}>O nas</Link></li>
                    <li><Link to="/#whoWeHelp" smooth={true} offset={0} duration={500} style={style}>Fundacja i organizacje</Link></li>
                    <li><Link to="/#contact" smooth={true} offset={50} duration={500} style={style}>Kontakt</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav;