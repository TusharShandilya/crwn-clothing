import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.scss';

import Homepage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/Shop/Shop';
import SignInAndSignUp from './Pages/SignIn-SignUp/SignIn-SignUp';
import Header from './Components/header/header';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });

          console.log(this.state);
          
        });
      } else {
        this.setState({currentUser: userAuth});
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }



  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch >
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}

export default App;