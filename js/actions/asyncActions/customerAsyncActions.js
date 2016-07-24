import { fetchCustomer } from '../../modules/ajax';
import {
  getCustomerRequest,
  getCustomerSuccess,
  getCustomerError,
  setCustomer
} from '../customerActions';

export const requestCustomer = (custSubId) => {
  return function(dispatch) {
    dispatch(getCustomerRequest());

    return fetchCustomer(custSubId).then(
      customer => {
        dispatch(getCustomerSuccess(customer));
        dispatch(setCustomer(customer));
      },
      error => {
        dispatch(getCustomerError(error));
      }
    );
  };
};
