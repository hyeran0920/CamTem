// import { configureStore, createSlice } from "@reduxjs/toolkit";

// //여기가 state들을 보관하는 파일
// const weatherData = createSlice({
//   name: "weatherData",
//   initialState: [],
//   reducers: {
//     changeData(state, action) {
//       return action.payload;
//     },
//   },
// });
// export const { changeData } = weatherData.actions;

// export default configureStore({
//   reducer: {
//     weatherData: weatherData.reducer,
//   },
// });

import { configureStore, createSlice } from "@reduxjs/toolkit";

//여기가 state들을 보관하는 파일
const weatherData = createSlice({
  name: "weatherData",
  initialState: [],
  reducers: {
    changeWeatherData(state, action) {
      return action.payload;
    },
  },
});
export const { changeWeatherData } = weatherData.actions;

const campingData = createSlice({
  name: "campingData",
  initialState: [],
  reducers: {
    changeCampingData(state, action) {
      return action.payload;
    },
  },
});
export const { changeCampingData } = campingData.actions;

export default configureStore({
  reducer: {
    weatherData: weatherData.reducer,
    campingData: campingData.reducer,
  },
});