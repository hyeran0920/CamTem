import { configureStore, createSlice } from "@reduxjs/toolkit";

//여기가 state들을 보관하는 파일
const weatherData = createSlice({
  name: "weatherData",
  initialState: [],
  reducers: {
    changeData(state, action) {
      return action.payload;
    },
  },
});
export const { changeData } = weatherData.actions;

export default configureStore({
  reducer: {
    weatherData: weatherData.reducer,
  },
});
