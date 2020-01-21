import React, {Component} from 'react';
import { Link } from 'react-scroll';

class Nav extends Component {
    render() {

        return (
            <div className='navList'>
                <ul>
                    <li><Link onClick={this.props.windowWidth <= 640 ? this.props.click : null} activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>Start</Link></li>
                    <li><Link onClick={this.props.windowWidth <= 640 ? this.props.click : null} activeClass="active" to="steps" spy={true} smooth={true} offset={50} duration={500}>How it works</Link></li>
                    {(this.props.windowWidth > 640)&&<li><Link activeClass="active" to="aboutUs" spy={true} smooth={true} offset={50} duration={500}>About Us</Link></li>}
                    <li><Link onClick={this.props.windowWidth <= 640 ? this.props.click : null} activeClass="active" to="whoWeHelp" spy={true} smooth={true} offset={0} duration={500}>Who we help</Link></li>
                    <li ><Link onClick={this.props.windowWidth <= 640 ? this.props.click : null} activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav;