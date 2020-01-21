import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

const borderNone = {border:"none"};
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
            this.setState({wrongNameText:'Incorrect name'});
        }else{this.setState({wrongNameText:''})};

        if (email.length <= 0 || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) !== true) {
            err.push('err');
            this.setState({wrongEmailText:'Incorrect email address'});
        }else{this.setState({wrongEmailText:''})};

        if (message.length < 120) {
            err.push('err')
            this.setState({wrongMessageText:'Message must contain at least 120 characters'});
        }else{this.setState({wrongMessageText:''})};

        if (err.length === 0) {

            const object = {
                name: name,
                email: email,
                message: message
            }
            this.props.firebase.db.collection('messages')
            .add({
                request: object
            })
            .then(function (doc) {
                console.log("Document ID: ", doc.id);
            })
            .catch(function (error) {
                console.error("Error: ", error);
            });

            this.setState({ endText: "Message has been sent! We will contact you soon.", name: '', email: '', message: '' });
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
            <section className="contact" id="contact">
                <div className="formContainer">
                    <h2>Contact Us</h2>
                    <div className="decoration"></div>
                    {submitJsx}
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <div className="inputsTop">
                            <div>
                                <label htmlFor="name">Your name</label>
                                <input style={wrongNameText ? borderNone : null} type="text" name="NAME" placeholder="John" id="name" value={name} onChange={this.handleChangeName}></input>
                                {nameErrorJsx}
                            </div>
                            <div>
                                <label htmlFor="email">Your email</label>
                                <input style={wrongEmailText ? borderNone : null} type="email" name="EMAIL" placeholder="abc@xyz.com" id="email" value={email} onChange={this.handleChangeEmail}></input>
                                {emailErrorJsx}
                            </div>
                        </div>
                        <div className="inputBottom">
                            <label htmlFor="message">Message</label>
                            <textarea style={wrongMessageText ? borderNone : null} onChange={this.handleChangeMessage} value={message} id="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                            {messageErrorJsx}
                        </div>
                        <input type="submit" className="submit" value="Send" id="submit"></input>
                    </form>
                </div>
                <footer className="footer"><p>Designed by student of CodersLab UX Bootcamp / Built in full by Kacper Makowka</p><div className="facebook"></div><div className="instagram"></div></footer>
            </section>
        )
    }
}

export default withFirebase(Contact);