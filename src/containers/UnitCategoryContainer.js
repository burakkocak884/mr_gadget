import React, {Component} from 'react'
import {Form, Button, Input} from 'semantic-ui-react'

class UnitCategoryContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            units : {category: {
                Area:['Square Kilometer','Square Meter','Square Mile','Square Yard','Square Foot','Square Inch','Heactare','Acre'],
                FuelEconomy:['Miles per Gallon','Kilometer per Liter','Liter per 100 Km'],
                Length:['Kilometer','Meter','DeciMeter','CentiMeter','MiliMeter','MicroMeter','NanoMeter','Mile','Yard','Foot','Inch'],
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
            
                 let value = parseInt(event.target.value)
                 let firstUnit = this.state.firstSubUnit
                 let secondUnit = this.state.secondSubUnit
                 this.setState({input1: value})
                  let input1 = this.state.input1
                  let input2 = this.state.input2
                  if(firstUnit === secondUnit){ this.setState({input1: value, input2: value})}
                    else if (firstUnit === "Kilometer" && secondUnit === "Meter"){this.setState({ input2: value*1000})}
                    else if (firstUnit === "Kilometer" && secondUnit === "DeciMeter"){this.setState({ input2: value*10000})}
                    else if (firstUnit === "Kilometer" && secondUnit === "CentiMeter"){this.setState({ input2: value*100000})}
                    else if (firstUnit === "Kilometer" && secondUnit === "MiliMeter"){this.setState({ input2: value*1000000})}
                    else if (firstUnit === "Kilometer" && secondUnit === "MicroMeter"){this.setState({ input2: value*1000000000})}
                    else if (firstUnit === "Kilometer" && secondUnit === "NanoMeter"){this.setState({ input2: value*1000000000000})}
                    else if (firstUnit === "Kilometer" && secondUnit === "Mile"){this.setState({ input2: value/1.609})}
                    else if (firstUnit === "Kilometer" && secondUnit === "Yard"){this.setState({ input2: value*1093.61})}
                    else if (firstUnit === "Kilometer" && secondUnit === "Foot"){ this.setState({ input2: value*3280.84})}
                    else if (firstUnit === "Kilometer" && secondUnit === "Inch"){this.setState({ input2: value*39370.1})}
                    
