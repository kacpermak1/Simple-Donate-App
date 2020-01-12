import React from 'react';
import Home from './components/home';
import GiveAway from './components/GiveAway/GiveAway'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/logout' component={Logout} />
          <Route path='/giveaway' component={GiveAway}/>
        </Switch>
      </Router>
    </>
  )
}

export default App;






