import { SET_CUSTOMER } from '../actions/actionTypes';

const customer = (
  state = null,
  action
) => {
  switch (action.type) {
    case SET_CUSTOMER:
      return action.customer;
    default:
      return state;
  }
};

export default customer;
