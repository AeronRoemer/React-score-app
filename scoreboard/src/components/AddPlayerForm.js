import React, { Component } from 'react';
import {Consumer} from './Context';

class AddPlayerForm extends Component {

    //creates a react ref for interacting with the DOM
    playerInput = React.createRef();
    
    render(){
        return(
          <Consumer>
            {context =>{
              const handleSubmit = (e) => {
                  e.preventDefault();
                  //uses the ref to set the text field
                  context.actions.addPlayer(this.playerInput.current.value);
                  e.currentTarget.reset();}

                return(
            //uses React's onSubmit property with a function the user writes
            <form onSubmit={handleSubmit}>
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
            }}
          </Consumer>

        
         ) }
}

export default AddPlayerForm;