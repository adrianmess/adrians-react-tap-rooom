import React from 'react'
import PropTypes from 'prop-types'

function NewBeerForm(props){
  return (
    <div>
      <form onSubmit={handleNewBeerFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Beer Name'/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewer Name'/>
        <textarea
          type='text'
          id='description'
          placeholder='Beer Description'/>
        <textarea
          type='text'
          id='abv'
          placeholder='Alcohol by volume'/>
        <textarea
          type='text'
          id='price'
          placeholder='Price'/>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
}

export default NewBeerForm
