import React from 'react';
import Beer from './Beer';

import ruby_zozzle from '../assets/images/drinks/ruby_zozzle.jpg';
import tart_n_juicy from '../assets/images/drinks/tart_n_juicy.jpg';
import hamms from '../assets/images/drinks/hamms.jpg';
import prismatic from '../assets/images/drinks/prismatic.png';
import juicy_haze from '../assets/images/drinks/juicy_haze.jpg';
import _8_hop from '../assets/images/drinks/_8_hop.jpg';



var masterBeerList = [
  {
      name: 'Ruby Zozzle',
      img: ruby_zozzle,
      brewer: 'Hi-Wheel',
      description: 'Sparkling Wine & Grapefruit',
      abv: '6.8%',
      price: '7',
    },
    {
      name: 'Tart N Juicy',
      img: tart_n_juicy,
      brewer: 'Epic',
      description: 'Sour IPA',
      abv: '4.5%',
      price: '6',
    },
    {
      name: 'Hamm\'s',
      img: hamms,
      brewer: 'Miller/Coors',
      description: 'American Lager',
      abv: '4.7%',
      price: '3',
    },
    {
      name: 'Prismatic',
      img: prismatic,
      brewer: 'Ninkasi',
      description: 'Juicy IPA',
      abv:  '5.9%',
      price: '6',
    },
    {
      name: 'Juicy Haze',
      img: juicy_haze,
      brewer: 'New Belgium',
      description: 'India Pale Ale',
      abv:  '7.5%',
      price: '6',
    },
    {
      name: '8 Hop',
      img: _8_hop,
      brewer: 'New Belgium',
      description: 'Pale Ale',
      abv:  '5.5%',
      price: '6',
    }
];

function BeerList(){
  return (
    <div>
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
  );
}

export default BeerList;
