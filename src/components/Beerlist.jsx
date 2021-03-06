import React from 'react'
import Beer from './Beer'
import AddBeer from './AddBeer'
import PropTypes from 'prop-types'

function BeerList(props){
  return (
    <div>
      <AddBeer/>
      {props.beerList.map((beer) =>
        <Beer name={beer.name}
          brewer={beer.brewer}
          description={beer.description}
          abv={beer.abv}
          price={beer.price}
          dateCreated={beer.dateCreated}
          key={beer.id}/>
      )}
    </div>
  )
}

BeerList.propTypes = {
  beerList: PropTypes.array
}

export default BeerList
