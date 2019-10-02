import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Switch, Link} from 'react-router-dom';
import Calculator from './components/Calculator'
import Welcome from './components/Welcome'
function App() {
  return (
    <Router>
      
    
   
     
        <div className='navbar'>
          <div className='selected-tool'></div>
          <ul className='menu'>
           
          <li><Link to='/calculator' className='fa fa-calculator'></Link></li>
          <li><a href='https://www.facebook.com/burak.kocak.12935' className='fa fa-facebook' target="_blank"></a></li>
          <li><a href='https://twitter.com/BurakKo26718607' className='fa fa-twitter' target="_blank"></a></li>
          <li><a href='https://www.linkedin.com/in/burak-kocak-3bb572141' className='fa fa-linkedin' target="_blank"></a></li>
          <li><a href='https://github.com/burakkocak884' className='fa fa-github' target="_blank"></a></li>
          <li><a href='' className='fa fa-calendar'></a></li>
          <li><a href='' className='fa fa-email'></a></li>
          <li><a href='' className='fa fa-flag'></a></li>
          

          </ul>
       </div>
       <Switch>
       <Route path='/calculator' render={()=>(<Calculator />)}></Route>
      </Switch>
      </Router>
     
  );
}

export default App;