                    else if (firstUnit === "Meter" && secondUnit === "Kilometer"){this.setState({ input2: value/1000})}
                    else if (firstUnit === "Meter" && secondUnit === "DeciMeter"){this.setState({ input2: value*10})}
                    else if (firstUnit === "Meter" && secondUnit === "CentiMeter"){this.setState({ input2: value*100})}
                    else if (firstUnit === "Meter" && secondUnit === "MiliMeter"){this.setState({ input2: value*1000})}
                    else if (firstUnit === "Meter" && secondUnit === "MicroMeter"){this.setState({ input2: value*1000000})}
                    else if (firstUnit === "Meter" && secondUnit === "NanoMeter"){this.setState({ input2: value*1000000000})}
                    else if (firstUnit === "Meter" && secondUnit === "Mile"){this.setState({ input2: value*0.000621371})}
                    else if (firstUnit === "Meter" && secondUnit === "Yard"){this.setState({ input2: value*1.09361})}
                    else if (firstUnit === "Meter" && secondUnit === "Foot"){this.setState({ input2: value*3.28084})}
                    else if (firstUnit === "Meter" && secondUnit === "Inch"){this.setState({ input2: value*39.3701})}
                      
                      
                    else if (firstUnit === "DeciMeter" && secondUnit === "Kilometer"){this.setState({ input2: value/10000})}
                    else if (firstUnit === "DeciMeter" && secondUnit === "Meter"){this.setState({ input2: value/10})}
                    else if (firstUnit === "DeciMeter" && secondUnit === "CentiMeter"){this.setState({ input2: value*10})}
                    else if (firstUnit === "DeciMeter" && secondUnit === "MiliMeter"){this.setState({ input2: value*100})}
                    else if (firstUnit === "DeciMeter" && secondUnit === "MicroMeter"){this.setState({ input2: value*100000})}
                    else if (firstUnit === "DeciMeter" && secondUnit === "NanoMeter"){this.setState({ input2: value*100000000})}
                    else if (firstUnit === "DeciMeter" && secondUnit === "Mile"){this.setState({ input2: value*0.0000621371})}
                    else if (firstUnit === "DeciMeter" && secondUnit === "Yard"){this.setState({ input2: value*0.109361})}
                    else if (firstUnit === "DeciMeter" && secondUnit === "Foot"){this.setState({ input2: value*0.328084})}
                    else if (firstUnit === "DeciMeter" && secondUnit === "Inch"){this.setState({ input2: value*3.93701})}

                    
                    else if (firstUnit === "CentiMeter" && secondUnit === "Kilometer"){this.setState({ input2: value/10000})}
                    else if (firstUnit === "CentiMeter" && secondUnit === "Meter"){this.setState({ input2: value/100})}
                    else if (firstUnit === "CentiMeter" && secondUnit === "DeciMeter"){this.setState({ input2: value/10})}
                    else if (firstUnit === "CentiMeter" && secondUnit === "MiliMeter"){this.setState({ input2: value*10})}
                    else if (firstUnit === "CentiMeter" && secondUnit === "MicroMeter"){this.setState({ input2: value*10000})}
                    else if (firstUnit === "CentiMeter" && secondUnit === "NanoMeter"){this.setState({ input2: value*10000000})}
                    else if (firstUnit === "CentiMeter" && secondUnit === "Mile"){this.setState({ input2: value*0.00000621371})}
                    else if (firstUnit === "CentiMeter" && secondUnit === "Yard"){this.setState({ input2: value*0.0109361})}
                    else if (firstUnit === "CentiMeter" && secondUnit === "Foot"){this.setState({ input2: value*0.0328084})}
                    else if (firstUnit === "CentiMeter" && secondUnit === "Inch"){this.setState({ input2: value*0.393701})}

                    
                    else if (firstUnit === "MiliMeter" && secondUnit === "Kilometer"){this.setState({ input2: value/100000})}
                    else if (firstUnit === "MiliMeter" && secondUnit === "Meter"){this.setState({ input2: value/1000})}
                    else if (firstUnit === "MiliMeter" && secondUnit === "DeciMeter"){this.setState({ input2: value/100})}
                    else if (firstUnit === "MiliMeter" && secondUnit === "CentiMeter"){this.setState({ input2: value*10})}
                    else if (firstUnit === "MiliMeter" && secondUnit === "MicroMeter"){this.setState({ input2: value*1000})}
                    else if (firstUnit === "MiliMeter" && secondUnit === "NanoMeter"){this.setState({ input2: value*1000000})}
                    else if (firstUnit === "MiliMeter" && secondUnit === "Mile"){this.setState({ input2: value*0.000000621371})}
                    else if (firstUnit === "MiliMeter" && secondUnit === "Yard"){this.setState({ input2: value*0.00109361})}
                    else if (firstUnit === "MiliMeter" && secondUnit === "Foot"){this.setState({ input2: value*0.00328084})}
                    else if (firstUnit === "MiliMeter" && secondUnit === "Inch"){this.setState({ input2: value*0.0393701})}

                   
                    else if (firstUnit === "MicroMeter" && secondUnit === "Kilometer"){this.setState({ input2: value/1000000000})}
                    else if (firstUnit === "MicroMeter" && secondUnit === "Meter"){this.setState({ input2: value/1000000})}
                    else if (firstUnit === "MicroMeter" && secondUnit === "DeciMeter"){this.setState({ input2: value/10000})}
                    else if (firstUnit === "MicroMeter" && secondUnit === "CentiMeter"){this.setState({ input2: value/10000})}
                    else if (firstUnit === "MicroMeter" && secondUnit === "MiliMeter"){this.setState({ input2: value/1000})}
                    else if (firstUnit === "MicroMeter" && secondUnit === "NanoMeter"){this.setState({ input2: value*1000})}
                    else if (firstUnit === "MicroMeter" && secondUnit === "Mile"){this.setState({ input2: value*0.000000000621371})}
                    else if (firstUnit === "MicroMeter" && secondUnit === "Yard"){this.setState({ input2: value*0.00000109361})}
                    else if (firstUnit === "MicroMeter" && secondUnit === "Foot"){this.setState({ input2: value*0.00000328084})}
                    else if (firstUnit === "MicroMeter" && secondUnit === "Inch"){this.setState({ input2: value*0.0000393701})}
                    
                    
                    else if (firstUnit === "NanoMeter" && secondUnit === "Kilometer"){this.setState({ input2: value/1000000000000000})}
                    else if (firstUnit === "NanoMeterr" && secondUnit === "Meter"){this.setState({ input2: value/1000000000})}
                    else if (firstUnit === "NanoMeter" && secondUnit === "DeciMeter"){this.setState({ input2: value/10000000})}
                    else if (firstUnit === "NanoMeter" && secondUnit === "CentiMeter"){this.setState({ input2: value/10000000})}
                    else if (firstUnit === "NanoMeter" && secondUnit === "MiliMeter"){this.setState({ input2: value/1000000})}
                    else if (firstUnit === "NanoMeter" && secondUnit === "MicroMeter"){this.setState({ input2: value/1000})}
                    else if (firstUnit === "NanoMeter" && secondUnit === "Mile"){this.setState({ input2: value*0.000000000000621371})}
                    else if (firstUnit === "NanoMeter" && secondUnit === "Yard"){this.setState({ input2: value*0.00000000109361})}
                    else if (firstUnit === "NanoMeter" && secondUnit === "Foot"){this.setState({ input2: value*0.00000000328084})}
                    else if (firstUnit === "NanoMeter" && secondUnit === "Inch"){this.setState({ input2: value*0.0000000393701})}

                   
                    else if (firstUnit === "Mile" && secondUnit === "Kilometer"){this.setState({ input2: value*1.60934})}
                    else if (firstUnit === "Mile" && secondUnit === "Meter"){this.setState({ input2: value*1609.34})}
                    else if (firstUnit === "Mile" && secondUnit === "DeciMeter"){this.setState({ input2: value*16093.4})}
                    else if (firstUnit === "Mile" && secondUnit === "CentiMeter"){this.setState({ input2: value*160934})}
                    else if (firstUnit === "Mile" && secondUnit === "MiliMeter"){this.setState({ input2: value*1609340})}
                    else if (firstUnit === "Mile" && secondUnit === "MicroMeter"){this.setState({ input2: value*1609340000})}
                    else if (firstUnit === "Mile" && secondUnit === "NanoMeter"){this.setState({ input2: value*1609340000000})}
                    else if (firstUnit === "Mile" && secondUnit === "Yard"){this.setState({ input2: value*1760})}
                    else if (firstUnit === "Mile" && secondUnit === "Foot"){this.setState({ input2: value*5280})}
                    else if (firstUnit === "Mile" && secondUnit === "Inch"){this.setState({ input2: value*63360})}

                   
                    else if (firstUnit === "Yard" && secondUnit === "Kilometer"){this.setState({ input2: value*0.0009144})}
                    else if (firstUnit === "Yard" && secondUnit === "Meter"){this.setState({ input2: value*0.9144})}
                    else if (firstUnit === "Yard" && secondUnit === "DeciMeter"){this.setState({ input2: value*9.144})}
                    else if (firstUnit === "Yard" && secondUnit === "CentiMeter"){this.setState({ input2: value*91.44})}
                    else if (firstUnit === "Yard" && secondUnit === "MiliMeter"){this.setState({ input2: value*914.4})}
                    else if (firstUnit === "Yard" && secondUnit === "MicroMeter"){this.setState({ input2: value*914400})}
                    else if (firstUnit === "Yard" && secondUnit === "NanoMeter"){this.setState({ input2: value*914400000})}
                    else if (firstUnit === "Yard" && secondUnit === "Mile"){this.setState({ input2: value*0.000568182})}
                    else if (firstUnit === "Yard" && secondUnit === "Foot"){this.setState({ input2: value*3})}
                    else if (firstUnit === "Yard" && secondUnit === "Inch"){this.setState({ input2: value*36})}

                    
                    else if (firstUnit === "Foot" && secondUnit === "Kilometer"){ this.setState({ input2: value*0.0003048})}
                    else if (firstUnit === "Foot" && secondUnit === "Meter"){this.setState({ input2: value*0.3048})}
                    else if (firstUnit === "Foot" && secondUnit === "DeciMeter"){this.setState({ input2: value*3.048})}
                    else if (firstUnit === "Foot" && secondUnit === "CentiMeter"){this.setState({ input2: value*30.48})}
                    else if (firstUnit === "Foot" && secondUnit === "MiliMeter"){this.setState({ input2: value*304.8})}
                    else if (firstUnit === "Foot" && secondUnit === "MicroMeter"){this.setState({ input2: value*304800})}
                    else if (firstUnit === "Foot" && secondUnit === "NanoMeter"){this.setState({ input2: value*304800000})}
                    else if (firstUnit === "Foot" && secondUnit === "Mile"){this.setState({ input2: value*0.000189394})}
                    else if (firstUnit === "Foot" && secondUnit === "Yard"){this.setState({ input2: value*0.333333})}
                    else if (firstUnit === "Foot" && secondUnit === "Inch"){this.setState({ input2: value*12})}

                   
                    else if (firstUnit === "Inch" && secondUnit === "Kilometer"){this.setState({ input2: value/39370.1})}
                    else if (firstUnit === "Inch" && secondUnit === "Meter"){this.setState({ input2: value*0.0254})}
                    else if (firstUnit === "Inch" && secondUnit === "DeciMeter"){this.setState({ input2: value*0.254})}
                    else if (firstUnit === "Inch" && secondUnit === "CentiMeter"){this.setState({ input2: value*2.54})}
                    else if (firstUnit === "Inch" && secondUnit === "MiliMeter"){this.setState({ input2: value*25.4})}
                    else if (firstUnit === "Inch" && secondUnit === "MicroMeter"){this.setState({ input2: value*25400})}
                    else if (firstUnit === "Inch" && secondUnit === "NanoMeter"){this.setState({ input2: value*25400000})}
                    else if (firstUnit === "Inch" && secondUnit === "Mile"){this.setState({ input2: value*0.000015783})}
                    else if (firstUnit === "Inch" && secondUnit === "Yard"){this.setState({ input2: value*0.0277778})}
                    else if (firstUnit === "Inch" && secondUnit === "Foot"){this.setState({ input2: value*0.0833333})}
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