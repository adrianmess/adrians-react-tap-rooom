import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import Body from './Body';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Body} />
        <Route exact path='/beer' component={BeerList} />
      </Switch>
    </div>
  );
}

export default App;
