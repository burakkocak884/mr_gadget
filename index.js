const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')

require('dotenv').config()

const app = express()

app.use(cors())

app.get('/weather', (req, res) => {
 console.log("request : ",req);
    const weatherData = {
        method: 'GET',
        url: `http://api.openweathermap.org/data/2.5/weather?zip=${req.query.postalCode}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    }
   
    axios.request(weatherData).then((response) =>{
        res.json(response.data)
    }).catch((error) => {
         console.log('error', error);
    })
 
})

app.listen(8000, ()=> console.log('Server is running on port : ', {PORT}))

