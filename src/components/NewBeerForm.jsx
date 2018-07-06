import React from 'react'
import PropTypes from 'prop-types'

function NewBeerForm() {
function handleNewBeerFormSubmission(event) {
    event.preventDefault();
  }


function NewBeerForm(props){
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
  )
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
}

export default NewBeerForm
