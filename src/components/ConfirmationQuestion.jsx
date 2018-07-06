import React from 'react'
import PropTypes from 'prop-types'

function ConfirmationQuestion(props){
  return (
    <div>
      <p>Are you sure you want to add this new beer to the list?</p>
      <button onClick={props.onAddBeerConfirmation}>Yes</button>
    </div>
  )
}

ConfirmationQuestion.propTypes={
  onAddBeerConfirmation: PropTypes.func
}

export default ConfirmationQuestion
