import React from 'react';

import SignIn from '../../Components/sign-in/sign-in';
import SignUp from '../../Components/sign-up/sign-up';

import './SignIn-SignUp.scss';

const SignInAndSignUp = () => (
  <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
  </div>
);

export default SignInAndSignUp;