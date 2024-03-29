import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import {FaSquare} from 'react-icons/fa'

//Stopwatch component
function Stopwatch ({name, child, count}) {

  const [timer, setTimer] = useState(count)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const increment = useRef(null)

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(increment.current)
    setIsPaused(false)
  }

  const handleResume = () => {
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  localStorage.setItem(name, timer)

  return (
    <article className="timer-container">
      <h2 className="timer-name">{name}</h2>
      <p className="timer-time">{formatTime()}</p>
        <section className='button-section'>
          {
            !isActive && !isPaused ?
              <button className="button button-play" onClick={handleStart}><FaPlay/></button>
              : (
                isPaused ? <button class="button pause-button" onClick={handlePause}><FaPause/></button> :
                  <button className="button button-play" onClick={handleResume}><FaPlay/></button>
              )
          }
          <button className="button button-reset" onClick={handleReset} disabled={!isActive}><FaSquare/></button>
          {child}
        </section>
    </article>
  );
}

export default Stopwatch;