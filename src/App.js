import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.scss';

import Homepage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/Shop/Shop';
import  Header from './Components/header/header';


class App extends React.Component {

  render(){
    return (
      <div >
      <Header />
      <Switch >
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
      </div>
    );
  }
}

export default App;
