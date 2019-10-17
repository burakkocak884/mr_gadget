export const findWeather = zipCode => {
    //debugger

      return (dispatch) => {
        //dispatch({ type: 'START_GETTING_WEATHER_INFO' });
        let API_KEY = process.env.REACT_APP_WEATHER_API_KEY
      const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${API_KEY}`

      //api.openweathermap.org/data/2.5/weather?zip=30022&appid=4a580b938e7bce4964ca8d24e3503b3c
        return fetch(url)
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
    