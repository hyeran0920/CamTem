// actions.js 파일

export const FETCH_CAMPING_DATA_REQUEST = "FETCH_CAMPING_DATA_REQUEST";
export const FETCH_CAMPING_DATA_SUCCESS = "FETCH_CAMPING_DATA_SUCCESS";
export const FETCH_CAMPING_DATA_FAILURE = "FETCH_CAMPING_DATA_FAILURE";

export const fetchCampingDataRequest = () => ({
  type: FETCH_CAMPING_DATA_REQUEST,
});

export const fetchCampingDataSuccess = (data) => ({
  type: FETCH_CAMPING_DATA_SUCCESS,
  payload: data,
});

export const fetchCampingDataFailure = (error) => ({
  type: FETCH_CAMPING_DATA_FAILURE,
  payload: error,
});
