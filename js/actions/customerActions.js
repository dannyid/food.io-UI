import {
  GET_CUSTOMER_REQUEST,
  GET_CUSTOMER_ERROR,
  GET_CUSTOMER_SUCCESS,
  SET_CUSTOMER
} from './actionTypes';

export const getCustomerRequest = () => {
  return {
    type: GET_CUSTOMER_REQUEST
  };
};

export const getCustomerError = (error) => {
  return {
    type: GET_CUSTOMER_ERROR,
    error
  };
};

export const getCustomerSuccess = (customer) => {
  return {
    type: GET_CUSTOMER_SUCCESS,
    customer
  };
};

export const setCustomer = (customer) => {
  return {
    type: SET_CUSTOMER,
    customer
  };
};
