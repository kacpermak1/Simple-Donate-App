import React, { Component } from 'react';
import LoginNav from './../header/loginNav';
import Nav from './../Login/Nav';
import { FirebaseContext, withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';
import MobileManu from '../header/MobileMenu';

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

const borderNone = { border: "none" };

class RegisterFormBase extends Component {

    state = {
        emailText: "",
        passwordText: "",
        passwordConfirmText: "",
        wrongEmailText: "",
        wrongPasswordText: "",
        wrongPasswordConfirmText: "",
        error: false
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

        if (err.length === 0) {
            this.props.firebase
                .doCreateUserWithEmailAndPassword(emailText, passwordText)
                .then(authUser => {
                    this.setState({ emailText: '', passwordText: '', passwordConfirmText: '' });
                    sessionStorage.setItem("email", `${authUser.user.email}`);
                    this.props.history.push('/');
                })
                .catch(error => {
                    this.setState({ error: true, wrongEmailText: 'Konto z tym adresem email już istnieje!' });
                })
        };
    };

    render() {

        const { wrongEmailText, wrongPasswordText, wrongPasswordConfirmText, emailText, passwordText, passwordConfirmText, error } = this.state;

        let emailErrorJsx = null;
        let passwordErrorJsx = null;
        let passwordConfirmErrorJsx = null;

        if (wrongEmailText.length > 0 || error === true) { emailErrorJsx = <h3 style={errorStyle}>{wrongEmailText}</h3>; };
        if (wrongPasswordText.length > 0) { passwordErrorJsx = <h3 style={errorStyle}>{wrongPasswordText}</h3>; }
        if (wrongPasswordConfirmText.length > 0) { passwordConfirmErrorJsx = <h3 style={errorStyle}>{wrongPasswordConfirmText}</h3>; }

        return (
            <div className="login">
                <h2>Załóż konto</h2>
                <div className="decoration"></div>
                <form method='POST' id="registerForm" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="registerEmail">Email</label>
                        <input style={wrongEmailText ? borderNone : null} type="email" id="registerEmail" onChange={this.handleEmailChange} value={emailText}></input>
                        {emailErrorJsx}
                    </div>
                    <div>
                        <label htmlFor="registerPassword">Hasło</label>
                        <input style={wrongPasswordText ? borderNone : null} type="password" id="registerPassword" autoComplete="true" onChange={this.handlePasswordChange} value={passwordText}></input>
                        {passwordErrorJsx}
                    </div>
                    <div>
                        <label htmlFor="registerPasswordConfirm">Powtórz hasło</label>
                        <input style={wrongPasswordConfirmText ? borderNone : null} type="password" id="registerPasswordConfirm" autoComplete="true" onChange={this.handlePasswordConfirmChange} value={passwordConfirmText}></input>
                        {passwordConfirmErrorJsx}
                    </div>
                </form>
                <div className="loginButtons"><Link to='/login'>Zaloguj się</Link><input form="registerForm" type="submit" value="Załóż konto"></input></div>
            </div>
        )
    }
}

const RegisterForm = compose(withRouter, withFirebase)(RegisterFormBase);

class Register extends Component {

    state = {
        windowWidth: window.innerWidth
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange)
    }

    handleWindowSizeChange = () => {
        this.setState({ windowWidth: window.innerWidth })
    }

    render() {
        return (
            <section className="loginSection">
                <div className="headerLogin">
                    <div className="headerLoginRight">
                    {this.state.windowWidth <= 640 ? <MobileManu windowWidth={this.state.windowWidth} navigationType={<Nav windowWidth={this.state.windowWidth} />}/> : <><LoginNav /><Nav /></>}
                    </div>
                </div>
                <FirebaseContext.Consumer>
                    {firebase => <RegisterForm />}
                </FirebaseContext.Consumer>
            </section>

        )
    }
}

export default Register;

export { RegisterForm };