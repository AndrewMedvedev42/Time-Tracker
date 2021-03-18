import React from "react"
import Timerz from "./Stopwatch"
import { FaTimes } from 'react-icons/fa';


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
      localStorage.setItem(name, Date.now())//sets name to local storage(Date.naw() is here just to set dummy value for key))
    }
  },[name, timerNameList])

  //deletes chossed name from array

  const deleteTimer = (name) =>{
    let newTimers = timerNameList.filter((timerName) => timerName !== name)
    deleteFromLocalStorage(name)//function that deletes key name from localStorage. Craetion of componets with stored names is comming soon  
    setTimerNameList(newTimers)
  }

//deletes keyname 
  function deleteFromLocalStorage(name){
    localStorage.removeItem(name)
  }

  return (
    <section >
      <div className="mainSection">
      <h1>Tracker</h1>
        <div className="inputSection">
          <input className="inputField" value={name} onChange={onChange}/>
          <button className="deployButton" onClick={addNewTimer}>Craete</button>
        </div>
      </div>
      <div className="deployedTimers" >
        {timerNameList.map((item)=><Timerz key={item} name={item} child={<button onClick={()=>(deleteTimer(item))}>{<FaTimes size={15}/>}</button>}/>)}
      </div>
    </section>
  );
}
//in "deployedTimers" div the folleowing code creates component for each name in array of names

export default App;



