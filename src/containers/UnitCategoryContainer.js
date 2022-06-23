import React, {Component} from 'react'
import {Form, Button, Input} from 'semantic-ui-react'

class UnitCategoryContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            units : {category: {
                Area:['mm2','cm2','m2','ha','km2','in2','ft2','ac','mi2'],
                FuelEconomy:['Miles per Gallon','Kilometer per Liter','Liter per 100 Km'],
                Length:['km','m','dm','cm','mm','mi','ft','in'],
                Mass:['mcg','mg','g','kg','oz','lb','mt','t'],
                Speed:['m/s','km/h','m/h','knot','ft/s'],
                Temperature:['C','F','K','R'],
                Volume:['mm3','cm3','ml','l','kl','m3','km3','tsp','Tbs','in3','fl-oz','cup','pnt','qt','gal','ft3','yd3'],
                VolumeFlowRate: ['mm3/s','cm3/s','ml/s','cl/s','dl/s','l/s','l/min','l/h','kl/s','kl/min','kl/h','m3/s','m3/min','m3/h','km3/s','tsp/s','Tbs/s','in3/s','in3/min','inc3/h','fl-oz/s','fl-oz/min','fl-oz/h','cup/s','pnt/s','pnt/min','pnt/h','qt/s','gal/s','gal/min','gal/h','ft3/s','ft3/min','ft3/h','yd3/s','yd3/min','yd3/h'],
                Angle:['deg','rad','grad','arcmin','arcsec'],
    }},
            unitTypes: [],
            input1: 0,
            input2: 0,
            firstSubUnit: '',
            secondSubUnit: '',
            disableInput: true,
            disableDropDown: true,
            category: ''

        }
    }

    
    //const units = ['Area','Fuel Economy','Length','Mass','Speed','Temperature','Time','Volume']
            handleSelectCategory = (event) =>{
               
                var cat = this.state.units.category
                var myUnitTypes = cat[event.target.value]
                this.setState({
                    unitTypes: myUnitTypes, 
                    firstSubUnit: '',
                    secondSubUnit: '',
                    input1: 0,
                    input2: 0,
                    category: event.target.value
                })
            }


            handleSelect1 = (event) =>{this.setState({ firstSubUnit: event.target.value,  input1: 0, input2: 0})}

            handleSelect2 = (event) =>{this.setState({ secondSubUnit: event.target.value, input1: 0, input2: 0})}

            handleInput1 = event =>{

              if(event.target.value !== '')
                {
                    let value = parseInt(event.target.value)
                    let firstUnit = this.state.firstSubUnit
                    let secondUnit = this.state.secondSubUnit
                    this.setState({input1: value});

                    if(firstUnit === 'Miles per Gallon'|| firstUnit === 'Kilometer per Liter'||firstUnit === 'Liter per 100 Km')
                    {  
                    if (firstUnit === "Miles per Gallon" && secondUnit === "Kilometer per Liter"){this.setState({ input2: value/2.352})}
                        else if (firstUnit === "Miles per Gallon" && secondUnit === "Liter per 100 Km"){this.setState({ input2: value*253.215})}
                        else if (firstUnit === "Kilometer per Liter" && secondUnit === "Miles per Gallon"){this.setState({ input2: value*2.35215})}
                        else if (firstUnit === "Kilometer per Liter" && secondUnit === "Liter per 100 Km"){this.setState({ input2: 100/value})}
                        else if (firstUnit === "Liter per 100 Km" && secondUnit === "Miles per Gallon"){this.setState({ input2: 235.215/value})}
                        else if (firstUnit === "Liter per 100 Km" && secondUnit === "Kilometer per Liter"){this.setState({ input2: 100/value})}
            
                    }
                    else
                    {
                        var convert = require('convert-units')
                        let theResult = convert(value).from(firstUnit).to(secondUnit)
                        this.setState({input2: theResult})
                    }
                }
                else
                {
                    this.setState({input1: 0, input2: 0});
                }
            }
               
                   
               

            handleInput2 = event =>{
                
                if(event.target.value !== '')
                {
                    let value = parseInt(event.target.value)
                    let firstUnit = this.state.firstSubUnit
                    let secondUnit = this.state.secondSubUnit
                    this.setState({input2: value})
                    var convert = require('convert-units')
                    let theResult = convert(value).from(secondUnit).to(firstUnit)
                    this.setState({input1: theResult})
                }else
                {
                    this.setState({input1: 0, input2: 0});
                }
                
            }

     render(){
     
        let categories = Object.keys(this.state.units.category)
        let disableDropDown = true;
        let disableInput = true;

        if(this.state.category !== '')
            disableDropDown = false;

        if(!disableDropDown && this.state.firstSubUnit !== '' && this.state.secondSubUnit !== '')
            disableInput = false;
   
        return(
            
            <div>
                <p className='tool-headline'>Unit Convertor</p>
                <select name="category" multiple="" class="ui fluid dropdown" onChange={this.handleSelectCategory} >
                                <option value="">Select A Unit Category</option>
                                {categories.map(k=>( <option value={`${k}`}>{k}</option> ))}
                   </select>
                   <Form>
                          <Form.Field>
                              <input id = "first-input" className='unit-input' placeholder='first box' disabled = {disableInput} value={this.state.input1} onChange={this.handleInput1}></input>
                                    <select name="first" multiple="" class="ui fluid dropdown" disabled = {disableDropDown} onChange={this.handleSelect1}>
                                        <option value="">Select First Unit</option>
                                        {this.state.unitTypes.map(c=>(
                                        <option valueFirst={`${c}`}>{c}</option>
                                       ))}
                                    </select>
                               <input id = "second-input" className='unit-input' placeholder='second box' disabled = {disableInput} value={this.state.input2} onChange={this.handleInput2}></input>
                                    <select name="second" multiple="" class="ui fluid dropdown" disabled = {disableDropDown} onChange={this.handleSelect2}>
                                        <option value="">Select Second Unit</option>
                                        {this.state.unitTypes.map(c=>( <option valueSecond={`${c}`}>{c}</option> ))}
                                    </select>
                          </Form.Field>
                    </Form>
             </div>

        )
    }
}

export default UnitCategoryContainer