import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class BeforeContact extends Component {

    render() {
        const session = sessionStorage.getItem('email');

        return (
            <section className="beforeContact">
                {session? <p>Chcesz pozbyć się<br/> problemu i zrobić coś <br/> dobrego dla innych?</p> : <p>Chcesz oddać swoje rzeczy<br />lub zorganizować zbiórkę lokalną?</p>}
                <div className="titleLinks">
                    {session ? <><HashLink to="/giveaway#top">Oddaj <br />rzeczy</HashLink>
                        <Link to="/">Zorganizuj zbiórkę</Link></> : <Link to='/register'>Załóż konto</Link>}
                </div>
            </section>
        )
    }
}

export default BeforeContact;