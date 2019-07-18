import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden}  from '../../redux/cart/cart-actions';

import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg';

import './cart-icon.scss';

const CartIcon = ({toggleCartHidden}) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shoppingIcon'/>
    <span className='item-count'>0</span>
  </div>
)


const mapDispatchtoProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchtoProps)(CartIcon);