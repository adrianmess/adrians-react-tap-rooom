import React from 'react'
import Beer from './Beer'
import AddBeer from './AddBeer'
import PropTypes from 'prop-types'

function BeerList(props){
  return (
    <div>
      <AddBeer/>
      {masterBeerList.map((beer, index) =>
        <Beer name={beer.name}
          img={beer.img}
          brewer={beer.brewer}
          description={beer.description}
          abv={beer.abv}
          price={beer.price}
          key={index}/>
      )}
    </div>
  )
}

BeerList.propTypes = {
  beerList: PropTypes.array
}

export default BeerList
