import React from 'react';
import { Switch,Route } from 'react-router-dom';

import NavBar from '../NavBar';
import Home from '../Home';
import Checkout from '../Checkout';
import Error from '../Error';
import './index.css'



const App = ()=>{
  return(
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/checkout' component={Checkout} />
        <Route component={Error} />
      </Switch>
    </div>
  )
}

export default App
