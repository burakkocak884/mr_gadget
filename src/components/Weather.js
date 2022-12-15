import React,{Component} from 'react';
 import {Form, Button, Input} from 'semantic-ui-react'
 import {connect} from 'react-redux'
 import {findWeather} from '../action/Tool'


class Weather extends Component{

    constructor(props){
        super(props)
        
        this.state={
            city: ''
        }
        }

                // handleChange will detect the change in value that is put in from the form
                handleChange = event =>{this.setState({[event.target.name]: event.target.value})}

                //handleSubmit inserts given zipcode to findWeather function that takes the zip code to reducer.
                handleSubmit = event =>{
                   event.preventDefault()
                   this.props.findWeather(this.state.city)
                   this.setState({city: ''})
                 }
                // this function will convert given degree to Compass expression
                   degToCompass(num) {
                        var val = Math.floor((num / 22.5) + 0.5);
                        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
                        return arr[(val % 16)];
                    }


    render(){
        let newDate = new Date()
       const{myweather} = this.props
        if(this.props.myweather.name){
          //next two lines convert temperature out put in Fathrenheit to display for max and min
             let minTemp = Math.floor((9/5) *(this.props.myweather.main.temp_min - 273) + 32)
             let maxTemp = Math.floor((9/5) *(this.props.myweather.main.temp_max - 273) + 32)
             //next line will convert wind speed to miles per hour.
             let theSpeed = Math.floor((3.6/1.609) * (this.props.myweather.wind.speed))
         

        return(
            <div className='weather-form'>
                <p className='tool-headline'>Weather Info</p>
                <p>Time: <span className='weather-data'>{newDate.getHours()}:{newDate.getMinutes()}:{newDate.getSeconds()}</span></p>
                <p><b><span className='weather-data'>{myweather.name}</span></b> in <span className='weather-data'>{myweather.sys.country}</span></p>
                <p>Forecast shows <span className='weather-data'>{myweather.weather[0].description}</span> at <span className='weather-data'>{Math.floor((minTemp + maxTemp)/2)}</span> F</p>
                <p>Wind Speed: ~<span className='weather-data'>{theSpeed}</span> mph <span className='weather-data'>{this.degToCompass(this.props.myweather.wind.deg)}</span></p>
                <p>Humidity: <span className='weather-data'>{myweather.main.humidity}</span> %</p>
                <p>Air Pressure: <span className='weather-data'>{myweather.main.pressure}</span> hPa</p>
                
               
                <Form >
                    <Form.Field>
                    
                        <Input  type='text' onChange={this.handleChange} name ='city' placeholder='US Zip Code'></Input>
                    </Form.Field>

                    <Form.Field>
                    <Button type="submit" onClick={this.handleSubmit}>Search </Button>
                    </Form.Field>
                </Form>
                </div>
        )}else{
            let theError;
            if(this.props.myweather.cod){
   theError = (<p>{this.props.myweather.message}</p>)
            }
            return(
                <div className='weather-form'>
                     <p className='tool-headline'>Weather Info</p>
                    
                    <p>Enter Zip Code</p>
                    <p>for Weather Information</p>
                    

                   
                    <Form >
                        <Form.Field>
                        
                            <input  type='text' onChange={this.handleChange} name ='city' placeholder='US Zip Code'></input>
                        </Form.Field>
    
                        <Form.Field>
                        <Button type="submit" onClick={this.handleSubmit}>Search </Button>
                        </Form.Field>
                    </Form>
                    <p className='city-error'>{theError}</p>
                    </div>
            )}

        
    }
}
const mapStateToProps = state =>{
    return{
        myweather: state.myweather
    }
}
export default connect(mapStateToProps,{findWeather})(Weather)