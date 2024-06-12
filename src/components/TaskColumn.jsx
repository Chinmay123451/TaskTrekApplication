import React from 'react'
import ToDo from "../assets/direct-hit.png"
import "./TaskColumn.css"
import TaskCard from './TaskCard.jsx'

const TaskColumn = ({icon,columnName,status,task,handleDelete}) => {
  return (
    <section className='task-column'>
        <h2 className='task-column-heading'><img className="task_column_items" src={icon}></img>{columnName}</h2>
        {
          task.map((tasks,index)=> tasks.status== status && <TaskCard key={index} columnName={tasks.task} tags={tasks.tags} handleDelete={handleDelete} index={index}></TaskCard>)
        }
    </section>
  )
}

export default TaskColumn