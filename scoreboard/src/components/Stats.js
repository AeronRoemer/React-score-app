import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({players}) =>{
    const totalPlayers = players.length
    const totalPoints = players.reduce((totalScore, player)=>{
       return totalScore + player.score;
    }, 0)
    return (
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
</table>

    )
}
//creates class to use proptypes
Stats.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  }))
}

export default Stats;