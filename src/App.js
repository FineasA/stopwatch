import React, { useState, useEffect } from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch';
import Controls from './components/Controls';

const App = () => {
  const [seconds, setSeconds] = useState(57);
  const [minutes, setMinutes] = useState(59);
  const [hours, setHours] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start === true) {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
      console.log(seconds);
      if (seconds === 60) {
        setMinutes(minutes => minutes + 1);
        setSeconds(0);
      }
      if (minutes === 60) {
        setHours(hours => hours + 1);
        setMinutes(0);
        setSeconds(0);
      }
      return () => clearInterval(interval);
    }
  });

  // * HANDLERS

  const handleStopTimer = e => {
    setStart(false);
    console.log('stopped...');
  };

  const handleStartTimer = e => {
    setStart(true);
    console.log('started...');
  };

  const handleResetTimer = e => {
    setStart(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  return (
    <div className='App'>
      <div className='container'>
        <Stopwatch
          seconds={seconds}
          minutes={minutes}
          hours={hours}
          startState={start}
        />
        <Controls
          startTimer={handleStartTimer}
          stopTimer={handleStopTimer}
          resetTimer={handleResetTimer}
        />
      </div>
    </div>
  );
};

export default App;
