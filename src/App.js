import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Switch, Link} from 'react-router-dom';
import Calculator from './components/Calculator'
import Welcome from './components/Welcome'
function App() {
  return (
   
     
        <div className='navbar'>Home
          <ul className='menu'>
           
          <li><a href='' className='fa fa-calculator'></a></li>
          <li><a href='' className='fa fa-facebook'></a></li>
          <li><a href='' className='fa fa-twitter'></a></li>
          <li><a href='' className='fa fa-linkedin'></a></li>
          <li><a href='' className='fa fa-github'></a></li>
          <li><a href='' className='fa fa-calculator'></a></li>
          <li><a href='' className='fa fa-facebook'></a></li>
          <li><a href='' className='fa fa-twitter'></a></li>
          <li><a href='' className='fa fa-linkedin'></a></li>
          <li><a href='' className='fa fa-github'></a></li>

          </ul>
       
     
      
    
      
      </div>
     
  );
}

export default App;
