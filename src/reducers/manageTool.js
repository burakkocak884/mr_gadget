

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
        let result = 0;
      
        if(cond === true){
              result = chAry.join('')
              result = eval(result)
             return result;
        }else{
               errorMessage = "Wrong Input, try again";
            return errorMessage;
        }
        
      default:
         return state;

  }}
      