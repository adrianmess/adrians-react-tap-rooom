import React from 'react';
import ConfirmationQuestion from './ConfirmationQuestion';
import NewBeerForm from './NewBeerForm';

class NewBeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleAddBeerConfirmation =
    this.handleAddBeerConfirmation.bind(this);
  }

  handleAddBeerConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewBeerForm onNewBeerCreation={this.props.onNewBeerCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestion onAddBeerConfirmation={this.handleAddBeerConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewBeerControl.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewBeerControl;
