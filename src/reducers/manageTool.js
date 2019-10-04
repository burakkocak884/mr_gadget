import { isDebuggerStatement } from "@babel/types";
import { isNumber } from "util";

export default function manageTool(state = {myweather: '', calcInput: ''
    }, action) {
 
 // console.log('all vehicles=',state.vehicles)
 
   switch (action.type) {
     case 'FOUND_INFO':
    
    return {myweather: action.foundInfo};

    case 'CALC_INPUT':
   let char = action.input
    let regex = /^\s*([-+]?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$/
    let cond =regex.test(char)
    let chAry = action.input.split('')
    let errorMessage ;
      let result;

  if(cond === true){
    chAry.map(c=>{
     let theNum = parseInt(c)
      if(theNum === NaN){
        let myChar =   c.toString()
        debugger
 
    }else if (theNum !== NaN){
    
      debugger
  }})
  
//debugger
  }else{
    //debugger
    errorMessage = "Wrong Input, try again";
    return errorMessage;
  }
     console.log('subtotal= ',errorMessage)
      //debugger

    default:
        return state;

 
 
      
       
 
 
       
 
   }}
      