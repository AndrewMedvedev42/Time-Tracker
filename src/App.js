import React from "react"
import Timerz from "./Stopwatch"
import {FaTimes } from 'react-icons/fa';
import {FaPlus } from 'react-icons/fa';
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



  const setExisting = () => {
    for(let i =0; i<localStorage.length; i++){
    let key = localStorage.key(i)

    if(timerNameList.some((item)=> item === key)){
      alert(`Sorry,${key} already deployed!`)

    }else{
      setTimerNameList((prevList)=>[key, ...prevList])

    }}}



  function checkCount(name){
    if(localStorage.getItem(name) !== 0){
      return parseInt(localStorage.getItem(name))
    }else{
      return 0
    }
  }

 return (
    <section >
      <button className="deployButton deployedTimersButton" onClick={setExisting}>Show Existing Timers</button>
      <div className="mainSection">
      <h1>Tracker</h1>
        <div className="inputSection">
          <input className="inputField" value={name} onChange={onChange}/>
          <button className="deployButton" onClick={addNewTimer}><FaPlus size={13}/></button>
        </div>
      </div>
      <div className="deployedTimers" >
        {timerNameList.map((item)=><Timerz key={item} name={item} count={checkCount(item)} child={<button class="btn btnClose" onClick={()=>(deleteTimer(item))}>{<FaTimes size={16}/>}</button>}/>)}
      </div>
    </section>
  );
}
//in "deployedTimers" div the folleowing code creates component for each name in array of names

export default App;



