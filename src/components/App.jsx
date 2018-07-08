import React from 'react'
import Header from './Header'
import BeerList from './BeerList'
import Body from './Body'
import Footer from './Footer'
import NewBeerControl from './NewBeerControl'
import Error404 from './Error404'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      masterBeerList: []
    }
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this)
  }

  handleAddingNewBeerToList(newBeer){
    var newMasterBeerList = this.state.masterBeerList.slice()
    newMasterBeerList.push(newBeer)
    this.setState({masterBeerList: newMasterBeerList})
  }

  render(){
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
          <Route exact path='/beers' render={()=><BeerList beerList={this.state.masterBeerList} />} />
          <Route exact path='/addbeer' render={()=><NewBeerControl onNewBeerCreation={this.handleAddingNewBeerToList} />} />
          <Route component={Error404} />
        </Switch>
        <Footer/>
      </div>
    )
  }
}
export default App
