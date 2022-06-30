

// findWeather function will fecth the data from external API with given zipCode
    export const findWeather = zipCode => {
          const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
          
          const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${API_KEY}`
        return (dispatch) => {
            return fetch(url)
              .then(response => response.json())
              .then(foundInfo =>  {
              dispatch({ type: 'FOUND_INFO', foundInfo})
              });
    }}

    export const calcInput = (input) =>{
          return{
            type: 'CALC_INPUT',
            input
        }
    }
    