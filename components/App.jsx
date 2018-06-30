import React from 'react';
import Header from './Header';
import BeerList from './BeerList';
import Body from './Body';
import Footer from './Footer';
import Information from './Information';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div className="bodyContainer">
      <style> {`
          .bodyContainer {
            min-width: 320px;
          }
            `}

      </style>
      <Header/>
      <Switch>
        <Route exact path='/' component={Body} />
        <Route exact path='/beer' component={BeerList} />
        <Route component={Error404} />
      </Switch>
      <Information/>
      <Footer/>
    </div>
  );
}

export default App;
