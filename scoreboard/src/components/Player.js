import React, {PureComponent} from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import Icon from './Icon'


  
class Player extends PureComponent {
  //static lets you validate prop types while inside a component
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    //gives warning if prop is missing
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number,
    isHighScore: PropTypes.bool
  };

render(){
  const {
    name,
    isHighScore,
    id, 
    score, 
    index, 
    removePlayer,
    changeScore } = this.props;
    console.log({isHighScore})
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
        { name }
        <Icon isHighScore={isHighScore}/>
      </span>

      <Counter
       score={score} 
       index={index}
       changeScore={changeScore}/>
    </div>
  );
}
  }

  export default Player;