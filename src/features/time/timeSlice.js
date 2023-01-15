import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import timeService from "./timeService";

const initialState = {
  time: {},
  error: null,
  status: "idle",
};

export const getTime = createAsyncThunk("time/getTime", async (timezone, countryCode) => {
    try {
      return await timeService.getTime(timezone, countryCode);
    } catch (error) {
      return error;
    }
  });
  

export const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTime.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTime.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.time = action.payload;
      })
      .addCase(getTime.rejected, (state, action) => {
        state.status = "failed";
        state.time = null;
        state.error = action.error.message;
      });
  },
});

export default timeSlice.reducer;
