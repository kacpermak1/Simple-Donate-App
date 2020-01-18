import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

class MobileContact extends Component {
    render(){
        return(
            <section className="mobileContact" id="contact">
                <div className="mobileContactIcon"></div>
                <div className="mobileContactTopText"><p>Skontaktuj się z nami</p><FontAwesomeIcon icon={faPhoneAlt}/><FontAwesomeIcon icon={faEnvelope}/></div>
                <div className="mobileContactBottomText">
                    <p>Regulamin</p>
                    <p>Polityka prywatności</p>
                    <p>Instrukcja jak spakować rzeczy do oddania</p>
                </div>
            </section>
        )
    }
}

export default MobileContact;