import React from 'react'
import PropTypes from 'prop-types'

function NewBeerForm(props) {
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_brewer.value);
    console.log(_description.value);
    console.log(_abv.value);
    console.log(_price.value);
    props.onNewTicketCreation({names: _name.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value});
    _names.value = '';
    _brewer.value = '';
    _description.value = '';
    _abv.value = '';
    _price.value = '';
  }



  return (
    <div>
      <form onSubmit={handleNewBeerFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Beer Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer Name'
          ref={(input) => {_brewerName = input;}}/>
        <textarea
          type='text'
          id='description'
          placeholder='Beer Description'
          ref={(input) => {_beerDescription = input;}}/>
        <textarea
          type='text'
          id='abv'
          placeholder='Alcohol by volume'
          ref={(input) => {_abv = input;}}/>
        <textarea
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}



export default NewBeerForm
