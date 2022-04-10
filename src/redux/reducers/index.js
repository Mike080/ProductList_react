import { combineReducers } from 'redux';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../constants';

const initialState = {
  product: [],
  loading: false,
  error: '',
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { loading: false, product: action.payload, error: '' };
    case FETCH_PRODUCTS_FAILURE:
      return { product: [], error: action.payload, loading: false };
    default:
      return state;
  }
};

const reducer = combineReducers({ products: productsReducer });

export default reducer;
