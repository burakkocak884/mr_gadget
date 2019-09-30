import React, {Component} from 'react';
import {Link} from 'react-router-dom' ;
const GadgetListContainer = () => {

    let theGadgets = ['Calculator','Unit Converter',''];

  
        return(
        


                <>
                <h1>Gadget List</h1>
                <ul>
                                    {theGadgets.map(g => (
                   <li><a href=''>{g}</a></li>
                ))}
                </ul>
                
                </>
        )
    
}
export default GadgetListContainer;