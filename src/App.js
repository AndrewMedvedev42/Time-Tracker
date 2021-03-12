import React from "react"
import Timerz from "./Stopwatch"

function App() {

  const [name, setName] = React.useState('')

  const [timerNameList, setTimerNameList] = React.useState([])

  const deleteTimer = (name) =>{
    let newTimers = timerNameList.filter((timerName) => timerName !== name)
    setTimerNameList(newTimers)
  }

  const onChange = (e) =>{
    setName(e.target.value)
  }

  const addNewTimer = React.useCallback(() => {
    if(name === ""){
      alert("Input field is empty!")

    }else if(timerNameList.some((timerName) => timerName === name)){
      alert(`Name: ${name} already exists!`)

    }else{
      setTimerNameList((prevList)=>[name, ...prevList])
    }
  },[name, timerNameList])

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
        {timerNameList.map((item)=><Timerz key={item} name={item} child={<button onClick={()=>(deleteTimer(item))}>Delete</button>}/>) }
      </div>
    </section>
  );
}


export default App;



