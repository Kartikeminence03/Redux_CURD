// reducers.js
import { combineReducers } from 'redux';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../store/action';

// Initial state for data
const initialDataState = {
    API_DATA: [],
  loading: false,
  error: null,
};

// Reducer for data
const dataReducer = (state = initialDataState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        API_DATA: action.payload,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        API_DATA: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
    API_DATA: dataReducer,
});

export default rootReducer;
