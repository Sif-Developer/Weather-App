import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import weatherService from "./weatherService";

const initialState = {
  weather: {},
  error: null,
  status: "idle",
};

export const getWeather = createAsyncThunk("weather/getWeather", async (city) => {
  try {
    return await weatherService.getWeather(city);
  } catch (error) {
    return error;
  }
});

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.weather = action.payload;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
