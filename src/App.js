import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';


const HatsPage = () => (
  <div>
    <h1> HATS PAGE</h1>
  </div>
)

class App extends React.Component {

  render(){
    return (
      <div >
      <Switch >
        <Route exact path='/' component={Homepage}/>
        <Route path='/hats' component={HatsPage}/>
      </Switch>
      </div>
    );
  }
}

export default App;
