import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class BeforeContact extends Component {

    render() {
        const session = sessionStorage.getItem('email');

        return (
            <section className="beforeContact">
                {session? <p>Do you want to get rid of the <br/> problem and do something <br/> good for others?</p> : <p>Do you want to give your<br /> unwanted items to charity or <br /> organize a local collection?</p>}
                <div className="titleLinks">
                    {session ? <><HashLink to="/giveaway#top">Donate <br />Items</HashLink>
                        <Link to="/">Organize Collection</Link></> : <Link to='/register'>Sign up</Link>}
                </div>
            </section>
        )
    }
}

export default BeforeContact;