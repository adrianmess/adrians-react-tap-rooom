import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
        <div className="beerTableHeader">
          <a>Click to add Beer to list:</a><Link to='/addbeer' style={{textDecoration: 'none'}}><span><a>Add</a></span></Link>
        </div>
        <div className="imagesContainer">
          <img src={props.img}/>
        </div>
        <div className="beerInfo">
          <h3>{props.name}</h3>
          <p>{props.brewer}</p>
          <p>{props.description}</p>
          <p>{props.abv}</p>
          <p>{props.price}</p>
        </div>
      </div>
    );
  }

  Beer.propTypes = {
    name: PropTypes.string.isRequired,
    brewer: PropTypes.string,
    description: PropTypes.string,
    abv: PropTypes.string,
    price: PropTypes.string
  };

  export default Beer;
