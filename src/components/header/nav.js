import React, {Component} from 'react';
import { Link } from 'react-scroll';

class Nav extends Component {
    render() {

        return (
            <div className='navList'>
                <ul>
                    <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Start</Link></li>
                    <li><Link activeClass="active" to="steps" spy={true} smooth={true} offset={50} duration={500}>O co chodzi?</Link></li>
                    <li><Link activeClass="active" to="aboutUs" spy={true} smooth={true} offset={50} duration={500}>O nas</Link></li>
                    <li><Link to="whoWeHelp">Fundacja i organizacje</Link></li>
                    <li><Link to="contact">Kontakt</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav;