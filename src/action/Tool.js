
import { dispatch } from "rxjs/internal/observable/pairs";

const axios = require('axios');

// findWeather function will fecth the data from external API with given zipCode
    export const findWeather = zipCode => {

          const getWeatherInfo = {
            method: 'GET',
            url: 'http://localhost:8000/weather',
            params: {postalCode: zipCode}
          }

          return (dispatch)=>{
            return axios.request(getWeatherInfo)
            .then((foundInfo) =>{ 
              dispatch({ type: 'FOUND_INFO', foundInfo})
            })
            .catch((error) => {console.log('error caught : ', error) })
          } 
         
  }

    export const calcInput = (input) =>{
          return{
            type: 'CALC_INPUT',
            input
        }
    }
    