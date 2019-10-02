import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Switch, Link} from 'react-router-dom';
import Calculator from './components/Calculator'
import Welcome from './components/Welcome'
function App() {
  return (
    <div>
      <Router>
            <div className='navbar'>
                <div className='selected-tool'>
                    <Switch>
                        <Route path='/home' >Welcome to Mr. Gadget</Route>
                        <Route path='/calculator' render={()=>(<Calculator />)}></Route>
                        <Route path='/unitconvertor' >Unit Convertor</Route>
                        <Route path='/calendar' >Calendar</Route>
                    </Switch>


                </div>
                  <ul className='menu'>
                    <li><a href='https://www.facebook.com/burak.kocak.12935' className='fa fa-facebook' target="_blank"></a></li>
                    <li><a href='https://twitter.com/BurakKo26718607' className='fa fa-twitter' target="_blank"></a></li>
                    <li><a href='https://www.linkedin.com/in/burak-kocak-3bb572141' className='fa fa-linkedin' target="_blank"></a></li>
                    <li><a href='https://github.com/burakkocak884' className='fa fa-github' target="_blank"></a></li>
                    <li><Link to='/unitconvertor' className='fa fa-gear'></Link></li>
                    <li><Link to='/calculator' className='fa fa-calculator'></Link></li>
                    <li><Link to='/calendar' className='fa fa-calendar'></Link></li>
                    <li><Link to='/home' className='fa fa-home'></Link></li>
                    
                </ul>
            </div>
        </Router>
      </div>
     
  );
}

export default App;
