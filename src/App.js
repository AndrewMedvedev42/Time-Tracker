import React, { useEffect } from "react"
import Stopwatch from "./Stopwatch"
import {FaTimes, FaRegClock, FaPlus } from 'react-icons/fa';
import FadeIn from 'react-fade-in';
import "./index.css"

//Main app
function App() {

  const [name, setName] = React.useState('')

  //creating an array of names that were typed in input field

  const [timerNameList, setTimerNameList] = React.useState([])

  const onChange = (e) =>{
    setName(e.target.value)
  }

//function that checks name and sets new name to array
  const addNewTimer = React.useCallback(() => {
    if(name === ""){
      alert("Input field is empty!")
    }else if(timerNameList.some((timerName) => timerName === name)){
      alert(`Name: ${name} already exists!`)
    }else{
      setTimerNameList((prevList)=>[name, ...prevList])
      localStorage.setItem(name, 0)//sets name to local storage(Date.naw() is here just to set dummy value for key))
    }
  },[name, timerNameList])

  //deletes chossed name from array
  const deleteTimer = (name) =>{
    let newTimers = timerNameList.filter((timerName) => timerName !== name)
    localStorage.removeItem(name)//deletes key name from localStorage. Craetion of componets of stored names is in progress
    setTimerNameList(newTimers)
  }

  //sets timer data from localstorage to timerNameList
  useEffect(()=>{
    for(let i =0; i<localStorage.length; i++){
      let key = localStorage.key(i)
      if(timerNameList.some((item)=> item === key)){
        return ""
      }else{
        setTimerNameList((prevList)=>[key, ...prevList])
      }}
  },[])

  function checkCount(name){
    if(localStorage.getItem(name) !== 0){
      return parseInt(localStorage.getItem(name))
    }else{
      return 0
    }
  }

 return (
    <section >
      <section className="main-section">
      <p className="notice">Type a name of your timer, in the input field and submit it to create a timer</p>
      <h1>Stop{<FaRegClock size={42}/>}Watch</h1>
        <div className="input-section">
          <div className="form">
            <input className="input-field" value={name} onChange={onChange}/>
            <button className="deploy-button" onClick={addNewTimer}><FaPlus size={13}/></button>
          </div>
        </div>
      </section>
      <section className="timer-list">
        <FadeIn>
        {timerNameList.map((item)=><Stopwatch key={item} name={item} count={checkCount(item)} child={<button className="button button-delete" onClick={()=>(deleteTimer(item))}>{<FaTimes size={16}/>}</button>}/>)}
        </FadeIn>
      </section>
    </section>
  );
}
//in "deployedTimers" div the folleowing code creates component for each name in array of names

export default App;



