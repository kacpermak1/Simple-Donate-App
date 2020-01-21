import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class BeforeContact extends Component {

    render() {
        const session = sessionStorage.getItem('email');

        return (
            <section className="beforeContact">
                {session? <p>Would you like to get rid of <br/> unwanted items and do something <br/> good for others?</p> : <p>Would you like to donate your<br /> unwanted items to charity or <br /> organize a local collection?</p>}
                <div className="titleLinks">
                    {session ? <><HashLink to="/giveaway#top">Donate <br />Items</HashLink>
                        <Link to="/">Organize Collection</Link></> : <Link to='/register'>Sign up</Link>}
                </div>
            </section>
        )
    }
}

export default BeforeContact;