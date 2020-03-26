import React, { Component } from 'react';

class AddPlayerForm extends Component {
    state = {
        value:''
    };

    //adds the form value to this components' state
    handleValueChange(e){
        this.setState({ value: e.target.value });
      }
    
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({ value: '' });
  }
    
    render(){
        return(
            //uses React's onSubmit property with a function the user writes
            <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleValueChange.bind(this)}
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