import React from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'
import { useState,useEffect } from "react"

const oldTasks=localStorage.getItem("Tasks")

console.log(oldTasks)
const App = () => {
  //useState() hooks
  const [Task, setTask] = useState(JSON.parse(oldTasks) || [])

  //useEffect() hook in React 
  useEffect(()=>{
    localStorage.setItem("Tasks",JSON.stringify(Task))
  },[Task])
  

  const handleDelete=(taskIndex)=>{
    const newTask=Task.filter((task,index)=>index!=taskIndex)
    setTask(newTask)
  }
  return (
    <div className='app'>
      <TaskForm setTask={setTask}/>
      <header className='app-header'></header>
      <main className='app-main'>
        <TaskColumn columnName="To Do" task={Task} status="todo" icon={todoIcon} handleDelete={handleDelete}/>
        <TaskColumn columnName="Doing" task={Task} status="doing" icon={doingIcon} handleDelete={handleDelete}/>
        <TaskColumn columnName="Done" task={Task} status="Done" icon={doneIcon} handleDelete={handleDelete}/>        
      </main>
    </div>
  )
}

export default App