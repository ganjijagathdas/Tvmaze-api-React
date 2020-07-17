import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './components/homepage';
import ShowDetail from './components/show-details';

class App extends Component {

  render() {
    return (
      < Switch >
        <Route path="/show/:id" exact component={ShowDetail} />
        <Route path="/" exact component={HomePage} />
      </Switch >
    );
  }

}

export default App;
