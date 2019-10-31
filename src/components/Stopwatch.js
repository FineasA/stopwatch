import React from 'react';

const Stopwatch = props => {
  let zeroSeconds = '0';
  let zeroMinutes = '0';
  let zeroHours = '0';

  if (props.startState === true) {
    // console.log(props.time);
  }
  console.log('length: ', props.seconds.toString().split('').length);

  if (props.seconds.toString().split('').length === 2) {
    zeroSeconds = null;
  }

  if (props.minutes.toString().split('').length === 2) {
    zeroMinutes = null;
  }

  if (props.hours.toString().split('').length === 2) {
    zeroHours = null;
  }
  return (
    <div>
      <div className='display'>
        {zeroHours}
        {props.hours} : {zeroMinutes}
        {props.minutes} : {zeroSeconds}
        {props.seconds}
      </div>
    </div>
  );
};

export default Stopwatch;
