import React, { Component } from 'react';
import LoginNav from './../header/loginNav';
import Nav from './../Login/Nav';

const errorStyle = {
    fontSize: "13px",
    borderTop: "1px solid red",
    color: "red",
    width: "100%",
    paddingTop: "2px",
    position: "absolute",
    bottom: "0",
    whiteSpace: "nowrap"
}

class Register extends Component {

    state = {
        emailText: "",
        passwordText: "",
        passwordConfirmText: "",
        wrongEmailText: "",
        wrongPasswordText: "",
        wrongPasswordConfirmText: ""
    }

    handleEmailChange = (e) => {
        this.setState({ emailText: e.target.value })
    }

    handlePasswordChange = (e) => {
        this.setState({ passwordText: e.target.value })
    }

    handlePasswordConfirmChange = (e) => {
        this.setState({ passwordConfirmText: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { emailText, passwordText, passwordConfirmText } = this.state;
        const err = [];

        if (emailText.length <= 0 || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailText) !== true) {
            err.push('err');
            this.setState({ wrongEmailText: 'Podany email jest nieprawidłowy!' });
        } else {
            this.setState({ wrongEmailText: '' });
        };

        if (passwordText.length <= 5) {
            err.push('err');
            this.setState({ wrongPasswordText: "Podane hasło jest za krótkie" });
        } else {
            this.setState({ wrongPasswordText: '' });
        }

        if (passwordConfirmText.length <= 5 || passwordConfirmText !== passwordText) {
            err.push('err');
            this.setState({ wrongPasswordConfirmText: "Podane hasło jest niepoprawne" });
        } else {
            this.setState({ wrongPasswordConfirmText: '' });
        }

        if (err.length === 0) { console.log('zarejestrowano'); this.setState({ emailText: '', passwordText: '', passwordConfirmText: '' }) };
    };

    render() {

        const { wrongEmailText, wrongPasswordText, wrongPasswordConfirmText, emailText, passwordText, passwordConfirmText } = this.state;

        let emailErrorJsx = null;
        let passwordErrorJsx = null;
        let passwordConfirmErrorJsx = null;

        if(wrongEmailText.length > 0){emailErrorJsx = <h3 style={errorStyle}>{wrongEmailText}</h3>};
        if(wrongPasswordText.length > 0){passwordErrorJsx = <h3 style={errorStyle}>{wrongPasswordText}</h3>}
        if(wrongPasswordConfirmText.length > 0){passwordConfirmErrorJsx = <h3 style={errorStyle}>{wrongPasswordConfirmText}</h3>}

        return (
            <section className="loginSection">
                <div className="headerLogin">
                    <div className="headerLoginRight">
                        <LoginNav />
                        <Nav />
                    </div>
                </div>
                <div className="login">
                    <h2>Załóż konto</h2>
                    <div className="decoration"></div>
                    <form method='POST' id="registerForm" onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="registerEmail">Email</label>
                            <input type="email" id="registerEmail" onChange={this.handleEmailChange} value={emailText}></input>
                            {emailErrorJsx}
                        </div>
                        <div>
                            <label htmlFor="registerPassword">Hasło</label>
                            <input type="password" id="registerPassword" onChange={this.handlePasswordChange} value={passwordText}></input>
                            {passwordErrorJsx}
                        </div>
                        <div>
                            <label htmlFor="registerPasswordConfirm">Powtórz hasło</label>
                            <input type="password" id="registerPasswordConfirm" onChange={this.handlePasswordConfirmChange} value={passwordConfirmText}></input>
                            {passwordConfirmErrorJsx}
                        </div>
                    </form>
                    <div className="loginButtons"><a href="\login">Zaloguj się</a><input form="registerForm" type="submit" value="Załóż konto"></input></div>
                </div>
            </section>
        )
    }
}

export default Register;