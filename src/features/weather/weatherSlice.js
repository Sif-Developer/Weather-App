import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import weatherService from "./weatherService";

const initialState = {
  weather: null,
};

export const getWeatherByCoordinates = createAsyncThunk(
  "weather/getWeatherByCoordinates",
  async (lat, lon) => {
    try {
      return await weatherService.getWeatherByCoordinates(lat, lon);
    } catch (error) {
      console.error;
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    reset: (state) => {
      state.weather = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWeatherByCoordinates.fulfilled, (state, action) => {
      state.weather = action.payload;
    });
  },
});

export default weatherSlice.reducer;
