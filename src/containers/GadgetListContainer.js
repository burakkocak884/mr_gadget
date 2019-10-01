import React, {Component} from 'react';
import {Link} from 'react-router-dom' ;
import Calculator from '../components/Calculator'
const GadgetListContainer = () => {

    let theGadgets = ['Calculator','Unit Converter','Distance Calculator'];

  
        return(
        


                <>
                <h1>Gadget List</h1>
                <ul>
                                    {theGadgets.map(g => (
                   <li><a href=''>{g}</a></li>
                ))}
                </ul>
                <Calculator />
                
                </>
        )
    
}
export default GadgetListContainer;