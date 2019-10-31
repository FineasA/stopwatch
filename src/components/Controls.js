import React from 'react';

const Controls = props => {
  return (
    <div>
      <button onClick={props.startTimer}>START</button>
      <button onClick={props.stopTimer}>STOP</button>
      <button onClick={props.resetTimer}>RESET</button>
    </div>
  );
};

export default Controls;
