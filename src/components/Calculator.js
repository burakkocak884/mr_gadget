

import React,{Component} from 'react';
import {Form, Label} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {calcInput} from '../action/Tool'
  class Calculator extends Component{
    constructor(props){
                super(props)
                
                this.state ={
                    placeHolder: '',
                    screen: ''
                 }
                 this.handleDelete = this.handleDelete.bind(this);
             }


                handleChange = event =>{
                    //console.log('valid value =',event.target.value)
                    //debugger
                    this.setState({ placeHolder: this.state.placeHolder + event.target.value})
                }


                handleClear = event =>{
                    this.setState({placeHolder: ''})
                }


                handleDelete = event =>{
                    let theString = this.state.placeHolder
                    this.setState({placeHolder: theString.slice(0,theString.length-1) })
                // console.log('the state=',this.state)
                }


                handleSubmit = event =>{
                    event.preventDefault()
                this.props.calcInput(this.state.placeHolder)
                }
    


                    render(){
                         console.log('props=',this.props)
                        let display; 
                        if(this.props.message){
                            display = this.props.message
                        }
                         if(this.props.result){
                            display = this.props.result
                        }
                        return(
                        
                            

                                <div className='calculator'>
                                    
                                    <Form >
                                            <Form.Field>
                                                 <Label>Input</Label>
                                                 <input  type='textarea' onChange={this.handleChange} name ='city' placeholder='Type or Click' value={this.state.placeHolder}></input>
                                            </Form.Field>
                                                <p></p>
                                            <Form.Field>
                                                <Label>Output</Label>
                                                <input  type='textarea' onChange={this.handleChange} name ='city' placeholder='Result' value={display}></input>
                                            </Form.Field>
                                     </Form>
                                             <div class="ui inverted segment"> 
                                    
                                
                                                <table >
                                
                                                    <tr>
                                                        <td><button  className='ui inverted button' onClick={this.handleClear} value={'clear'}> C </button></td>
                                                        <td><button  className='ui inverted button' onClick={this.handleDelete} value={'%'}>Del</button></td>
                                                        <td><button className='ui inverted button' onClick={this.handleChange} value={'%'}>Mod</button></td>
                                                        <td><button  className='ui inverted button' onClick={this.handleChange} value={'+'}>+</button></td>
                                                    </tr>
                                                    <tr>
                                                        <td><button  className='ui inverted button' onClick={this.handleChange} value={1}>1</button></td>
                                                        <td><button  className='ui inverted button' onClick={this.handleChange} value={2}>2</button></td>
                                                        <td><button  className='ui inverted button' onClick={this.handleChange} value={3}>3</button></td>
                                                        <td><button className='ui inverted button' onClick={this.handleChange} value={'-'}>-</button></td>
                                                    </tr>

                                                    <tr>
                                                        <td><button className='ui inverted button' onClick={this.handleChange} value={4}>4</button></td>
                                                        <td><button className='ui inverted button' onClick={this.handleChange} value={5}>5</button></td>
                                                        <td><button className='ui inverted button' onClick={this.handleChange} value={6} >6</button></td>
                                                        <td><button className='ui inverted button' onClick={this.handleChange} value={'*'} >x</button></td>
                                                    </tr>

                                                    <tr>
                                                        <td><button className='ui inverted button' onClick={this.handleChange} value={7} >7</button></td>
                                                        <td><button className='ui inverted button' onClick={this.handleChange} value={8} >8</button></td>
                                                        <td><button className='ui inverted button' onClick={this.handleChange} value={9} >9</button></td>
                                                        <td><button className='ui inverted button' onClick={this.handleChange} value={"/"} >\</button> </td>
                                                    </tr>
                                                    <tr>
                                                        <td><button className='ui inverted button' onClick={this.handleChange} value={'('} >(</button></td>
                                                        <td><button className='ui inverted button' onClick={this.handleChange} value={0} >0</button></td>
                                                        <td><button className='ui inverted button' onClick={this.handleChange} value={')'} >)</button></td>
                                                        <td><button type='submit' className='ui inverted button' onClick={this.handleSubmit} value={'equal'} >=</button></td>
                                                    </tr>
                                                 </table>
                            
                                               </div>
                                            </div>
        )}

}

const mapStateToProps = state =>{
   // console.log('mystate in calc=',state)
    return{
        result: state.result,
        message: state.message
    }
}
export default connect(mapStateToProps, {calcInput})(Calculator);