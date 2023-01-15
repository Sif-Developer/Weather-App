import React from "react";
import { Provider } from "react-redux";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import WeatherForm from "./components/WeatherForm/WeatherForm";
import {store} from "./app/store"
import Home from "./components/Home/Home";

function App() {
  return (
      <Provider store={store}>
    <div className="App">
      <Home/>
    </div>
    </Provider>
  );
}

export default App;
