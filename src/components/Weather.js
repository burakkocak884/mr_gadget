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


    handleChange = event =>{
        this.setState({
        
            [event.target.name]: event.target.value
        })
        
                }


                handleSubmit = event =>{
                     //console.log(this.state)
                    //debugger
                    event.preventDefault()
                    // this.state.year = parseInt(this.state.year)
                
                    this.props.findWeather(this.state.city)
                    this.setState({
                        city: ''
                        
                    }) }

                   degToCompass(num) {
                        var val = Math.floor((num / 22.5) + 0.5);
                        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
                        return arr[(val % 16)];
                    }


    render(){
        
        console.log('pros on weather.js=',this.props)
         //debugger
         const{myweather} = this.props
        
         if(this.props.myweather.name){
          
             let minTemp = Math.floor((9/5) *(this.props.myweather.main.temp_min - 273) + 32)
             let maxTemp = Math.floor((9/5) *(this.props.myweather.main.temp_max - 273) + 32)
             let theSpeed = Math.floor((3.6/1.609) * (this.props.myweather.wind.speed))
         

        return(
            <div className='weather-form'>
                <p>City: <b>{myweather.name}</b> in {myweather.sys.country}</p>
                <p>Forecast is {myweather.weather[0].description} at {(minTemp + maxTemp)/2} F</p>
                <p>Wind Speed: ~{theSpeed} mph {this.degToCompass(this.props.myweather.wind.deg)}</p>
                <p>Humidity: {myweather.main.humidity} %</p>
                <p>Air Pressure: {myweather.main.pressure} hPa</p>
                
               
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
    console.log('my state in weather',state)
    return{
        myweather: state.myweather

    }
}
export default connect(mapStateToProps,{findWeather})(Weather)