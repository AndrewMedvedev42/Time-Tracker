import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
// import Timer from 'react-compound-timer'
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import {FaSquare} from 'react-icons/fa'

function Timerz ({name, child, count}) {

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
    <div className="app">
      <h3>{name}</h3>
      <div className='stopwatch-card'>
        <p>{formatTime()}</p>
        <div className='buttons'>
          {
            !isActive && !isPaused ?
              <button onClick={handleStart}><FaPlay/></button>
              : (
                isPaused ? <button onClick={handlePause}><FaPause/></button> :
                  <button onClick={handleResume}><FaPlay/></button>
              )
          }
          <button onClick={handleReset} disabled={!isActive}><FaSquare/></button>
          {child}
        </div>
      </div>
    </div>
  );
}

//   return (<Timer
//     initialTime={0}
//     startImmediately={false}>

//     {({ start, resume, pause, stop, reset, timerState }) => (
//         <section className="TimerStyle">
//           <h3 className="timerTitle">{`${name}`}</h3>
//             <div className="timerNumbesr">
//                 <Timer.Days />:
//                 <Timer.Hours/>:
//                 <Timer.Minutes/>:
//                 <Timer.Seconds/>
//                 {/* <Timer.Milliseconds /> milliseconds */}
//             </div>
//             {/* <div>{timerState}</div> */}
//             <br />
//             <div className="TimerButtonStyle">
//                 <button onClick={start}>{<FaPlay/>}</button>
//                 <button onClick={pause}>{<FaPause/>}</button>
//                 {/* <button onClick={resume}>Resume</button> */}
//                 {/* <button onClick={stop}>Stop</button> */}
//                 {/* <button onClick={reset}>Reset</button> */}
//                 {child}
//             </div>
//         </section>
//     )}
// </Timer>)


export default Timerz;