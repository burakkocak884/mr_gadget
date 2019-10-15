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
                Mass:['mcg','mg','Gram','g','kg','oz','lb','mt','t'],
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
                 let value = parseInt(event.target.value)
                 let firstUnit = this.state.firstSubUnit
                 let secondUnit = this.state.secondSubUnit
                 this.setState({input1: value})
                 var convert = require('convert-units')
                 let theResult = convert(value).from(firstUnit).to(secondUnit)
                 this.setState({input2: theResult})
              }
               
                   
               

            handleInput2 = event =>{
                let value = parseInt(event.target.value)
                let firstUnit = this.state.firstSubUnit
                let secondUnit = this.state.secondSubUnit
                this.setState({input2: value})
                var convert = require('convert-units')
                let theResult = convert(value).from(secondUnit).to(firstUnit)
                this.setState({input1: theResult})
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