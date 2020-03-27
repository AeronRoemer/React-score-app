//named import lets you create Class without extending React.Component
//Class app extends Component, not React.Component
import React, { Component } from 'react';
import Header from './Header';
import PlayerList from './PlayerList';  
import AddPlayerForm from './AddPlayerForm';

const App = () => {
    return (
      <div className="scoreboard">
        <Header />
          <PlayerList />

        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    
    );
  }

export default App;
