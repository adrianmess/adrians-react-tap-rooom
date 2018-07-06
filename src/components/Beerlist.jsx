import React from 'react'
import Beer from './Beer'
import AddBeer from './AddBeer'

function BeerList(){
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

export default BeerList
