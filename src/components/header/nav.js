import React, {Component} from 'react';
import { Link } from 'react-scroll';

class Nav extends Component {
    render() {

        return (
            <div className='navList'>
                <ul>
                    <li><Link to="start">Start</Link></li>
                    <li><Link to="aboutApp">O co chodzi?</Link></li>
                    <li><Link to="aboutUs">O nas</Link></li>
                    <li><Link to="whoWeHelp">Fundacja i organizacje</Link></li>
                    <li><Link to="contact">Kontakt</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav;