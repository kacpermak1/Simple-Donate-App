import React, { Component } from 'react';
import LoginNav from './../header/loginNav';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { FirebaseContext, withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import MobileManu from '../header/MobileMenu';

const style = {
    paddingTop: "2.5rem",
    paddingBottom: "2.5rem"
}

const errorStyle = {
    fontSize: "13px",
    borderTop: "1px solid red",
    color: "red",
    width: "100%",
    paddingTop: "7px",
    position: "absolute",
    bottom: "4.5%",
    whiteSpace: "nowrap"
}

const borderNone = { border: "none" };

class LoginFormBase extends Component {

    state = {
        emailText: "",
        passwordText: "",
        wrongEmailText: "",
        wrongPasswordText: "",
        error: false
    }

    handleEmailChange = (e) => {
        this.setState({ emailText: e.target.value })
    }

    handlePasswordChange = (e) => {
        this.setState({ passwordText: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { emailText, passwordText } = this.state;
        const err = [];

        if (emailText.length <= 0 || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailText) !== true) {
            err.push('err');
            this.setState({ wrongEmailText: 'Incorrect email address' });
        } else {
            this.setState({ wrongEmailText: '' });
        };

        if (passwordText.length <= 5) {
            err.push('err');
            this.setState({ wrongPasswordText: "Password must contain at least 6 characters" });
        } else {
            this.setState({ wrongPasswordText: '' });
        }

        if (err.length === 0) {
            this.props.firebase
                .doSignInWithEmailAndPassword(emailText, passwordText)
                .then(authUser => {
                    this.setState({ emailText: '', passwordText: '' });
                    sessionStorage.setItem("email", `${authUser.user.email}`);
                    this.props.history.push('/');
                })
                .catch(error => {
                    this.setState({ error: true, wrongEmailText: 'Incorrect email or password' });
                })
        };
    };

    render() {
        const { wrongEmailText, wrongPasswordText, emailText, passwordText, error } = this.state;
        let emailErrorJsx = null;
        let passwordErrorJsx = null;

        if (wrongEmailText.length > 0 || error === true) { emailErrorJsx = <h3 style={errorStyle}>{wrongEmailText}</h3> };
        if (wrongPasswordText.length > 0) { passwordErrorJsx = <h3 style={errorStyle}>{wrongPasswordText}</h3> }

        return (
            <div className="login">
                <h2>Sign in</h2>
                <div className="decoration"></div>
                <form style={style} method="POST" onSubmit={this.handleSubmit} id="loginForm">
                    <div>
                        <label htmlFor="loginEmail">Email</label>
                        <input style={wrongEmailText ? borderNone : null} type="email" id="loginEmail" value={emailText} onChange={this.handleEmailChange}></input>
                        {emailErrorJsx}
                    </div>
                    <div>
                        <label htmlFor="loginPassword">Password</label>
                        <input style={wrongPasswordText ? borderNone : null} type="password" id="loginPassword" autoComplete="true" value={passwordText} onChange={this.handlePasswordChange}></input>
                        {passwordErrorJsx}
                    </div>
                </form>
                <div className="loginButtons"><Link to='/register'>Sign up</Link><input form="loginForm" type="submit" value="Sign in"></input></div>
            </div>
        )
    }
}

const LoginForm = compose(withRouter, withFirebase)(LoginFormBase);

class Login extends Component {

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
                    {this.state.windowWidth <= 640 ? <MobileManu windowWidth={this.state.windowWidth} navigationType={<Nav windowWidth={this.state.windowWidth} />} /> : <><LoginNav /><Nav /></>}
                    </div>
                </div>
                <FirebaseContext.Consumer>
                    {firebase => <LoginForm />}
                </FirebaseContext.Consumer>
            </section>
        )
    }
}

export default Login;

export {LoginForm};