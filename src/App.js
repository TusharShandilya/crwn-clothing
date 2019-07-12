import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Homepage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/Shop/Shop';


class App extends React.Component {

  render(){
    return (
      <div >
      <Switch >
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
      </div>
    );
  }
}

export default App;
