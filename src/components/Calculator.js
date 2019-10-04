

import React,{Component} from 'react';
import {Table} from 'semantic-ui-react';
import {connect} from 'react-redux';
  class Calculator extends Component{
    constructor(props){
        super(props)
        
        this.state ={
            placeHolder: [],
            screen: ''

        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = event =>{
        // console.log('this =',this)
        console.log('19 value =',event.target.value)
        //debugger
        
        this.setState = ({
           
            placeHolder: [...this.state.placeHolder, event.target.value]
        })
        

    }


    render(){
        console.log('screen=',this.state.placeHolder)
        return(
            

                <div className='calculator'>
                    
                    <div class="ui inverted segment">
                  
                    <table >
                  
                    <tr>
                    <td><button  className='ui inverted button' onClick={this.handleChange} value={'clear'}>C</button></td>
                    <td><button  className='ui inverted button' onClick={this.handleChange} value={'percent'}>%</button></td>
                    <td><button className='ui inverted button' onClick={this.handleChange} value={'modular'}>Mod</button></td>
                    <td><button  className='ui inverted button' onClick={this.handleChange} value={'addition'}>+</button></td>
                    </tr>
                    <tr>
                    <td><button  className='ui inverted button' onClick={this.handleChange} value={1}>1</button></td>
                    <td><button  className='ui inverted button' onClick={this.handleChange} value={2}>2</button></td>
                    <td><button  className='ui inverted button' onClick={this.handleChange} value={3}>3</button></td>
                    <td><button className='ui inverted button' onClick={this.handleChange} value={'substrack'}>-</button></td>
                    </tr>

                    <tr>
                    <td><button className='ui inverted button' onClick={this.handleChange} value={4}>4</button></td>
                    <td><button className='ui inverted button' onClick={this.handleChange} value={5}>5</button></td>
                    <td><button className='ui inverted button' onClick={this.handleChange} value={6} >6</button></td>
                    <td><button className='ui inverted button' onClick={this.handleChange} value={'multiply'} >*</button></td>
                    </tr>

                    <tr>
                    <td><button className='ui inverted button' onClick={this.handleChange} value={7} >7</button></td>
                    <td><button className='ui inverted button' onClick={this.handleChange} value={8} >8</button></td>
                    <td><button className='ui inverted button' onClick={this.handleChange} value={9} >9</button></td>
                    <td><button className='ui inverted button' onClick={this.handleChange} value={'division'}  >\</button></td>
                    </tr>
                    <tr>
                    <td><button className='ui inverted button' onClick={this.handleChange} value={'#'} >#</button></td>
                    <td><button className='ui inverted button' onClick={this.handleChange} value={0} >0</button></td>
                    <td><button className='ui inverted button' onClick={this.handleChange} value={'square'} >n^2</button></td>
                    <td><button className='ui inverted button' onClick={this.handleChange} value={'equal'} >=</button></td>
                    </tr>






                </table>
</div>


               

               
                {this.state.placeHolder}
               
                
                
                </div>
        )
    }

}
export default connect()(Calculator);