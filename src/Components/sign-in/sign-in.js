import React from 'react';

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.scss';

class SignIn extends React.Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email,password} = this.state;

    try{
      await auth.signInWithEmailAndPassword( email, password);
      this.setState({email:'', password:''});
    } catch (error) {
        console.log(error);
    }

  }

  handleChange = event => {
    const {value, name} = event.target;

    this.setState({ [name]: value})
  }

  render() {
    const {email, password} = this.state;
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            label="email"
            value={email} 
            handleChange={this.handleChange}
            required />
          
          <FormInput 
            name="password" 
            type="password" 
            label="password"
            value={password} 
            onChange={this.handleChange}
            required />
          
          <div className='buttons'>
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
          {' '}
          Sign In with Google
          {' '}
          </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;