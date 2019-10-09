

export default function manageTool(state = {myweather: '', calcInput: ''
    }, action) {
 
 // console.log('all vehicles=',state.vehicles)
 
   switch (action.type) {
     case 'FOUND_INFO':
       return {myweather: action.foundInfo};

     case 'CALC_INPUT':
        let theString = action.input
        let message ;
       
              try {
                return {result: eval(theString)}; 
            } catch (e) {
                if (e instanceof SyntaxError) {
                   // alert('Wrong input, Try again');
                    return {message: "Wrong input, Try again"}
                } else {throw( e );}
            }
   
        
        
      default:
         return state;

  }}
      