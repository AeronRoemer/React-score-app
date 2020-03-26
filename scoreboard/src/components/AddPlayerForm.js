import React, { Component } from 'react';

class AddPlayerForm extends Component {

    //creates a react ref for interacting with the DOM
    playerInput = React.createRef();

    
  handleSubmit = (e) => {
    e.preventDefault();
    //uses the ref to set the text field
    this.props.addPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
  }
    
    render(){
        //console.log(this.playerInput)
        return(
            //uses React's onSubmit property with a function the user writes
            <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  //ref added here, can be accessed outside of the form like in console log
                  ref={this.playerInput}
                  placeholder="Enter a player's name"
                />
                <input
                  type="submit"
                  value="Add Player"
                />
            </form>
        )
    }
}

export default AddPlayerForm;