import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class BeforeContact extends Component {

    render() {
        const session = sessionStorage.getItem('email');

        return (
            <section className="beforeContact">
                {session? <p>Chcesz pozbyć się problemu i zrobić<br/>coś dobrego dla innych?</p> : <p>Chcesz oddać swoje rzeczy<br />lub zorganizować zbiórkę lokalną?</p>}
                <div className="titleLinks">
                    {session ? <><HashLink to="/giveaway#top"><p><span>Oddaj</span> rzeczy</p></HashLink>
                        <Link to="/"><p><span>Zorganizuj</span> zbiórkę</p></Link></> : <Link to='/register'><div>Załóż konto</div></Link>}
                </div>
            </section>
        )
    }
}

export default BeforeContact;