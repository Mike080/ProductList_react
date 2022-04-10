import axios from 'axios';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../constants';

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (product) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: product,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest);
    axios
      .get('https://smktesting.herokuapp.com/api/products/')
      .then((response) => {
        const products = response.data;
        dispatch(fetchProductsSuccess(products));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchProductsFailure(errorMessage));
      });
  };
};
