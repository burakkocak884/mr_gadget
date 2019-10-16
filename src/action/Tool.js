export const findWeather = city => {
    //debugger

      return (dispatch) => {
        //dispatch({ type: 'START_GETTING_WEATHER_INFO' });
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
        
        return fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${city},us&appid=${API_KEY}`)
          .then(response => response.json())
          .then(foundInfo =>  {
            console.log('returned info= ',foundInfo)
            
            dispatch({ type: 'FOUND_INFO', foundInfo})
           
          });
    }
    }

    export const calcInput = (input) =>{
       
        return{
            type: 'CALC_INPUT',
            input
        }
    }
    