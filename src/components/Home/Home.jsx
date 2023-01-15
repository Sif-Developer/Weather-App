import React from 'react'
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay'
import WeatherForm from '../WeatherForm/WeatherForm'

const Home = () => {
  return (
      <div>
      <WeatherForm />
      <WeatherDisplay />
      </div>
  )
}

export default Home