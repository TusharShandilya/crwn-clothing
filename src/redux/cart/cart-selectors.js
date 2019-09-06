import { createSelector } from 'reselect';

// two types of selectors i/p and o/p selector

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => 
  cartItems.reduce((accumualator, cartItem) => accumualator + cartItem.quantity, 0)
)