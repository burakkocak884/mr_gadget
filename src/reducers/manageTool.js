

export default function manageTool(state = {myweather: '', calcInput: ''
    }, action) {
  switch (action.type) {
    
     case 'FOUND_INFO':
       return {myweather: action.foundInfo};

     case 'CALC_INPUT':
        let theString = action.input
              try {
                return {result: eval(theString)}; 
            } catch (e) {
                if (e instanceof SyntaxError) {
                  return {message: "Wrong input, Try again"}
                } else {throw( e );}
            }
         default:
         return state;

  }}
      