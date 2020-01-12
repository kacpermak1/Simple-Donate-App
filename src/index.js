import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './App';
import Firebase, { FirebaseContext } from './components/Firebase';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>, document.getElementById('root'));
serviceWorker.unregister();
