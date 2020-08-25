const { ADD_TO_CART, REMOVE_FROM_CART } = require("../constants");

export const addToCartAction = product => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const removeFromCartAction = id => {
  return {
    type: REMOVE_FROM_CART,
    payload: id
  };
};
