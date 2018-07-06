import React from 'react';
import ConfirmationQuestion from './ConfirmationQuestion';
import NewBeerForm from './NewBeerForm';

class NewBeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  render(){
      let currentlyVisibleContent = null;
      if (this.state.formVisibleOnPage){
        currentlyVisibleContent = <NewBeerForm />;
      } else {
        currentlyVisibleContent = <ConfirmationQuestions />;
      }
      return (
        <div>
          {currentlyVisibleContent}
        </div>
      );
    }

}

export default NewBeerControl;
