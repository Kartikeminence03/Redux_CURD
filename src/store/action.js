// actions.js File Name

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';                 // Action types
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';                 // Action types
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';                 // Action types

// Action creators
export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
