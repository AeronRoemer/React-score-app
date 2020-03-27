import React, {Component} from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component{
            state = {
                players: [
                  {
                    name: "Guil",
                    score: 0,
                    id: 1
                  },
                  {
                    name: "Treasure",
                    score: 0,
                    id: 2
                  },
                  {
                    name: "Ashley",
                    score: 0,
                    id: 3
                  },
                  {
                    name: "James",
                    score: 0,
                    id: 4
                  }
                ]
              }



   //player id counter
   prevPlayerId = 4;

   //delta is the change is score, can be +1 or -1
      handleScoreChange = (index, delta) => {
       this.setState( prevState => ({
         score: prevState.players[index].score += delta
       }));
     }
   
   //arrow functions don't produce a 'this' that is passed on. 
   //When they're called in AddPlayerForm the 'this' is referring to the array of components used here in app.js
   
     handleRemovePlayer = (id) => {
       this.setState( prevState => {
         return {
           players: prevState.players.filter(p => p.id !== id)
         };
       });
     }
   
     handleAddPlayer = (name) => {
       this.setState(prevState => {
         return {
         players: [
           ...prevState.players,
           {
             name,
             score: 0,
             id: this.prevPlayerId += 1
           }
         ]
       }})
     }
   
   //creates a highScore varaiable containing the highest score
   getHighScore = () => {
       const scores = this.state.players.map(p => p.score);
       const highScore = Math.max(...scores);
       if (highScore) {
         return highScore
       } else {
         return null;
       }
     
   }

   render(){
    return(
        <ScoreboardContext.Provider value={{
            players: this.state.players,
            highScore: this.highScore,
            actions:{
              removePlayer: this.handleRemovePlayer,
              changeScore: this.handleScoreChange,
              addPlayer: this.handleAddPlayer,
              getHighScore: this.getHighScore
            }
      
          }}>
              {this.props.children}
          </ScoreboardContext.Provider>
        )
    }
}
export const Consumer = ScoreboardContext.Consumer;