import React, {Component} from 'react'
import {Form, Button, Input} from 'semantic-ui-react'

const UnitCategoryContainer= () =>{

    const units1  ={category: {
                                Area:['Square Kilometer','Square Meter','Square Mile','Square Yard','Square Foot','Square Inch','Heactare','Acre'],
                                FuelEconomy:['Miles per Gallon','Kilometer per Liter','Liter per 100 Km'],
                                Length:['Kilometer','Meter','Decimeter','Santi Meter','Mili Meter','Micro Meter','Nano Meter','Mile','Yard','Foot','Inch'],
                                Mass:['Metric Ton','KiloGram','Gram','MiliGram','MicroGram','US Ton','Stone','Pound','Once','','','',''],
                                Speed:[],
                                Temperature:[],
                                Time:[],
                            Volume:[],
                    }
                }
    const units = ['Area','Fuel Economy','Length','Mass','Speed','Temperature','Time','Volume']
  
        return(
            <div>
                
                
                <select name="category" multiple="" class="ui fluid dropdown">
                <option value="">Select A Category</option>
                      {units.map(u=>(
                         <option value={`${u}`}>{u}</option>
                      ))}
                   </select>
                   <Form>
                          <Form.Field>
                              <input placeholder='first box'></input>
                                    <select name="first" multiple="" class="ui fluid dropdown">

                                    </select>
                               <input placeholder='second box'></input>
                                    <select name="second" multiple="" class="ui fluid dropdown">

                                    </select>
                          </Form.Field>
                      </Form>

            </div>

        )
    }

export default UnitCategoryContainer