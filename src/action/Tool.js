export const findWeather = city => {
    //debugger

      return (dispatch) => {
        //dispatch({ type: 'START_GETTING_WEATHER_INFO' });
        let theKey = '4a580b938e7bce4964ca8d24e3503b3c'
        return fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${city},us&appid=${theKey}`)
          .then(response => response.json())
          .then(foundInfo =>  {
            console.log('returned info= ',foundInfo)
            
            dispatch({ type: 'FOUND_INFO', foundInfo})
           
          });
    }
    }
    