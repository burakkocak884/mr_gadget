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
   
let regNum = /\w/
 let theNums = char.match(regNum)
 
    let cond =regex.test(char)
    let chAry = action.input.split('')
    let errorMessage ;
    let result = 0;
      let currentNum = 0;
      let secondNum = 0;
      let fNums = 0;
      let sNums = 0;
      let operators ={}
      let numbers = {}
      let counter = 0 ;
      //debugger
      let endingInd = 0;
      let beginningInd = 0;

  if(cond === true){
    result = chAry.join('')
    result = eval(result)
  
  debugger

  
 return result;
     
  

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
      