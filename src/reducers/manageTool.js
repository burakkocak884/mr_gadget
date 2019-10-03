import { isDebuggerStatement } from "@babel/types";

export default function manageTool(state = {myweather: ''
    }, action) {
 
 // console.log('all vehicles=',state.vehicles)
 
   switch (action.type) {
     case 'FOUND_INFO':
    
    return {myweather: action.foundInfo};


    default:
        return state;

 
 
      
       
 
 
       
 
   }}
      