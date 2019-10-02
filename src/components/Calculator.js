

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
        //console.log('value =',event.target.value)
        //debugger
        
        this.setState = ({
           
            placeHolder: event.target.value
        })
        

    }


    render(){
        //console.log('placeholder=',this.state.placeHolder)
        return(
            

                <div className='calculator'>
                    
              
                  
                    
                    <button onClick={this.handleChange} value={'clear'}>C</button>
                    <button onClick={this.handleChange} value={'percent'}>%</button>
                    <button onClick={this.handleChange} value={'modular'}>Mod</button>
                    <button onClick={this.handleChange} value={'addition'}>+</button>
                    
                    
                    <button onClick={this.handleChange} value={1}>1</button>
                    <button onClick={this.handleChange} value={2}>2</button>
                    <button onClick={this.handleChange} value={3}>3</button>
                    <button onClick={this.handleChange} value={'substrack'}>-</button>
                    

                    
                    <button onClick={this.handleChange} value={4}>4</button>
                    <button onClick={this.handleChange} value={5}>5</button>
                    <button onClick={this.handleChange} value={6} >6</button>
                    <button onClick={this.handleChange} value={'multiply'} >*</button>
                    

                    
                    <button onClick={this.handleChange} value={7} >7</button>
                    <button onClick={this.handleChange} value={8} >8</button>
                    <button onClick={this.handleChange} value={9} >9</button>
                    <button onClick={this.handleChange} value={'division'}  >\</button>
                    
                    
                    <button onClick={this.handleChange} value={'#'} >#</button>
                    <button onClick={this.handleChange} value={0} >0</button>
                    <button onClick={this.handleChange} value={'square'} >n^2</button>
                    <button onClick={this.handleChange} value={'equal'} >=</button>
                    






               

               
                {this.state.placeHolder}
               
                
                
                </div>
        )
    }

}
export default connect()(Calculator);