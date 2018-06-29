import React from 'react'
import PropTypes from 'prop-types'

function Beer(props){
  return(
    <div className="beerContainer">
      <h3 className="beerName">{props.name}props.name</h3>
      <p className="beerBrewer">{props.brewer}props.brewer</p>
      <p className="beerDesc">{props.brewer}props.desc</p>
      <p className="beerAbv">{props.abv}props.abv</p>
      <p className="beerPrice">{props.price}props.price</p>
    </div>
  )
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string,
  desc: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string
}

export default Beer
