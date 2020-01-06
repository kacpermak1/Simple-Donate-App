import React from 'react';
import Home from './components/home';
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
        </Switch>
      </Router>
    </>
  )
}

export default App;






