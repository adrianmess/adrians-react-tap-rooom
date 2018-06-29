import React from 'react'
import PropTypes from 'prop-types';

function Beer(props){
  return(
    <div className="beerContainer">
      <h3 className="beerName">{props.name}props.name</h3>
        <p className="beerBrewer">{props.brewer}props.brewer</p>
        <p className="beerDesc">{props.brewer}props.brewer</p>
        <p className="beerAbv">{props.abv}props.abv</p>
        <p className="beerPrice">{props.price}props.price</p>
        <p className="beerRemaining">{props.remaining}props.remaining</p>
    </div>
  );
}

export default Beer
