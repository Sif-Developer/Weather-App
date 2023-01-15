import { configureStore } from "@reduxjs/toolkit";

import weather from "../features/weather/weatherSlice"
import time from "../features/time/timeSlice"
export const store = configureStore({
  reducer: {
    weather,
    time,
  },
});
