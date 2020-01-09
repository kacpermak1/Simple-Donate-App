import React, { Component } from 'react';
class Contact extends Component {

    state = {
        name: "",
        email: "",
        message: "",
        endText: "",
        wrongNameText:"",
        wrongEmailText:"",
        wrongMessageText:""
    };

    handleChangeName = (e) => {
        this.setState({ name: e.target.value })
    }
    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value })
    }
    handleChangeMessage = (e) => {
        this.setState({ message: e.target.value })
    }
    handleSubmit = (e) => {

        e.preventDefault();

        const { name, email, message } = this.state;
        let err = [];

        if (name.indexOf(" ") >= 0 || name.length < 2 || /\d/.test(name) === true) {
            err.push('err');
            this.setState({wrongNameText:'Podane imię jest nieprawidłowe!'});
        }else{this.setState({wrongNameText:''})};

        if (email.length < 0 || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) !== true) {
            err.push('err');
            this.setState({wrongEmailText:'Podany email jest nieprawidłowy!'});
        }else{this.setState({wrongEmailText:''})};

        if (message.length < 120) {
            err.push('err')
            this.setState({wrongMessageText:'Wiadomość powinna mieć conajmniej 120 znaków!'});
        }else{this.setState({wrongMessageText:''})};

        if (err.length === 0) {
            (async () => {
                const rawResponse = await fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name: this.state.name, email: this.state.email, message: this.state.message })
                });
                const content = await rawResponse.json();
                console.log(content);
            })();
            this.setState({ endText: "Wiadomość została wysłana! Wkrótce się skontaktujemy.", name: '', email: '', message: '' });
        }
    }

    render() {

        const { name, email, message, wrongNameText, wrongEmailText, wrongMessageText, endText } = this.state;
        let nameErrorJsx = null;
        let emailErrorJsx = null;
        let messageErrorJsx = null;
        let submitJsx = null;
        
        if(wrongNameText.length > 0){ nameErrorJsx = <h3 className="errorText">{wrongNameText}</h3>};
        if(wrongEmailText.length > 0){ emailErrorJsx = <h3 className="errorText">{wrongEmailText}</h3>};
        if(wrongMessageText.length > 0){ messageErrorJsx = <h3 className="errorText">{wrongMessageText}</h3>};
        if(endText.length > 0){ submitJsx = <p className="submitText">{endText}</p>}

        return (
            <section className="contact">
                <div className="formContainer">
                    <h2>Skontaktuj się z nami</h2>
                    <div className="decoration"></div>
                    {submitJsx}
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <div className="inputsTop">
                            <div>
                                <label>Wpisz swoje imię</label>
                                <input type="text" name="NAME" placeholder="Krzysztof" value={name} onChange={this.handleChangeName}></input>
                                {nameErrorJsx}
                            </div>
                            <div>
                                <label>Wpisz swój email</label>
                                <input type="email" name="EMAIL" placeholder="abc@xyz.pl" value={email} onChange={this.handleChangeEmail}></input>
                                {emailErrorJsx}
                            </div>
                        </div>
                        <div className="inputBottom">
                            <label>Wpisz swoją wiadomość</label>
                            <textarea onChange={this.handleChangeMessage} value={message} id="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                            {messageErrorJsx}
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