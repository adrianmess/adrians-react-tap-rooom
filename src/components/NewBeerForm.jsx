import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

function NewBeerForm(props) {
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({name: _name.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, id: v4()});
    _name.value = '';
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
          id='name'
          placeholder='Beer Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer Name'
          ref={(input) => {_brewer = input;}}/>
        <textarea
          type='text'
          id='description'
          placeholder='Beer Description'
          ref={(input) => {_description = input;}}/>
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

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
}

export default NewBeerForm
