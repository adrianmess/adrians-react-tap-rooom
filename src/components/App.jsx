import React from 'react'
import Header from './Header'
import About from './About'
import Body from './Body'

import { Switch, Route } from 'react-router-dom'

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Body} />
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
