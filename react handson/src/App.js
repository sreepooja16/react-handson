import React from 'react';

import './App.css';
import { Content } from './Content';
import { Header } from './Header';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { AddEmployee } from './AddEmployee';




class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header></Header>
          <Switch>
            <Route
              path='/list-emp'
              exact={true}
              component={Content} />
            <Route
              path='/add-emp'
              exact={true}
              component={AddEmployee} />
          </Switch>
        </Router>
       
      
      </div>
    );
  }

}

export default App;
