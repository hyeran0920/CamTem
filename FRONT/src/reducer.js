// reducers.js 파일

import {
    FETCH_CAMPING_DATA_REQUEST,
    FETCH_CAMPING_DATA_SUCCESS,
    FETCH_CAMPING_DATA_FAILURE,
  } from "./action";
  
  const initialState = {
    campingData: [],
    loading: false,
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_CAMPING_DATA_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_CAMPING_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          campingData: action.payload,
        };
      case FETCH_CAMPING_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  