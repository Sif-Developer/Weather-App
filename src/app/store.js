import { configureStore } from "@reduxjs/toolkit";

import weather from "../features/weather/weatherSlice"

export const store = configureStore({
  reducer: {
    weather
  },
});
