import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'

function Beer(props){
  return (
    <div className="grid">
      <style>{`

          .grid{
            display: flex;
            margin-left: 20%;
            margin-right: 20%;
            margin-top: 5%;
            flex-direction: row;
            min-width: 50vh;
            justify-content: center;
          }

          img{
            height: 150px;

            justify-content: center;
            border-radius: 50%;
            display: block;
          }


          .beerInfo{
            margin-left: 50px;
            max-height: 390px;
            max-width: 420px;
          }
          `}
      </style>
      <div className="imagesContainer">
        <img src={props.img}/>
      </div>
      <div className="beerInfo">
        <h3>Name: {props.name}</h3>
        <p>Brewer: {props.brewer}</p>
        <p>Desc: {props.description}</p>
        <p>Abv %: {props.abv}</p>
        <p>Price: {props.price}</p>
        <p>Date Added: {props.dateCreated}</p>
      </div>
    </div>
  )
}

function displayDateCrated(dateCreated) {
  return dateCreated.from(new Moment(), true);
}

Beer.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  dateCreated: PropTypes.string
}

export default Beer
