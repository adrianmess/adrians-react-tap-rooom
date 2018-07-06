import React from 'react';
import React from 'prop-types'

function ConfirmationQuestion(props){
  return (
    <div>
      <p>Are you sure you want to add this new beer to the list?</p>
      <button onClick={props.AddBeerConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes=[
  onAddBeerConfirmation: PropTypes.func
];

export default ConfirmationQuestion;
