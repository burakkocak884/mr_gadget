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


    render(){
         console.log('weather',this.props.myweather)
         //debugger
         const{myweather} = this.props
        
         if(this.props.myweather.name){
             let minTemp = Math.floor((9/5) *(this.props.myweather.main.temp_min - 273) + 32)
             let maxTemp = Math.floor((9/5) *(this.props.myweather.main.temp_max - 273) + 32)
            
         

        return(
            <div className='weather-form'>
                <p>Weather info for: {myweather.name} in {myweather.sys.country}</p>
                <p>Description: {myweather.weather[0].main} , {myweather.weather[0].description} </p>
                <p>Wind speed: {myweather.wind.speed} mph</p>
                <p>Humidity: {myweather.main.humidity} %</p>
                <p>Air Pressure: {myweather.main.pressure} hPa</p>
                <p>Lowest temp: {minTemp} F, Highest temp: {maxTemp} F</p>
               
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
                    <p>Enter a city</p>
                    

                   
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