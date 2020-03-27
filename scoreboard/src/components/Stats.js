import React from 'react';
import { Consumer } from './Context';

const Stats = () =>{
    return (
      <Consumer>
      {/*context equals value passed into provider in App.js
      rather than props.players.length, now context.length*/}
      {context => {
        const totalPlayers = context.players.length
        const totalPoints = context.players.reduce((totalScore, player)=>{
             return totalScore + player.score;
             }, 0)

    return( 
        <table className="stats">
          <tbody>
            <tr>
                <td>Players:</td>
                <td>{totalPlayers}</td>
              </tr>
              <tr>
                <td>Total Points:</td>
                <td>{totalPoints}</td>
            </tr>
          </tbody>
        </table>)
      }}
      </Consumer>
    )
}

export default Stats;