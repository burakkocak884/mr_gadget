import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Calculator from './components/Calculator'
import Weather from './components/Weather'
import Calendar from './components/Calendar'
import {findWeather} from './action/Tool'
import {connect} from 'react-redux'

function App() {
  return (
    <div>
      <Router>
            <div className='navbar'>
                <div className='selected-tool'>
                    <Switch>
                        <Route path='/home' >Welcome to Mr. Gadget</Route>
                        <Route path='/calculator' render={()=>(<Calculator />)}></Route>
                        <Route path='/weather' render={()=>(<Weather />)}></Route>
                        <Route path='/calendar' render={()=>(<Calendar />)}>Calendar</Route>
                        
                    </Switch>


                </div>
                  <ul className='menu'>
                    <li><a href='https://www.facebook.com/burak.kocak.12935' id="facebook" className='fa fa-facebook' target="_blank" rel="noopener noreferrer"> </a></li>
                    <li><a href='https://twitter.com/BurakKo26718607' id='twitter' className='fa fa-twitter' target="_blank" rel="noopener noreferrer"> </a></li>
                    <li><a href='https://www.linkedin.com/in/burak-kocak-3bb572141' id='linkedin' className='fa fa-linkedin' target="_blank" rel="noopener noreferrer"> </a></li>
                    <li><a href='https://github.com/burakkocak884' className='fa fa-github' id='github'target="_blank" rel="noopener noreferrer"> </a></li>
                    <li ><a href='/weather' id='cloud'className='fa fa-cloud'> </a></li>
                    <li><a href='/calculator' id='calculator' className='fa fa-calculator'> </a></li>
                    <li><a href='/calendar' id='calendar' className='fa fa-calendar'></a> </li>
                    <li><a href='/home' id='thehome'className='fa fa-home'> </a></li>
                    
                </ul>
            </div>
        </Router>
      </div>
     
  );
}

export default connect(null, {findWeather})(App);
