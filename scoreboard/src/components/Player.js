import React, {PureComponent} from 'react';
import {Consumer} from './Context';
import Counter from './Counter';
import PropTypes from 'prop-types';
import Icon from './Icon'


  
class Player extends PureComponent {
  //static lets you validate prop types while inside a component
  static propTypes = {
    changeScore: PropTypes.func,
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
    id, 
    score, 
    index } = this.props;
  return (
    <div className="player">
    <Consumer>
      {({actions}) => (
        <span className="player-name">
        <button className="remove-player" onClick={() => actions.removePlayer(id)}>✖</button>
        { name }
        <Icon isHighScore={score === actions.getHighScore()}/>
      </span>
      )}
    </Consumer>


      <Counter
       score={score} 
       index={index}
       />
    </div>
  );
}
  }

  export default Player;