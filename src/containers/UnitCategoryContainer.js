import React, {Component} from 'react'
import {Form, Button, Input} from 'semantic-ui-react'

class UnitCategoryContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            units : {category: {
                Area:['Square Kilometer','Square Meter','Square Mile','Square Yard','Square Foot','Square Inch','Heactare','Acre'],
                FuelEconomy:['Miles per Gallon','Kilometer per Liter','Liter per 100 Km'],
                Length:['Kilometer','Meter','Decimeter','Santi Meter','Mili Meter','Micro Meter','Nano Meter','Mile','Yard','Foot','Inch'],
                Mass:['Metric Ton','KiloGram','Gram','MiliGram','MicroGram','US Ton','Stone','Pound','Once'],
                Speed:['Miles per Hour','Foot per Second','Kilometer per hour'],
                Temperature:['Celcius','Fahrenheit','Kelvin'],
            Volume:['Cubic Meter','Liter','MiliLiter','US Gallon','US Quart','US Pint','US fl ounce','Cubic Foot','Cubic Inch'],
    }},
            unitTypes: [],
            input1: null,
            input2: null,
            firstSubUnit: '',
            secondSubUnit: ''

        }
    }

    
    //const units = ['Area','Fuel Economy','Length','Mass','Speed','Temperature','Time','Volume']
            handleChange = (event) =>{
            var cat = this.state.units.category
                var myUnitTypes = cat[event.target.value]
                this.setState({
                    unitTypes: myUnitTypes, 
                    firstSubUnit: '',
                    secondSubUnit: ''
                })
            }

            handleSelect1 = (event) =>{
                this.setState({ firstSubUnit: event.target.value })
               
            }

            handleSelect2 = (event) =>{
                this.setState({ secondSubUnit: event.target.value })
            }

            handleInput1 = event =>{
                console.log('state in handleinput1=',this.state)
            
                 let value = event.target.value
                 let firstUnit = this.state.firstSubUnit
                 let secondUnit = this.state.secondSubUnit
                 let input1 = this.state.input1
                 let input2 = this.state.input2
                //  if(firstUnit === secondUnit){
                //     this.setState({input1: value, input2: value})
                //  }else if (firstUnit === "Kilometer" && secondUnit === "Meter"){
                //     this.setState({ input2: value*1000})
                //  }
                // while( value){
                //     debugger
                //     switch(input1 && input2){
                //         case firstUnit === secondUnit:
                //         this.setState({input1: value, input2: value})
                //         debugger
                //         break;
                //         case firstUnit === "Kilometer" && secondUnit === "Meter":
                            
                //         this.setState({ input2: value*1000})
                //         debugger
                //         break;
                //     }}
                debugger
                    
                }

            handleInput2 = event =>{
                this.setState({ input1: event.target.value })
            }

        



     render(){
        let categories = Object.keys(this.state.units.category)
   
        return(
            
            <div>
                
                
                <select name="category" multiple="" class="ui fluid dropdown" onChange={this.handleChange} >
                                <option value="">Select A Unit Category</option>
                                {categories.map(k=>( <option value={`${k}`}>{k}</option> ))}
                   </select>
                   <Form>
                          <Form.Field>
                              <input placeholder='first box'  value={this.state.input1} onChange={this.handleInput1}></input>
                                    <select name="first" multiple="" class="ui fluid dropdown" onChange={this.handleSelect1}>
                                        <option value="">Select A Unit</option>
                                        {this.state.unitTypes.map(c=>(
                                        <option valueFirst={`${c}`}>{c}</option>
                                       ))}
                                    </select>
                               <input placeholder='second box'  value={this.state.input2} onChange={this.handleInput2}></input>
                                    <select name="second" multiple="" class="ui fluid dropdown" onChange={this.handleSelect2}>
                                        <option value="">Select A Unit</option>
                                        {this.state.unitTypes.map(c=>( <option valueSecond={`${c}`}>{c}</option> ))}
                                    </select>
                          </Form.Field>
                    </Form>

            </div>

        )
    }
}

export default UnitCategoryContainer