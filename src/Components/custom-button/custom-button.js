import React from 'react';

import './custom-button.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, paytm, ...otherProps}) => (
  <button className={`${inverted ? 'inverted ': ''} ${paytm ? 'paytm' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;