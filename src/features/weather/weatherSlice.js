


export const getWeather = createAsyncThunk("weather/getWeather", async(city,country)=>{
    const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=a6df6f401c9554abaf1170a36abaf462")
})