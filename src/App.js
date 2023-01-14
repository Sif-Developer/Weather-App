import React from "react";
import { Provider } from "react-redux";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import WeatherForm from "./components/WeatherForm/WeatherForm";
import {store} from "./app/store"

function App() {
  return (
      <Provider store={store}>
    <div className="App">
      <WeatherForm />
      <WeatherDisplay />
    </div>
    </Provider>
  );
}

export default App;
