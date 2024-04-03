import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function ClockApp() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [timerLabel, setTimerLabel] = useState('Session');
  const [isRunning, setIsRunning] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return newTimeLeft;
          } else {
            audioRef.current.play();
            if (timerLabel === 'Session') {
              setTimerLabel('Break'); // Switch to "Break" label
              setTimeLeft(breakLength * 60);
            } else {
              setTimerLabel('Session'); // Switch back to "Session" label
              setTimeLeft(sessionLength * 60);
            }
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isRunning, breakLength, sessionLength, timerLabel]);

  const handleReset = () => {
    setIsRunning(false);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setTimerLabel('Session');
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const formatTime = (timeLeft) => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleBreakDecrement = () => {
    if (!isRunning && timerLabel === 'Break') {
      setBreakLength((prev) => Math.max(1, prev - 1));
      setTimeLeft((prevTimeLeft) => Math.min(prevTimeLeft, (breakLength - 1) * 60));
    } else {
      setBreakLength((prev) => Math.max(1, prev - 1));
    }
  };

  const handleBreakIncrement = () => {
    if (!isRunning && timerLabel === 'Break') {
      setBreakLength((prev) => Math.min(60, prev + 1));
      setTimeLeft((prevTimeLeft) => Math.min(prevTimeLeft, (breakLength + 1) * 60));
    } else {
      setBreakLength((prev) => Math.min(60, prev + 1));
    }
  };

  const handleSessionDecrement = () => {
    if (!isRunning && timerLabel === 'Session') {
      setSessionLength((prev) => Math.max(1, prev - 1));
      setTimeLeft((prevTimeLeft) => Math.min(prevTimeLeft, (sessionLength - 1) * 60));
    } else {
      setSessionLength((prev) => Math.max(1, prev - 1));
    }
  };

  const handleSessionIncrement = () => {
    if (!isRunning && timerLabel === 'Session') {
      setSessionLength((prev) => Math.min(60, prev + 1));
      setTimeLeft((prevTimeLeft) => Math.min(prevTimeLeft, (sessionLength + 1) * 60));
    } else {
      setSessionLength((prev) => Math.min(60, prev + 1));
    }
  };

  return (
    <div className="clock-container">
      <h1>Simple Fitness Clock App</h1>
      <div id="break-label">Break Length</div>
      <button id="break-decrement" onClick={handleBreakDecrement}>-</button>
      <div id="break-length">{breakLength}</div>
      <button id="break-increment" onClick={handleBreakIncrement}>+</button>
      <div id="session-label">Session Length</div>
      <button id="session-decrement" onClick={handleSessionDecrement}>-</button>
      <div id="session-length">{sessionLength}</div>
      <button id="session-increment" onClick={handleSessionIncrement}>+</button>
      <div id="timer-label">{timerLabel}</div> {/* Display the timer label */}
      <div id="time-left">{formatTime(timeLeft)}</div>
      <button id="start_stop" onClick={() => setIsRunning(!isRunning)}>{isRunning ? 'Pause' : 'Start'}</button>
      <button id="reset" onClick={handleReset}>Reset</button>
      <audio id="beep" ref={audioRef}>
        <source src="/audio/beep-car-horn.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}

export default ClockApp;
