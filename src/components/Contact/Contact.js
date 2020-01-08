import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section className="contact">
                    <div className="formContainer">
                        <h2>Skontaktuj się z nami</h2>
                        <div className="decoration"></div>
                        <form method="POST">
                            <div className="inputsTop">
                                <div>
                                    <label>Wpisz swoje imię</label>
                                    <input type="text" name="NAME" placeholder="Krzysztof"></input>
                                </div>
                                <div>
                                    <label>Wpisz swój email</label>
                                    <input type="email" name="EMAIL" placeholder="abc@xyz.pl"></input>
                                </div>
                            </div>
                            <div className="inputBottom">
                                <label>Wpisz swoją wiadomość</label>
                                <textarea id="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                            </div>
                            <input type="submit" className="submit" value="Wyślij" id="submit"></input>
                        </form>
                </div>
                <div className="footer"><p>Copyright by Coders Lab</p><div className="facebook"></div><div className="instagram"></div></div>
            </section>
        )
    }
}

export default Contact;