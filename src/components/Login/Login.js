import React, { Component } from 'react';
import LoginNav from './../header/loginNav';
import Nav from './Nav';

const style = {
    paddingTop: "2.5rem",
    paddingBottom: "2.5rem"
}

const errorStyle = {
    fontSize:"13px",
    borderTop:"1px solid red",
    color:"red",
    width:"100%",
    paddingTop:"7px",
    position:"absolute",
    bottom:"4.5%",
    whiteSpace:"nowrap"
}

class Login extends Component {

    state = {
        emailText: "",
        passwordText: "",
        wrongEmailText: "",
        wrongPasswordText: ""
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

        if(err.length === 0){console.log('zalogowano'); this.setState({emailText:'', passwordText:''})};
    };


    render() {
        const { wrongEmailText, wrongPasswordText, emailText, passwordText } = this.state;
        let emailErrorJsx = null;
        let passwordErrorJsx = null;

        if(wrongEmailText.length > 0){emailErrorJsx = <h3 style={errorStyle}>{wrongEmailText}</h3>};
        if(wrongPasswordText.length > 0){passwordErrorJsx = <h3 style={errorStyle}>{wrongPasswordText}</h3>}

        return (
            <section className="loginSection">
                <div className="headerLogin">
                    <div className="headerLoginRight">
                        <LoginNav />
                        <Nav />
                    </div>
                </div>
                <div className="login">
                    <h2>Zaloguj się</h2>
                    <div className="decoration"></div>
                    <form style={style} method="POST" onSubmit={this.handleSubmit} id="loginForm">
                        <div>
                            <label htmlFor="loginEmail">Email</label>
                            <input type="email" id="loginEmail" value={emailText} onChange={this.handleEmailChange}></input>
                            {emailErrorJsx}
                        </div>
                        <div>
                            <label htmlFor="loginPassword">Hasło</label>
                            <input type="password" id="loginPassword" value={passwordText} onChange={this.handlePasswordChange}></input>
                            {passwordErrorJsx}
                        </div>
                    </form>
                    <div className="loginButtons"><a href="\register">Załóż konto</a><input form="loginForm" type="submit" value="Zaloguj się"></input></div>
                </div>
            </section>
        )
    }
}

export default Login;