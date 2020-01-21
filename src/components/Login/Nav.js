import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link'

class Nav extends Component {

    render() {

        let style;
        let aboutUs;
       
        if (this.props.windowWidth <= 640 && this.props.windowWidth > 0) { aboutUs = null;  style = { color: "white", textDecoration: "none" }; } else { aboutUs = <li><Link to="/#aboutUs" smooth={true} offset={50} duration={500} style={{ color: "#3C3C3C", textDecoration: "none" }}>About Us</Link></li>; style = { color: "#3C3C3C", textDecoration: "none" }; }

        return (
            <div className='navList'>
                <ul>
                    <li style={{ border: "0.75px solid transparent" }}><Link smooth to="/#home" offset={0} duration={500} style={style}>Start</Link></li>
                    <li><Link smooth to="/#steps" offset={50} duration={500} style={style}>How it works</Link></li>
                    {aboutUs}
                    <li><Link smooth to="/#whoWeHelp" offset={0} duration={500} style={style}>Who we help</Link></li>
                    <li><Link smooth to="/#contact" offset={50} duration={500} style={style}>Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav;