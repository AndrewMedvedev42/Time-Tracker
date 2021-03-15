import React from "react"
import Timer from 'react-compound-timer'
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';



function Timerz ({name, child}) {
  return (<Timer
    initialTime={0}
    startImmediately={false}>

    {({ start, resume, pause, stop, reset, timerState }) => (
        <section className="TimerStyle">
          <h3 className="timerTitle">{`${name}`}</h3>
            <div className="timerNumbesr">
                <Timer.Days />:
                <Timer.Hours/>:
                <Timer.Minutes/>:
                <Timer.Seconds/>
                {/* <Timer.Milliseconds /> milliseconds */}
            </div>
            {/* <div>{timerState}</div> */}
            <br />
            <div className="TimerButtonStyle">
                <button onClick={start}>{<FaPlay/>}</button>
                <button onClick={pause}>{<FaPause/>}</button>
                {/* <button onClick={resume}>Resume</button> */}
                {/* <button onClick={stop}>Stop</button> */}
                {/* <button onClick={reset}>Reset</button> */}
                {child}
            </div>
        </section>
    )}
</Timer>)
} 

export default Timerz;